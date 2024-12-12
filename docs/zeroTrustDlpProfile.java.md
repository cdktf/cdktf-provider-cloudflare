# `zeroTrustDlpProfile` Submodule <a name="`zeroTrustDlpProfile` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpProfile <a name="ZeroTrustDlpProfile" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile cloudflare_zero_trust_dlp_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfile;

ZeroTrustDlpProfile.Builder.create(Construct scope, java.lang.String id)
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
    .allowedMatchCount(java.lang.Number)
    .entry(IResolvable)
    .entry(java.util.List<ZeroTrustDlpProfileEntry>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .contextAwareness(ZeroTrustDlpProfileContextAwareness)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ocrEnabled(java.lang.Boolean)
//  .ocrEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.allowedMatchCount">allowedMatchCount</a></code> | <code>java.lang.Number</code> | Related DLP policies will trigger when the match count exceeds the number set. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.entry">entry</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>></code> | entry block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the profile. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a></code> | context_awareness block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Brief summary of the profile and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#id ZeroTrustDlpProfile#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.ocrEnabled">ocrEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, scan images via OCR to determine if any text present matches filters. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#account_id ZeroTrustDlpProfile#account_id}

---

##### `allowedMatchCount`<sup>Required</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.allowedMatchCount"></a>

- *Type:* java.lang.Number

Related DLP policies will trigger when the match count exceeds the number set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#allowed_match_count ZeroTrustDlpProfile#allowed_match_count}

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.entry"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>>

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#entry ZeroTrustDlpProfile#entry}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the profile. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#name ZeroTrustDlpProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#type ZeroTrustDlpProfile#type}

---

##### `contextAwareness`<sup>Optional</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.contextAwareness"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a>

context_awareness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#context_awareness ZeroTrustDlpProfile#context_awareness}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Brief summary of the profile and its intended use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#description ZeroTrustDlpProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#id ZeroTrustDlpProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ocrEnabled`<sup>Optional</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.ocrEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, scan images via OCR to determine if any text present matches filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#ocr_enabled ZeroTrustDlpProfile#ocr_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putContextAwareness">putContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putEntry">putEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetContextAwareness">resetContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetOcrEnabled">resetOcrEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContextAwareness` <a name="putContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putContextAwareness"></a>

```java
public void putContextAwareness(ZeroTrustDlpProfileContextAwareness value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putContextAwareness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a>

---

##### `putEntry` <a name="putEntry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putEntry"></a>

```java
public void putEntry(IResolvable OR java.util.List<ZeroTrustDlpProfileEntry> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putEntry.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>>

---

##### `resetContextAwareness` <a name="resetContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetContextAwareness"></a>

```java
public void resetContextAwareness()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetId"></a>

```java
public void resetId()
```

##### `resetOcrEnabled` <a name="resetOcrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetOcrEnabled"></a>

```java
public void resetOcrEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDlpProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfile;

ZeroTrustDlpProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfile;

ZeroTrustDlpProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfile;

ZeroTrustDlpProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfile;

ZeroTrustDlpProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustDlpProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustDlpProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustDlpProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustDlpProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference">ZeroTrustDlpProfileContextAwarenessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.entry">entry</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList">ZeroTrustDlpProfileEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.allowedMatchCountInput">allowedMatchCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.contextAwarenessInput">contextAwarenessInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.entryInput">entryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.ocrEnabledInput">ocrEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.allowedMatchCount">allowedMatchCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.ocrEnabled">ocrEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contextAwareness`<sup>Required</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.contextAwareness"></a>

```java
public ZeroTrustDlpProfileContextAwarenessOutputReference getContextAwareness();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference">ZeroTrustDlpProfileContextAwarenessOutputReference</a>

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.entry"></a>

```java
public ZeroTrustDlpProfileEntryList getEntry();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList">ZeroTrustDlpProfileEntryList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowedMatchCountInput`<sup>Optional</sup> <a name="allowedMatchCountInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.allowedMatchCountInput"></a>

```java
public java.lang.Number getAllowedMatchCountInput();
```

- *Type:* java.lang.Number

---

##### `contextAwarenessInput`<sup>Optional</sup> <a name="contextAwarenessInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.contextAwarenessInput"></a>

```java
public ZeroTrustDlpProfileContextAwareness getContextAwarenessInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `entryInput`<sup>Optional</sup> <a name="entryInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.entryInput"></a>

```java
public java.lang.Object getEntryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ocrEnabledInput`<sup>Optional</sup> <a name="ocrEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.ocrEnabledInput"></a>

```java
public java.lang.Object getOcrEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowedMatchCount`<sup>Required</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.allowedMatchCount"></a>

```java
public java.lang.Number getAllowedMatchCount();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ocrEnabled`<sup>Required</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.ocrEnabled"></a>

```java
public java.lang.Object getOcrEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpProfileConfig <a name="ZeroTrustDlpProfileConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfileConfig;

ZeroTrustDlpProfileConfig.builder()
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
    .allowedMatchCount(java.lang.Number)
    .entry(IResolvable)
    .entry(java.util.List<ZeroTrustDlpProfileEntry>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .contextAwareness(ZeroTrustDlpProfileContextAwareness)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ocrEnabled(java.lang.Boolean)
//  .ocrEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.allowedMatchCount">allowedMatchCount</a></code> | <code>java.lang.Number</code> | Related DLP policies will trigger when the match count exceeds the number set. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.entry">entry</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>></code> | entry block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the profile. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a></code> | context_awareness block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | Brief summary of the profile and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#id ZeroTrustDlpProfile#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.ocrEnabled">ocrEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, scan images via OCR to determine if any text present matches filters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#account_id ZeroTrustDlpProfile#account_id}

---

##### `allowedMatchCount`<sup>Required</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.allowedMatchCount"></a>

```java
public java.lang.Number getAllowedMatchCount();
```

- *Type:* java.lang.Number

Related DLP policies will trigger when the match count exceeds the number set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#allowed_match_count ZeroTrustDlpProfile#allowed_match_count}

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.entry"></a>

```java
public java.lang.Object getEntry();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>>

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#entry ZeroTrustDlpProfile#entry}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the profile. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#name ZeroTrustDlpProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#type ZeroTrustDlpProfile#type}

---

##### `contextAwareness`<sup>Optional</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.contextAwareness"></a>

```java
public ZeroTrustDlpProfileContextAwareness getContextAwareness();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a>

context_awareness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#context_awareness ZeroTrustDlpProfile#context_awareness}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Brief summary of the profile and its intended use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#description ZeroTrustDlpProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#id ZeroTrustDlpProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ocrEnabled`<sup>Optional</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.ocrEnabled"></a>

```java
public java.lang.Object getOcrEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, scan images via OCR to determine if any text present matches filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#ocr_enabled ZeroTrustDlpProfile#ocr_enabled}

---

### ZeroTrustDlpProfileContextAwareness <a name="ZeroTrustDlpProfileContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfileContextAwareness;

ZeroTrustDlpProfileContextAwareness.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .skip(ZeroTrustDlpProfileContextAwarenessSkip)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a></code> | skip block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#enabled ZeroTrustDlpProfile#enabled}

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.property.skip"></a>

```java
public ZeroTrustDlpProfileContextAwarenessSkip getSkip();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a>

skip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#skip ZeroTrustDlpProfile#skip}

---

### ZeroTrustDlpProfileContextAwarenessSkip <a name="ZeroTrustDlpProfileContextAwarenessSkip" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfileContextAwarenessSkip;

ZeroTrustDlpProfileContextAwarenessSkip.builder()
    .files(java.lang.Boolean)
    .files(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip.property.files">files</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Return all matches, regardless of context analysis result, if the data is a file. |

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip.property.files"></a>

```java
public java.lang.Object getFiles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Return all matches, regardless of context analysis result, if the data is a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#files ZeroTrustDlpProfile#files}

---

### ZeroTrustDlpProfileEntry <a name="ZeroTrustDlpProfileEntry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfileEntry;

ZeroTrustDlpProfileEntry.builder()
    .name(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .pattern(ZeroTrustDlpProfileEntryPattern)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.name">name</a></code> | <code>java.lang.String</code> | Name of the entry to deploy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the entry is active. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.id">id</a></code> | <code>java.lang.String</code> | Unique entry identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a></code> | pattern block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the entry to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#name ZeroTrustDlpProfile#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the entry is active. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#enabled ZeroTrustDlpProfile#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique entry identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#id ZeroTrustDlpProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.pattern"></a>

```java
public ZeroTrustDlpProfileEntryPattern getPattern();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a>

pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#pattern ZeroTrustDlpProfile#pattern}

---

### ZeroTrustDlpProfileEntryPattern <a name="ZeroTrustDlpProfileEntryPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfileEntryPattern;

ZeroTrustDlpProfileEntryPattern.builder()
    .regex(java.lang.String)
//  .validation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.property.regex">regex</a></code> | <code>java.lang.String</code> | The regex that defines the pattern. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.property.validation">validation</a></code> | <code>java.lang.String</code> | The validation algorithm to apply with this pattern. |

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

The regex that defines the pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#regex ZeroTrustDlpProfile#regex}

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.property.validation"></a>

```java
public java.lang.String getValidation();
```

- *Type:* java.lang.String

The validation algorithm to apply with this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_dlp_profile#validation ZeroTrustDlpProfile#validation}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpProfileContextAwarenessOutputReference <a name="ZeroTrustDlpProfileContextAwarenessOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfileContextAwarenessOutputReference;

new ZeroTrustDlpProfileContextAwarenessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.putSkip">putSkip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSkip` <a name="putSkip" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.putSkip"></a>

```java
public void putSkip(ZeroTrustDlpProfileContextAwarenessSkip value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.putSkip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference">ZeroTrustDlpProfileContextAwarenessSkipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.skipInput">skipInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.skip"></a>

```java
public ZeroTrustDlpProfileContextAwarenessSkipOutputReference getSkip();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference">ZeroTrustDlpProfileContextAwarenessSkipOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipInput`<sup>Optional</sup> <a name="skipInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.skipInput"></a>

```java
public ZeroTrustDlpProfileContextAwarenessSkip getSkipInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.internalValue"></a>

```java
public ZeroTrustDlpProfileContextAwareness getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a>

---


### ZeroTrustDlpProfileContextAwarenessSkipOutputReference <a name="ZeroTrustDlpProfileContextAwarenessSkipOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference;

new ZeroTrustDlpProfileContextAwarenessSkipOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.filesInput">filesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.files">files</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.filesInput"></a>

```java
public java.lang.Object getFilesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.files"></a>

```java
public java.lang.Object getFiles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.internalValue"></a>

```java
public ZeroTrustDlpProfileContextAwarenessSkip getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a>

---


### ZeroTrustDlpProfileEntryList <a name="ZeroTrustDlpProfileEntryList" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfileEntryList;

new ZeroTrustDlpProfileEntryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.get"></a>

```java
public ZeroTrustDlpProfileEntryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>>

---


### ZeroTrustDlpProfileEntryOutputReference <a name="ZeroTrustDlpProfileEntryOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfileEntryOutputReference;

new ZeroTrustDlpProfileEntryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.putPattern">putPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetPattern">resetPattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPattern` <a name="putPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.putPattern"></a>

```java
public void putPattern(ZeroTrustDlpProfileEntryPattern value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.putPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetPattern"></a>

```java
public void resetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference">ZeroTrustDlpProfileEntryPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.patternInput">patternInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.pattern"></a>

```java
public ZeroTrustDlpProfileEntryPatternOutputReference getPattern();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference">ZeroTrustDlpProfileEntryPatternOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.patternInput"></a>

```java
public ZeroTrustDlpProfileEntryPattern getPatternInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry">ZeroTrustDlpProfileEntry</a>

---


### ZeroTrustDlpProfileEntryPatternOutputReference <a name="ZeroTrustDlpProfileEntryPatternOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_profile.ZeroTrustDlpProfileEntryPatternOutputReference;

new ZeroTrustDlpProfileEntryPatternOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resetValidation">resetValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidation` <a name="resetValidation" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resetValidation"></a>

```java
public void resetValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.validationInput">validationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.validation">validation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.validationInput"></a>

```java
public java.lang.String getValidationInput();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.validation"></a>

```java
public java.lang.String getValidation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.internalValue"></a>

```java
public ZeroTrustDlpProfileEntryPattern getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a>

---



