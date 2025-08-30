# `zeroTrustDlpCustomProfile` Submodule <a name="`zeroTrustDlpCustomProfile` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpCustomProfile <a name="ZeroTrustDlpCustomProfile" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile cloudflare_zero_trust_dlp_custom_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfile;

ZeroTrustDlpCustomProfile.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .aiContextEnabled(java.lang.Boolean)
//  .aiContextEnabled(IResolvable)
//  .allowedMatchCount(java.lang.Number)
//  .confidenceThreshold(java.lang.String)
//  .contextAwareness(ZeroTrustDlpCustomProfileContextAwareness)
//  .description(java.lang.String)
//  .entries(IResolvable)
//  .entries(java.util.List<ZeroTrustDlpCustomProfileEntries>)
//  .ocrEnabled(java.lang.Boolean)
//  .ocrEnabled(IResolvable)
//  .sharedEntries(IResolvable)
//  .sharedEntries(java.util.List<ZeroTrustDlpCustomProfileSharedEntries>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#account_id ZeroTrustDlpCustomProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.aiContextEnabled">aiContextEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#ai_context_enabled ZeroTrustDlpCustomProfile#ai_context_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.allowedMatchCount">allowedMatchCount</a></code> | <code>java.lang.Number</code> | Related DLP policies will trigger when the match count exceeds the number set. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.confidenceThreshold">confidenceThreshold</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#confidence_threshold ZeroTrustDlpCustomProfile#confidence_threshold}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a></code> | Scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the profile. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.entries">entries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>></code> | Custom entries from this profile. If this field is omitted, entries owned by this profile will not be changed. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.ocrEnabled">ocrEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#ocr_enabled ZeroTrustDlpCustomProfile#ocr_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.sharedEntries">sharedEntries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>></code> | Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your Microsoft Information Protection profiles). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#account_id ZeroTrustDlpCustomProfile#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}.

---

##### `aiContextEnabled`<sup>Optional</sup> <a name="aiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.aiContextEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#ai_context_enabled ZeroTrustDlpCustomProfile#ai_context_enabled}.

---

##### `allowedMatchCount`<sup>Optional</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.allowedMatchCount"></a>

- *Type:* java.lang.Number

Related DLP policies will trigger when the match count exceeds the number set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#allowed_match_count ZeroTrustDlpCustomProfile#allowed_match_count}

---

##### `confidenceThreshold`<sup>Optional</sup> <a name="confidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.confidenceThreshold"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#confidence_threshold ZeroTrustDlpCustomProfile#confidence_threshold}.

---

##### `contextAwareness`<sup>Optional</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.contextAwareness"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a>

Scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#context_awareness ZeroTrustDlpCustomProfile#context_awareness}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#description ZeroTrustDlpCustomProfile#description}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.entries"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>>

Custom entries from this profile. If this field is omitted, entries owned by this profile will not be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#entries ZeroTrustDlpCustomProfile#entries}

---

##### `ocrEnabled`<sup>Optional</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.ocrEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#ocr_enabled ZeroTrustDlpCustomProfile#ocr_enabled}.

---

##### `sharedEntries`<sup>Optional</sup> <a name="sharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.Initializer.parameter.sharedEntries"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>>

Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your Microsoft Information Protection profiles).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#shared_entries ZeroTrustDlpCustomProfile#shared_entries}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putContextAwareness">putContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putSharedEntries">putSharedEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetAiContextEnabled">resetAiContextEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetAllowedMatchCount">resetAllowedMatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetConfidenceThreshold">resetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetContextAwareness">resetContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetEntries">resetEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetOcrEnabled">resetOcrEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetSharedEntries">resetSharedEntries</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContextAwareness` <a name="putContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putContextAwareness"></a>

