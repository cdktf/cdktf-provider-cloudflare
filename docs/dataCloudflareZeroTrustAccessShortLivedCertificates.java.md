# `dataCloudflareZeroTrustAccessShortLivedCertificates` Submodule <a name="`dataCloudflareZeroTrustAccessShortLivedCertificates` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustAccessShortLivedCertificates <a name="DataCloudflareZeroTrustAccessShortLivedCertificates" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_short_lived_certificates cloudflare_zero_trust_access_short_lived_certificates}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_short_lived_certificates.DataCloudflareZeroTrustAccessShortLivedCertificates;

DataCloudflareZeroTrustAccessShortLivedCertificates.Builder.create(Construct scope, java.lang.String id)
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
//  .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_short_lived_certificates#account_id DataCloudflareZeroTrustAccessShortLivedCertificates#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_short_lived_certificates#max_items DataCloudflareZeroTrustAccessShortLivedCertificates#max_items}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_short_lived_certificates#zone_id DataCloudflareZeroTrustAccessShortLivedCertificates#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetAccountId"></a>

```java
public void resetAccountId()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustAccessShortLivedCertificates resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_short_lived_certificates.DataCloudflareZeroTrustAccessShortLivedCertificates;

DataCloudflareZeroTrustAccessShortLivedCertificates.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_short_lived_certificates.DataCloudflareZeroTrustAccessShortLivedCertificates;

DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_short_lived_certificates.DataCloudflareZeroTrustAccessShortLivedCertificates;

DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_short_lived_certificates.DataCloudflareZeroTrustAccessShortLivedCertificates;

DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustAccessShortLivedCertificates resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustAccessShortLivedCertificates to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustAccessShortLivedCertificates that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_short_lived_certificates#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustAccessShortLivedCertificates to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.result">result</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList">DataCloudflareZeroTrustAccessShortLivedCertificatesResultList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.result"></a>

```java
public DataCloudflareZeroTrustAccessShortLivedCertificatesResultList getResult();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList">DataCloudflareZeroTrustAccessShortLivedCertificatesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificates.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustAccessShortLivedCertificatesConfig <a name="DataCloudflareZeroTrustAccessShortLivedCertificatesConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_short_lived_certificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig;

DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.builder()
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
//  .accountId(java.lang.String)
//  .maxItems(java.lang.Number)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_short_lived_certificates#account_id DataCloudflareZeroTrustAccessShortLivedCertificates#account_id}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_short_lived_certificates#max_items DataCloudflareZeroTrustAccessShortLivedCertificates#max_items}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/data-sources/zero_trust_access_short_lived_certificates#zone_id DataCloudflareZeroTrustAccessShortLivedCertificates#zone_id}

---

### DataCloudflareZeroTrustAccessShortLivedCertificatesResult <a name="DataCloudflareZeroTrustAccessShortLivedCertificatesResult" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResult"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResult.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_short_lived_certificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResult;

DataCloudflareZeroTrustAccessShortLivedCertificatesResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustAccessShortLivedCertificatesResultList <a name="DataCloudflareZeroTrustAccessShortLivedCertificatesResultList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_short_lived_certificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList;

new DataCloudflareZeroTrustAccessShortLivedCertificatesResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.get"></a>

```java
public DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference <a name="DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_access_short_lived_certificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference;

new DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.aud">aud</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResult">DataCloudflareZeroTrustAccessShortLivedCertificatesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aud`<sup>Required</sup> <a name="aud" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.aud"></a>

```java
public java.lang.String getAud();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustAccessShortLivedCertificatesResult getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustAccessShortLivedCertificates.DataCloudflareZeroTrustAccessShortLivedCertificatesResult">DataCloudflareZeroTrustAccessShortLivedCertificatesResult</a>

---



