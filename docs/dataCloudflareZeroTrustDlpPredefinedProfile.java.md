# `dataCloudflareZeroTrustDlpPredefinedProfile` Submodule <a name="`dataCloudflareZeroTrustDlpPredefinedProfile` Submodule" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustDlpPredefinedProfile <a name="DataCloudflareZeroTrustDlpPredefinedProfile" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfile;

DataCloudflareZeroTrustDlpPredefinedProfile.Builder.create(Construct scope, java.lang.String id)
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
    .profileId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_dlp_predefined_profile#account_id DataCloudflareZeroTrustDlpPredefinedProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.profileId">profileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_dlp_predefined_profile#profile_id DataCloudflareZeroTrustDlpPredefinedProfile#profile_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_dlp_predefined_profile#account_id DataCloudflareZeroTrustDlpPredefinedProfile#account_id}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.Initializer.parameter.profileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_dlp_predefined_profile#profile_id DataCloudflareZeroTrustDlpPredefinedProfile#profile_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataCloudflareZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfile;

DataCloudflareZeroTrustDlpPredefinedProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfile;

DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfile;

DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfile;

DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataCloudflareZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustDlpPredefinedProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustDlpPredefinedProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_dlp_predefined_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustDlpPredefinedProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.aiContextEnabled">aiContextEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.allowedMatchCount">allowedMatchCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.confidenceThreshold">confidenceThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.entries">entries</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList">DataCloudflareZeroTrustDlpPredefinedProfileEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.ocrEnabled">ocrEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.openAccess">openAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `aiContextEnabled`<sup>Required</sup> <a name="aiContextEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.aiContextEnabled"></a>

```java
public IResolvable getAiContextEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `allowedMatchCount`<sup>Required</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.allowedMatchCount"></a>

```java
public java.lang.Number getAllowedMatchCount();
```

- *Type:* java.lang.Number

---

##### `confidenceThreshold`<sup>Required</sup> <a name="confidenceThreshold" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.confidenceThreshold"></a>

```java
public java.lang.String getConfidenceThreshold();
```

- *Type:* java.lang.String

---

##### `contextAwareness`<sup>Required</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.contextAwareness"></a>

```java
public DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference getContextAwareness();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.entries"></a>

```java
public DataCloudflareZeroTrustDlpPredefinedProfileEntriesList getEntries();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList">DataCloudflareZeroTrustDlpPredefinedProfileEntriesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ocrEnabled`<sup>Required</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.ocrEnabled"></a>

```java
public IResolvable getOcrEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `openAccess`<sup>Required</sup> <a name="openAccess" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.openAccess"></a>

```java
public IResolvable getOpenAccess();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustDlpPredefinedProfileConfig <a name="DataCloudflareZeroTrustDlpPredefinedProfileConfig" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfileConfig;

DataCloudflareZeroTrustDlpPredefinedProfileConfig.builder()
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
    .profileId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_dlp_predefined_profile#account_id DataCloudflareZeroTrustDlpPredefinedProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.profileId">profileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_dlp_predefined_profile#profile_id DataCloudflareZeroTrustDlpPredefinedProfile#profile_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_dlp_predefined_profile#account_id DataCloudflareZeroTrustDlpPredefinedProfile#account_id}.

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileConfig.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/data-sources/zero_trust_dlp_predefined_profile#profile_id DataCloudflareZeroTrustDlpPredefinedProfile#profile_id}.

---

### DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness <a name="DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness;

DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness.builder()
    .build();
```


### DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip <a name="DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip;

DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip.builder()
    .build();
```


### DataCloudflareZeroTrustDlpPredefinedProfileEntries <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntries" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfileEntries;

DataCloudflareZeroTrustDlpPredefinedProfileEntries.builder()
    .build();
```


### DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence;

DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence.builder()
    .build();
```


### DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern;

DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference;

new DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness">DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.skip"></a>

```java
public DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference getSkip();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness">DataCloudflareZeroTrustDlpPredefinedProfileContextAwareness</a>

---


### DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference;

new DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.files">files</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip">DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.files"></a>

```java
public IResolvable getFiles();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkipOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip">DataCloudflareZeroTrustDlpPredefinedProfileContextAwarenessSkip</a>

---


### DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference;

new DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.aiContextAvailable">aiContextAvailable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.available">available</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence">DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aiContextAvailable`<sup>Required</sup> <a name="aiContextAvailable" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.aiContextAvailable"></a>

```java
public IResolvable getAiContextAvailable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `available`<sup>Required</sup> <a name="available" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.available"></a>

```java
public IResolvable getAvailable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence">DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidence</a>

---


### DataCloudflareZeroTrustDlpPredefinedProfileEntriesList <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntriesList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList;

new DataCloudflareZeroTrustDlpPredefinedProfileEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.get"></a>

```java
public DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference;

new DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.caseSensitive">caseSensitive</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.confidence">confidence</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.secret">secret</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.wordList">wordList</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntries">DataCloudflareZeroTrustDlpPredefinedProfileEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caseSensitive`<sup>Required</sup> <a name="caseSensitive" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.caseSensitive"></a>

```java
public IResolvable getCaseSensitive();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `confidence`<sup>Required</sup> <a name="confidence" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.confidence"></a>

```java
public DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference getConfidence();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileEntriesConfidenceOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.pattern"></a>

```java
public DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference getPattern();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference">DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference</a>

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.secret"></a>

```java
public IResolvable getSecret();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `wordList`<sup>Required</sup> <a name="wordList" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.wordList"></a>

```java
public java.lang.String getWordList();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDlpPredefinedProfileEntries getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntries">DataCloudflareZeroTrustDlpPredefinedProfileEntries</a>

---


### DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference <a name="DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.data_cloudflare_zero_trust_dlp_predefined_profile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference;

new DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.validation">validation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern">DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.validation"></a>

```java
public java.lang.String getValidation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPatternOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dataCloudflareZeroTrustDlpPredefinedProfile.DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern">DataCloudflareZeroTrustDlpPredefinedProfileEntriesPattern</a>

---