```java
public void putContextAwareness(ZeroTrustDlpCustomProfileContextAwareness value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putContextAwareness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a>

---

##### `putEntries` <a name="putEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putEntries"></a>

```java
public void putEntries(IResolvable OR java.util.List<ZeroTrustDlpCustomProfileEntries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putEntries.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>>

---

##### `putSharedEntries` <a name="putSharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putSharedEntries"></a>

```java
public void putSharedEntries(IResolvable OR java.util.List<ZeroTrustDlpCustomProfileSharedEntries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.putSharedEntries.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>>

---

##### `resetAiContextEnabled` <a name="resetAiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetAiContextEnabled"></a>

```java
public void resetAiContextEnabled()
```

##### `resetAllowedMatchCount` <a name="resetAllowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetAllowedMatchCount"></a>

```java
public void resetAllowedMatchCount()
```

##### `resetConfidenceThreshold` <a name="resetConfidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetConfidenceThreshold"></a>

```java
public void resetConfidenceThreshold()
```

##### `resetContextAwareness` <a name="resetContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetContextAwareness"></a>

```java
public void resetContextAwareness()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEntries` <a name="resetEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetEntries"></a>

```java
public void resetEntries()
```

##### `resetOcrEnabled` <a name="resetOcrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetOcrEnabled"></a>

```java
public void resetOcrEnabled()
```

##### `resetSharedEntries` <a name="resetSharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.resetSharedEntries"></a>

```java
public void resetSharedEntries()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDlpCustomProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfile;

ZeroTrustDlpCustomProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfile;

ZeroTrustDlpCustomProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfile;

ZeroTrustDlpCustomProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfile;

ZeroTrustDlpCustomProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustDlpCustomProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ZeroTrustDlpCustomProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustDlpCustomProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustDlpCustomProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpCustomProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference">ZeroTrustDlpCustomProfileContextAwarenessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.entries">entries</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList">ZeroTrustDlpCustomProfileEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.openAccess">openAccess</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.sharedEntries">sharedEntries</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList">ZeroTrustDlpCustomProfileSharedEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.aiContextEnabledInput">aiContextEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.allowedMatchCountInput">allowedMatchCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.confidenceThresholdInput">confidenceThresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.contextAwarenessInput">contextAwarenessInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.entriesInput">entriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.ocrEnabledInput">ocrEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.sharedEntriesInput">sharedEntriesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.aiContextEnabled">aiContextEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.allowedMatchCount">allowedMatchCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.confidenceThreshold">confidenceThreshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.ocrEnabled">ocrEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contextAwareness`<sup>Required</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.contextAwareness"></a>

```java
public ZeroTrustDlpCustomProfileContextAwarenessOutputReference getContextAwareness();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference">ZeroTrustDlpCustomProfileContextAwarenessOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.entries"></a>

```java
public ZeroTrustDlpCustomProfileEntriesList getEntries();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList">ZeroTrustDlpCustomProfileEntriesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `openAccess`<sup>Required</sup> <a name="openAccess" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.openAccess"></a>

```java
public IResolvable getOpenAccess();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sharedEntries`<sup>Required</sup> <a name="sharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.sharedEntries"></a>

```java
public ZeroTrustDlpCustomProfileSharedEntriesList getSharedEntries();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList">ZeroTrustDlpCustomProfileSharedEntriesList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `aiContextEnabledInput`<sup>Optional</sup> <a name="aiContextEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.aiContextEnabledInput"></a>

```java
public java.lang.Object getAiContextEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedMatchCountInput`<sup>Optional</sup> <a name="allowedMatchCountInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.allowedMatchCountInput"></a>

```java
public java.lang.Number getAllowedMatchCountInput();
```

- *Type:* java.lang.Number

---

##### `confidenceThresholdInput`<sup>Optional</sup> <a name="confidenceThresholdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.confidenceThresholdInput"></a>

```java
public java.lang.String getConfidenceThresholdInput();
```

- *Type:* java.lang.String

---

##### `contextAwarenessInput`<sup>Optional</sup> <a name="contextAwarenessInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.contextAwarenessInput"></a>

```java
public java.lang.Object getContextAwarenessInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.entriesInput"></a>

```java
public java.lang.Object getEntriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ocrEnabledInput`<sup>Optional</sup> <a name="ocrEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.ocrEnabledInput"></a>

```java
public java.lang.Object getOcrEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sharedEntriesInput`<sup>Optional</sup> <a name="sharedEntriesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.sharedEntriesInput"></a>

```java
public java.lang.Object getSharedEntriesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `aiContextEnabled`<sup>Required</sup> <a name="aiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.aiContextEnabled"></a>

```java
public java.lang.Object getAiContextEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowedMatchCount`<sup>Required</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.allowedMatchCount"></a>

```java
public java.lang.Number getAllowedMatchCount();
```

- *Type:* java.lang.Number

---

##### `confidenceThreshold`<sup>Required</sup> <a name="confidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.confidenceThreshold"></a>

```java
public java.lang.String getConfidenceThreshold();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ocrEnabled`<sup>Required</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.ocrEnabled"></a>

```java
public java.lang.Object getOcrEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpCustomProfileConfig <a name="ZeroTrustDlpCustomProfileConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfileConfig;

ZeroTrustDlpCustomProfileConfig.builder()
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
    .name(java.lang.String)
//  .aiContextEnabled(java.lang.Boolean)
//  .aiContextEnabled(IResolvable)
//  .allowedMatchCount(java.lang.Number)
//  .confidenceThreshold(java.lang.String)
//  .contextAwareness(ZeroTrustDlpCustomProfileContextAwareness)
//  .description(java.lang.String)
//  .entries(IResolvable)
//  .entries(java.util.List<ZeroTrustDlpCustomProfileEntries>)
//  .ocrEnabled(java.lang.Boolean)
//  .ocrEnabled(IResolvable)
//  .sharedEntries(IResolvable)
//  .sharedEntries(java.util.List<ZeroTrustDlpCustomProfileSharedEntries>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#account_id ZeroTrustDlpCustomProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.aiContextEnabled">aiContextEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#ai_context_enabled ZeroTrustDlpCustomProfile#ai_context_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.allowedMatchCount">allowedMatchCount</a></code> | <code>java.lang.Number</code> | Related DLP policies will trigger when the match count exceeds the number set. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.confidenceThreshold">confidenceThreshold</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#confidence_threshold ZeroTrustDlpCustomProfile#confidence_threshold}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a></code> | Scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the profile. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.entries">entries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>></code> | Custom entries from this profile. If this field is omitted, entries owned by this profile will not be changed. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.ocrEnabled">ocrEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#ocr_enabled ZeroTrustDlpCustomProfile#ocr_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.sharedEntries">sharedEntries</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>></code> | Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your Microsoft Information Protection profiles). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#account_id ZeroTrustDlpCustomProfile#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}.

---

##### `aiContextEnabled`<sup>Optional</sup> <a name="aiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.aiContextEnabled"></a>

```java
public java.lang.Object getAiContextEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#ai_context_enabled ZeroTrustDlpCustomProfile#ai_context_enabled}.

---

##### `allowedMatchCount`<sup>Optional</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.allowedMatchCount"></a>

```java
public java.lang.Number getAllowedMatchCount();
```

- *Type:* java.lang.Number

Related DLP policies will trigger when the match count exceeds the number set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#allowed_match_count ZeroTrustDlpCustomProfile#allowed_match_count}

---

##### `confidenceThreshold`<sup>Optional</sup> <a name="confidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.confidenceThreshold"></a>

```java
public java.lang.String getConfidenceThreshold();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#confidence_threshold ZeroTrustDlpCustomProfile#confidence_threshold}.

---

##### `contextAwareness`<sup>Optional</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.contextAwareness"></a>

```java
public ZeroTrustDlpCustomProfileContextAwareness getContextAwareness();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a>

Scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#context_awareness ZeroTrustDlpCustomProfile#context_awareness}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#description ZeroTrustDlpCustomProfile#description}

---

##### `entries`<sup>Optional</sup> <a name="entries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.entries"></a>

```java
public java.lang.Object getEntries();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>>

Custom entries from this profile. If this field is omitted, entries owned by this profile will not be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#entries ZeroTrustDlpCustomProfile#entries}

---

##### `ocrEnabled`<sup>Optional</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.ocrEnabled"></a>

```java
public java.lang.Object getOcrEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#ocr_enabled ZeroTrustDlpCustomProfile#ocr_enabled}.

---

##### `sharedEntries`<sup>Optional</sup> <a name="sharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileConfig.property.sharedEntries"></a>

```java
public java.lang.Object getSharedEntries();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>>

Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your Microsoft Information Protection profiles).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#shared_entries ZeroTrustDlpCustomProfile#shared_entries}

