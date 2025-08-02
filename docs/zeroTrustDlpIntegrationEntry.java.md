# `zeroTrustDlpIntegrationEntry` Submodule <a name="`zeroTrustDlpIntegrationEntry` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpIntegrationEntry <a name="ZeroTrustDlpIntegrationEntry" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry cloudflare_zero_trust_dlp_integration_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_integration_entry.ZeroTrustDlpIntegrationEntry;

ZeroTrustDlpIntegrationEntry.Builder.create(Construct scope, java.lang.String id)
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .entryId(java.lang.String)
//  .profileId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#account_id ZeroTrustDlpIntegrationEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#enabled ZeroTrustDlpIntegrationEntry#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.entryId">entryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#entry_id ZeroTrustDlpIntegrationEntry#entry_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.profileId">profileId</a></code> | <code>java.lang.String</code> | This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#account_id ZeroTrustDlpIntegrationEntry#account_id}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#enabled ZeroTrustDlpIntegrationEntry#enabled}.

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.entryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#entry_id ZeroTrustDlpIntegrationEntry#entry_id}.

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.Initializer.parameter.profileId"></a>

- *Type:* java.lang.String

This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#profile_id ZeroTrustDlpIntegrationEntry#profile_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.resetProfileId">resetProfileId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetProfileId` <a name="resetProfileId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.resetProfileId"></a>

```java
public void resetProfileId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDlpIntegrationEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_integration_entry.ZeroTrustDlpIntegrationEntry;

ZeroTrustDlpIntegrationEntry.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_integration_entry.ZeroTrustDlpIntegrationEntry;

ZeroTrustDlpIntegrationEntry.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_integration_entry.ZeroTrustDlpIntegrationEntry;

ZeroTrustDlpIntegrationEntry.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_integration_entry.ZeroTrustDlpIntegrationEntry;

ZeroTrustDlpIntegrationEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustDlpIntegrationEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustDlpIntegrationEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustDlpIntegrationEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustDlpIntegrationEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpIntegrationEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.entryIdInput">entryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.entryId">entryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entryIdInput`<sup>Optional</sup> <a name="entryIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.entryIdInput"></a>

```java
public java.lang.String getEntryIdInput();
```

- *Type:* java.lang.String

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.entryId"></a>

```java
public java.lang.String getEntryId();
```

- *Type:* java.lang.String

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntry.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpIntegrationEntryConfig <a name="ZeroTrustDlpIntegrationEntryConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_integration_entry.ZeroTrustDlpIntegrationEntryConfig;

ZeroTrustDlpIntegrationEntryConfig.builder()
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
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .entryId(java.lang.String)
//  .profileId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#account_id ZeroTrustDlpIntegrationEntry#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#enabled ZeroTrustDlpIntegrationEntry#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.entryId">entryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#entry_id ZeroTrustDlpIntegrationEntry#entry_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.profileId">profileId</a></code> | <code>java.lang.String</code> | This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#account_id ZeroTrustDlpIntegrationEntry#account_id}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#enabled ZeroTrustDlpIntegrationEntry#enabled}.

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.entryId"></a>

```java
public java.lang.String getEntryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#entry_id ZeroTrustDlpIntegrationEntry#entry_id}.

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="@cdktf/provider-cloudflare.zeroTrustDlpIntegrationEntry.ZeroTrustDlpIntegrationEntryConfig.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

This field is not actually used as the owning profile for a predefined entry is already set to a predefined profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_dlp_integration_entry#profile_id ZeroTrustDlpIntegrationEntry#profile_id}

---



