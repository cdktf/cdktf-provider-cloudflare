# `dlpProfile` Submodule <a name="`dlpProfile` Submodule" id="@cdktf/provider-cloudflare.dlpProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DlpProfile <a name="DlpProfile" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile cloudflare_dlp_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfile;

DlpProfile.Builder.create(Construct scope, java.lang.String id)
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
    .entry(java.util.List<DlpProfileEntry>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .contextAwareness(DlpProfileContextAwareness)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ocrEnabled(java.lang.Boolean)
//  .ocrEnabled(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.allowedMatchCount">allowedMatchCount</a></code> | <code>java.lang.Number</code> | Related DLP policies will trigger when the match count exceeds the number set. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.entry">entry</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>></code> | entry block. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the profile. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a></code> | context_awareness block. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Brief summary of the profile and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#id DlpProfile#id}. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.ocrEnabled">ocrEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, scan images via OCR to determine if any text present matches filters. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#account_id DlpProfile#account_id}

---

##### `allowedMatchCount`<sup>Required</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.allowedMatchCount"></a>

- *Type:* java.lang.Number

Related DLP policies will trigger when the match count exceeds the number set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#allowed_match_count DlpProfile#allowed_match_count}

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.entry"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>>

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#entry DlpProfile#entry}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the profile. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#name DlpProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#type DlpProfile#type}

---

##### `contextAwareness`<sup>Optional</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.contextAwareness"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a>

context_awareness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#context_awareness DlpProfile#context_awareness}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Brief summary of the profile and its intended use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#description DlpProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#id DlpProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ocrEnabled`<sup>Optional</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.Initializer.parameter.ocrEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, scan images via OCR to determine if any text present matches filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#ocr_enabled DlpProfile#ocr_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.putContextAwareness">putContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.putEntry">putEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetContextAwareness">resetContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetOcrEnabled">resetOcrEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContextAwareness` <a name="putContextAwareness" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.putContextAwareness"></a>

```java
public void putContextAwareness(DlpProfileContextAwareness value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.putContextAwareness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a>

---

##### `putEntry` <a name="putEntry" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.putEntry"></a>

```java
public void putEntry(IResolvable OR java.util.List<DlpProfileEntry> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.putEntry.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>>

---

##### `resetContextAwareness` <a name="resetContextAwareness" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetContextAwareness"></a>

```java
public void resetContextAwareness()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetId"></a>

```java
public void resetId()
```

##### `resetOcrEnabled` <a name="resetOcrEnabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.resetOcrEnabled"></a>

```java
public void resetOcrEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DlpProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfile;

DlpProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfile;

DlpProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfile;

DlpProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfile;

DlpProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DlpProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DlpProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DlpProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DlpProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DlpProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference">DlpProfileContextAwarenessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.entry">entry</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList">DlpProfileEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.allowedMatchCountInput">allowedMatchCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.contextAwarenessInput">contextAwarenessInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.entryInput">entryInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.ocrEnabledInput">ocrEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.allowedMatchCount">allowedMatchCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.ocrEnabled">ocrEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `contextAwareness`<sup>Required</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.contextAwareness"></a>

```java
public DlpProfileContextAwarenessOutputReference getContextAwareness();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference">DlpProfileContextAwarenessOutputReference</a>

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.entry"></a>

```java
public DlpProfileEntryList getEntry();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList">DlpProfileEntryList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowedMatchCountInput`<sup>Optional</sup> <a name="allowedMatchCountInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.allowedMatchCountInput"></a>

```java
public java.lang.Number getAllowedMatchCountInput();
```

- *Type:* java.lang.Number

---

##### `contextAwarenessInput`<sup>Optional</sup> <a name="contextAwarenessInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.contextAwarenessInput"></a>

```java
public DlpProfileContextAwareness getContextAwarenessInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `entryInput`<sup>Optional</sup> <a name="entryInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.entryInput"></a>

```java
public java.lang.Object getEntryInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ocrEnabledInput`<sup>Optional</sup> <a name="ocrEnabledInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.ocrEnabledInput"></a>

```java
public java.lang.Object getOcrEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowedMatchCount`<sup>Required</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.allowedMatchCount"></a>

```java
public java.lang.Number getAllowedMatchCount();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ocrEnabled`<sup>Required</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.ocrEnabled"></a>

```java
public java.lang.Object getOcrEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DlpProfileConfig <a name="DlpProfileConfig" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfileConfig;

DlpProfileConfig.builder()
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
    .entry(java.util.List<DlpProfileEntry>)
    .name(java.lang.String)
    .type(java.lang.String)
//  .contextAwareness(DlpProfileContextAwareness)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .ocrEnabled(java.lang.Boolean)
//  .ocrEnabled(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.allowedMatchCount">allowedMatchCount</a></code> | <code>java.lang.Number</code> | Related DLP policies will trigger when the match count exceeds the number set. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.entry">entry</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>></code> | entry block. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the profile. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.type">type</a></code> | <code>java.lang.String</code> | The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.contextAwareness">contextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a></code> | context_awareness block. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.description">description</a></code> | <code>java.lang.String</code> | Brief summary of the profile and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#id DlpProfile#id}. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.ocrEnabled">ocrEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If true, scan images via OCR to determine if any text present matches filters. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#account_id DlpProfile#account_id}

---

##### `allowedMatchCount`<sup>Required</sup> <a name="allowedMatchCount" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.allowedMatchCount"></a>

```java
public java.lang.Number getAllowedMatchCount();
```

- *Type:* java.lang.Number

Related DLP policies will trigger when the match count exceeds the number set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#allowed_match_count DlpProfile#allowed_match_count}

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.entry"></a>

```java
public java.lang.Object getEntry();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>>

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#entry DlpProfile#entry}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the profile. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#name DlpProfile#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#type DlpProfile#type}

---

##### `contextAwareness`<sup>Optional</sup> <a name="contextAwareness" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.contextAwareness"></a>

```java
public DlpProfileContextAwareness getContextAwareness();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a>

context_awareness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#context_awareness DlpProfile#context_awareness}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Brief summary of the profile and its intended use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#description DlpProfile#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#id DlpProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ocrEnabled`<sup>Optional</sup> <a name="ocrEnabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileConfig.property.ocrEnabled"></a>

```java
public java.lang.Object getOcrEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If true, scan images via OCR to determine if any text present matches filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#ocr_enabled DlpProfile#ocr_enabled}

---

### DlpProfileContextAwareness <a name="DlpProfileContextAwareness" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfileContextAwareness;

DlpProfileContextAwareness.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
    .skip(DlpProfileContextAwarenessSkip)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a></code> | skip block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#enabled DlpProfile#enabled}

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness.property.skip"></a>

```java
public DlpProfileContextAwarenessSkip getSkip();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a>

skip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#skip DlpProfile#skip}

---

### DlpProfileContextAwarenessSkip <a name="DlpProfileContextAwarenessSkip" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfileContextAwarenessSkip;

DlpProfileContextAwarenessSkip.builder()
    .files(java.lang.Boolean)
    .files(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip.property.files">files</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Return all matches, regardless of context analysis result, if the data is a file. |

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip.property.files"></a>

```java
public java.lang.Object getFiles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Return all matches, regardless of context analysis result, if the data is a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#files DlpProfile#files}

---

### DlpProfileEntry <a name="DlpProfileEntry" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfileEntry;

DlpProfileEntry.builder()
    .name(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .pattern(DlpProfileEntryPattern)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.name">name</a></code> | <code>java.lang.String</code> | Name of the entry to deploy. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the entry is active. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.id">id</a></code> | <code>java.lang.String</code> | Unique entry identifier. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern">DlpProfileEntryPattern</a></code> | pattern block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the entry to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#name DlpProfile#name}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the entry is active. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#enabled DlpProfile#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique entry identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#id DlpProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pattern`<sup>Optional</sup> <a name="pattern" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry.property.pattern"></a>

```java
public DlpProfileEntryPattern getPattern();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern">DlpProfileEntryPattern</a>

pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#pattern DlpProfile#pattern}

---

### DlpProfileEntryPattern <a name="DlpProfileEntryPattern" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfileEntryPattern;

DlpProfileEntryPattern.builder()
    .regex(java.lang.String)
//  .validation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern.property.regex">regex</a></code> | <code>java.lang.String</code> | The regex that defines the pattern. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern.property.validation">validation</a></code> | <code>java.lang.String</code> | The validation algorithm to apply with this pattern. |

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

The regex that defines the pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#regex DlpProfile#regex}

---

##### `validation`<sup>Optional</sup> <a name="validation" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern.property.validation"></a>

```java
public java.lang.String getValidation();
```

- *Type:* java.lang.String

The validation algorithm to apply with this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/dlp_profile#validation DlpProfile#validation}

---

## Classes <a name="Classes" id="Classes"></a>

### DlpProfileContextAwarenessOutputReference <a name="DlpProfileContextAwarenessOutputReference" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfileContextAwarenessOutputReference;

new DlpProfileContextAwarenessOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.putSkip">putSkip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSkip` <a name="putSkip" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.putSkip"></a>

```java
public void putSkip(DlpProfileContextAwarenessSkip value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.putSkip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.skip">skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference">DlpProfileContextAwarenessSkipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.skipInput">skipInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `skip`<sup>Required</sup> <a name="skip" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.skip"></a>

```java
public DlpProfileContextAwarenessSkipOutputReference getSkip();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference">DlpProfileContextAwarenessSkipOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `skipInput`<sup>Optional</sup> <a name="skipInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.skipInput"></a>

```java
public DlpProfileContextAwarenessSkip getSkipInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessOutputReference.property.internalValue"></a>

```java
public DlpProfileContextAwareness getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwareness">DlpProfileContextAwareness</a>

---


### DlpProfileContextAwarenessSkipOutputReference <a name="DlpProfileContextAwarenessSkipOutputReference" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfileContextAwarenessSkipOutputReference;

new DlpProfileContextAwarenessSkipOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.filesInput">filesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.files">files</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.filesInput"></a>

```java
public java.lang.Object getFilesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.files"></a>

```java
public java.lang.Object getFiles();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkipOutputReference.property.internalValue"></a>

```java
public DlpProfileContextAwarenessSkip getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileContextAwarenessSkip">DlpProfileContextAwarenessSkip</a>

---


### DlpProfileEntryList <a name="DlpProfileEntryList" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfileEntryList;

new DlpProfileEntryList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.get"></a>

```java
public DlpProfileEntryOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>>

---


### DlpProfileEntryOutputReference <a name="DlpProfileEntryOutputReference" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfileEntryOutputReference;

new DlpProfileEntryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.putPattern">putPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resetPattern">resetPattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPattern` <a name="putPattern" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.putPattern"></a>

```java
public void putPattern(DlpProfileEntryPattern value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.putPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern">DlpProfileEntryPattern</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetPattern` <a name="resetPattern" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.resetPattern"></a>

```java
public void resetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.pattern">pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference">DlpProfileEntryPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.patternInput">patternInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern">DlpProfileEntryPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.pattern"></a>

```java
public DlpProfileEntryPatternOutputReference getPattern();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference">DlpProfileEntryPatternOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.patternInput"></a>

```java
public DlpProfileEntryPattern getPatternInput();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern">DlpProfileEntryPattern</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntry">DlpProfileEntry</a>

---


### DlpProfileEntryPatternOutputReference <a name="DlpProfileEntryPatternOutputReference" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.dlp_profile.DlpProfileEntryPatternOutputReference;

new DlpProfileEntryPatternOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.resetValidation">resetValidation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValidation` <a name="resetValidation" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.resetValidation"></a>

```java
public void resetValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.validationInput">validationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.regex">regex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.validation">validation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern">DlpProfileEntryPattern</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.regexInput"></a>

```java
public java.lang.String getRegexInput();
```

- *Type:* java.lang.String

---

##### `validationInput`<sup>Optional</sup> <a name="validationInput" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.validationInput"></a>

```java
public java.lang.String getValidationInput();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.regex"></a>

```java
public java.lang.String getRegex();
```

- *Type:* java.lang.String

---

##### `validation`<sup>Required</sup> <a name="validation" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.validation"></a>

```java
public java.lang.String getValidation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPatternOutputReference.property.internalValue"></a>

```java
public DlpProfileEntryPattern getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-cloudflare.dlpProfile.DlpProfileEntryPattern">DlpProfileEntryPattern</a>

---