---

### ZeroTrustDlpCustomProfileContextAwareness <a name="ZeroTrustDlpCustomProfileContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfileContextAwareness;

ZeroTrustDlpCustomProfileContextAwareness.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .skip(ZeroTrustDlpCustomProfileContextAwarenessSkip)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a></code> | Content types to exclude from context analysis and return all matches. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness.property.skip"></a>

```java
public ZeroTrustDlpCustomProfileContextAwarenessSkip getSkip();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a>

Content types to exclude from context analysis and return all matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#skip ZeroTrustDlpCustomProfile#skip}

---

### ZeroTrustDlpCustomProfileContextAwarenessSkip <a name="ZeroTrustDlpCustomProfileContextAwarenessSkip" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfileContextAwarenessSkip;

ZeroTrustDlpCustomProfileContextAwarenessSkip.builder()
    .files(java.lang.Boolean)
    .files(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip.property.files">files</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If the content type is a file, skip context analysis and return all matches. |

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip.property.files"></a>

```java
public java.lang.Object getFiles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If the content type is a file, skip context analysis and return all matches.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#files ZeroTrustDlpCustomProfile#files}

---

### ZeroTrustDlpCustomProfileEntries <a name="ZeroTrustDlpCustomProfileEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfileEntries;

ZeroTrustDlpCustomProfileEntries.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .name(java.lang.String)
    .pattern(ZeroTrustDlpCustomProfileEntriesPattern)
//  .entryId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#pattern ZeroTrustDlpCustomProfile#pattern}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.entryId">entryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#entry_id ZeroTrustDlpCustomProfile#entry_id}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#name ZeroTrustDlpCustomProfile#name}.

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.pattern"></a>

```java
public ZeroTrustDlpCustomProfileEntriesPattern getPattern();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#pattern ZeroTrustDlpCustomProfile#pattern}.

---

##### `entryId`<sup>Optional</sup> <a name="entryId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries.property.entryId"></a>

```java
public java.lang.String getEntryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#entry_id ZeroTrustDlpCustomProfile#entry_id}.

---

### ZeroTrustDlpCustomProfileEntriesPattern <a name="ZeroTrustDlpCustomProfileEntriesPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfileEntriesPattern;

ZeroTrustDlpCustomProfileEntriesPattern.builder()
    .regex(java.lang.String)
//  .validation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern.property.regex">regex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#regex ZeroTrustDlpCustomProfile#regex}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern.property.validation">validation</a></code> | <code>java.lang.String</code> | Available values: "luhn". |

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#regex ZeroTrustDlpCustomProfile#regex}.

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern.property.validation"></a>

```java
public java.lang.String getValidation();
```

- *Type:* java.lang.String

Available values: "luhn".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#validation ZeroTrustDlpCustomProfile#validation}

---

### ZeroTrustDlpCustomProfileSharedEntries <a name="ZeroTrustDlpCustomProfileSharedEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfileSharedEntries;

ZeroTrustDlpCustomProfileSharedEntries.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .entryId(java.lang.String)
    .entryType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.property.entryId">entryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#entry_id ZeroTrustDlpCustomProfile#entry_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.property.entryType">entryType</a></code> | <code>java.lang.String</code> | Available values: "custom", "predefined", "integration", "exact_data", "document_fingerprint". |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#enabled ZeroTrustDlpCustomProfile#enabled}.

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.property.entryId"></a>

```java
public java.lang.String getEntryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#entry_id ZeroTrustDlpCustomProfile#entry_id}.

---

##### `entryType`<sup>Required</sup> <a name="entryType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries.property.entryType"></a>

```java
public java.lang.String getEntryType();
```

- *Type:* java.lang.String

Available values: "custom", "predefined", "integration", "exact_data", "document_fingerprint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.9.0/docs/resources/zero_trust_dlp_custom_profile#entry_type ZeroTrustDlpCustomProfile#entry_type}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpCustomProfileContextAwarenessOutputReference <a name="ZeroTrustDlpCustomProfileContextAwarenessOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference;

new ZeroTrustDlpCustomProfileContextAwarenessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.putSkip">putSkip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSkip` <a name="putSkip" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.putSkip"></a>

```java
public void putSkip(ZeroTrustDlpCustomProfileContextAwarenessSkip value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.putSkip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference">ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.skipInput">skipInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.skip"></a>

```java
public ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference getSkip();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference">ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipInput`<sup>Optional</sup> <a name="skipInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.skipInput"></a>

```java
public java.lang.Object getSkipInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwareness">ZeroTrustDlpCustomProfileContextAwareness</a>

---


### ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference <a name="ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference;

new ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.filesInput">filesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.files">files</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.filesInput"></a>

```java
public java.lang.Object getFilesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.files"></a>

```java
public java.lang.Object getFiles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkipOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileContextAwarenessSkip">ZeroTrustDlpCustomProfileContextAwarenessSkip</a>

---


### ZeroTrustDlpCustomProfileEntriesList <a name="ZeroTrustDlpCustomProfileEntriesList" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfileEntriesList;

new ZeroTrustDlpCustomProfileEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.get"></a>

```java
public ZeroTrustDlpCustomProfileEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>>

---


### ZeroTrustDlpCustomProfileEntriesOutputReference <a name="ZeroTrustDlpCustomProfileEntriesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfileEntriesOutputReference;

new ZeroTrustDlpCustomProfileEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.putPattern">putPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.resetEntryId">resetEntryId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPattern` <a name="putPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.putPattern"></a>

```java
public void putPattern(ZeroTrustDlpCustomProfileEntriesPattern value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.putPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a>

---

##### `resetEntryId` <a name="resetEntryId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.resetEntryId"></a>

```java
public void resetEntryId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference">ZeroTrustDlpCustomProfileEntriesPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.entryIdInput">entryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.patternInput">patternInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.entryId">entryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.pattern"></a>

```java
public ZeroTrustDlpCustomProfileEntriesPatternOutputReference getPattern();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference">ZeroTrustDlpCustomProfileEntriesPatternOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entryIdInput`<sup>Optional</sup> <a name="entryIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.entryIdInput"></a>

```java
public java.lang.String getEntryIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.patternInput"></a>

```java
public java.lang.Object getPatternInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.entryId"></a>

```java
public java.lang.String getEntryId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntries">ZeroTrustDlpCustomProfileEntries</a>

---


### ZeroTrustDlpCustomProfileEntriesPatternOutputReference <a name="ZeroTrustDlpCustomProfileEntriesPatternOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference;

new ZeroTrustDlpCustomProfileEntriesPatternOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.resetValidation">resetValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidation` <a name="resetValidation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.resetValidation"></a>

```java
public void resetValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.validationInput">validationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.validation">validation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.validationInput"></a>

```java
public java.lang.String getValidationInput();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.validation"></a>

```java
public java.lang.String getValidation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPatternOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileEntriesPattern">ZeroTrustDlpCustomProfileEntriesPattern</a>

---


### ZeroTrustDlpCustomProfileSharedEntriesList <a name="ZeroTrustDlpCustomProfileSharedEntriesList" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfileSharedEntriesList;

new ZeroTrustDlpCustomProfileSharedEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.get"></a>

```java
public ZeroTrustDlpCustomProfileSharedEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>>

---


### ZeroTrustDlpCustomProfileSharedEntriesOutputReference <a name="ZeroTrustDlpCustomProfileSharedEntriesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.zero_trust_dlp_custom_profile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference;

new ZeroTrustDlpCustomProfileSharedEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryIdInput">entryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryTypeInput">entryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryId">entryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryType">entryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entryIdInput`<sup>Optional</sup> <a name="entryIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryIdInput"></a>

```java
public java.lang.String getEntryIdInput();
```

- *Type:* java.lang.String

---

##### `entryTypeInput`<sup>Optional</sup> <a name="entryTypeInput" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryTypeInput"></a>

```java
public java.lang.String getEntryTypeInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `entryId`<sup>Required</sup> <a name="entryId" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryId"></a>

```java
public java.lang.String getEntryId();
```

- *Type:* java.lang.String

---

##### `entryType`<sup>Required</sup> <a name="entryType" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.entryType"></a>

```java
public java.lang.String getEntryType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntriesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.zeroTrustDlpCustomProfile.ZeroTrustDlpCustomProfileSharedEntries">ZeroTrustDlpCustomProfileSharedEntries</a>

---



