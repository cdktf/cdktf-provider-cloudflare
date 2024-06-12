# `botManagement` Submodule <a name="`botManagement` Submodule" id="@cdktf/provider-cloudflare.botManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotManagement <a name="BotManagement" id="@cdktf/provider-cloudflare.botManagement.BotManagement"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management cloudflare_bot_management}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.bot_management.BotManagement;

BotManagement.Builder.create(Construct scope, java.lang.String id)
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
    .zoneId(java.lang.String)
//  .autoUpdateModel(java.lang.Boolean)
//  .autoUpdateModel(IResolvable)
//  .enableJs(java.lang.Boolean)
//  .enableJs(IResolvable)
//  .fightMode(java.lang.Boolean)
//  .fightMode(IResolvable)
//  .id(java.lang.String)
//  .optimizeWordpress(java.lang.Boolean)
//  .optimizeWordpress(IResolvable)
//  .sbfmDefinitelyAutomated(java.lang.String)
//  .sbfmLikelyAutomated(java.lang.String)
//  .sbfmStaticResourceProtection(java.lang.Boolean)
//  .sbfmStaticResourceProtection(IResolvable)
//  .sbfmVerifiedBots(java.lang.String)
//  .suppressSessionScore(java.lang.Boolean)
//  .suppressSessionScore(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.autoUpdateModel">autoUpdateModel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes). |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.enableJs">enableJs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.fightMode">fightMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable Bot Fight Mode. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#id BotManagement#id}. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.optimizeWordpress">optimizeWordpress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to optimize Super Bot Fight Mode protections for Wordpress. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmDefinitelyAutomated">sbfmDefinitelyAutomated</a></code> | <code>java.lang.String</code> | Super Bot Fight Mode (SBFM) action to take on definitely automated requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmLikelyAutomated">sbfmLikelyAutomated</a></code> | <code>java.lang.String</code> | Super Bot Fight Mode (SBFM) action to take on likely automated requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmStaticResourceProtection">sbfmStaticResourceProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Super Bot Fight Mode (SBFM) to enable static resource protection. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmVerifiedBots">sbfmVerifiedBots</a></code> | <code>java.lang.String</code> | Super Bot Fight Mode (SBFM) action to take on verified bots requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.suppressSessionScore">suppressSessionScore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to disable tracking the highest bot score for a session in the Bot Management cookie. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#zone_id BotManagement#zone_id}

---

##### `autoUpdateModel`<sup>Optional</sup> <a name="autoUpdateModel" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.autoUpdateModel"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}

---

##### `enableJs`<sup>Optional</sup> <a name="enableJs" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.enableJs"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#enable_js BotManagement#enable_js}

---

##### `fightMode`<sup>Optional</sup> <a name="fightMode" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.fightMode"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable Bot Fight Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#id BotManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `optimizeWordpress`<sup>Optional</sup> <a name="optimizeWordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.optimizeWordpress"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to optimize Super Bot Fight Mode protections for Wordpress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}

---

##### `sbfmDefinitelyAutomated`<sup>Optional</sup> <a name="sbfmDefinitelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmDefinitelyAutomated"></a>

- *Type:* java.lang.String

Super Bot Fight Mode (SBFM) action to take on definitely automated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}

---

##### `sbfmLikelyAutomated`<sup>Optional</sup> <a name="sbfmLikelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmLikelyAutomated"></a>

- *Type:* java.lang.String

Super Bot Fight Mode (SBFM) action to take on likely automated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}

---

##### `sbfmStaticResourceProtection`<sup>Optional</sup> <a name="sbfmStaticResourceProtection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmStaticResourceProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Super Bot Fight Mode (SBFM) to enable static resource protection.

Enable if static resources on your application need bot protection. Note: Static resource protection can also result in legitimate traffic being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}

---

##### `sbfmVerifiedBots`<sup>Optional</sup> <a name="sbfmVerifiedBots" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.sbfmVerifiedBots"></a>

- *Type:* java.lang.String

Super Bot Fight Mode (SBFM) action to take on verified bots requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}

---

##### `suppressSessionScore`<sup>Optional</sup> <a name="suppressSessionScore" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.suppressSessionScore"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to disable tracking the highest bot score for a session in the Bot Management cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel">resetAutoUpdateModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetEnableJs">resetEnableJs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetFightMode">resetFightMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress">resetOptimizeWordpress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated">resetSbfmDefinitelyAutomated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated">resetSbfmLikelyAutomated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection">resetSbfmStaticResourceProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots">resetSbfmVerifiedBots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore">resetSuppressSessionScore</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-cloudflare.botManagement.BotManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-cloudflare.botManagement.BotManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.botManagement.BotManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAutoUpdateModel` <a name="resetAutoUpdateModel" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel"></a>

```java
public void resetAutoUpdateModel()
```

##### `resetEnableJs` <a name="resetEnableJs" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetEnableJs"></a>

```java
public void resetEnableJs()
```

##### `resetFightMode` <a name="resetFightMode" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetFightMode"></a>

```java
public void resetFightMode()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetId"></a>

```java
public void resetId()
```

##### `resetOptimizeWordpress` <a name="resetOptimizeWordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress"></a>

```java
public void resetOptimizeWordpress()
```

##### `resetSbfmDefinitelyAutomated` <a name="resetSbfmDefinitelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated"></a>

```java
public void resetSbfmDefinitelyAutomated()
```

##### `resetSbfmLikelyAutomated` <a name="resetSbfmLikelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated"></a>

```java
public void resetSbfmLikelyAutomated()
```

##### `resetSbfmStaticResourceProtection` <a name="resetSbfmStaticResourceProtection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection"></a>

```java
public void resetSbfmStaticResourceProtection()
```

##### `resetSbfmVerifiedBots` <a name="resetSbfmVerifiedBots" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots"></a>

```java
public void resetSbfmVerifiedBots()
```

##### `resetSuppressSessionScore` <a name="resetSuppressSessionScore" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore"></a>

```java
public void resetSuppressSessionScore()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BotManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.bot_management.BotManagement;

BotManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.bot_management.BotManagement;

BotManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.bot_management.BotManagement;

BotManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.bot_management.BotManagement;

BotManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BotManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a BotManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BotManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BotManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the BotManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel">usingLatestModel</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput">autoUpdateModelInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJsInput">enableJsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightModeInput">fightModeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput">optimizeWordpressInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput">sbfmDefinitelyAutomatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput">sbfmLikelyAutomatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput">sbfmStaticResourceProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput">sbfmVerifiedBotsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput">suppressSessionScoreInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel">autoUpdateModel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJs">enableJs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightMode">fightMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress">optimizeWordpress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated">sbfmDefinitelyAutomated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated">sbfmLikelyAutomated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection">sbfmStaticResourceProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots">sbfmVerifiedBots</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore">suppressSessionScore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `usingLatestModel`<sup>Required</sup> <a name="usingLatestModel" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel"></a>

```java
public IResolvable getUsingLatestModel();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `autoUpdateModelInput`<sup>Optional</sup> <a name="autoUpdateModelInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput"></a>

```java
public java.lang.Object getAutoUpdateModelInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableJsInput`<sup>Optional</sup> <a name="enableJsInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJsInput"></a>

```java
public java.lang.Object getEnableJsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fightModeInput`<sup>Optional</sup> <a name="fightModeInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightModeInput"></a>

```java
public java.lang.Object getFightModeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `optimizeWordpressInput`<sup>Optional</sup> <a name="optimizeWordpressInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput"></a>

```java
public java.lang.Object getOptimizeWordpressInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sbfmDefinitelyAutomatedInput`<sup>Optional</sup> <a name="sbfmDefinitelyAutomatedInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput"></a>

```java
public java.lang.String getSbfmDefinitelyAutomatedInput();
```

- *Type:* java.lang.String

---

##### `sbfmLikelyAutomatedInput`<sup>Optional</sup> <a name="sbfmLikelyAutomatedInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput"></a>

```java
public java.lang.String getSbfmLikelyAutomatedInput();
```

- *Type:* java.lang.String

---

##### `sbfmStaticResourceProtectionInput`<sup>Optional</sup> <a name="sbfmStaticResourceProtectionInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput"></a>

```java
public java.lang.Object getSbfmStaticResourceProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sbfmVerifiedBotsInput`<sup>Optional</sup> <a name="sbfmVerifiedBotsInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput"></a>

```java
public java.lang.String getSbfmVerifiedBotsInput();
```

- *Type:* java.lang.String

---

##### `suppressSessionScoreInput`<sup>Optional</sup> <a name="suppressSessionScoreInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput"></a>

```java
public java.lang.Object getSuppressSessionScoreInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `autoUpdateModel`<sup>Required</sup> <a name="autoUpdateModel" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel"></a>

```java
public java.lang.Object getAutoUpdateModel();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableJs`<sup>Required</sup> <a name="enableJs" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJs"></a>

```java
public java.lang.Object getEnableJs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fightMode`<sup>Required</sup> <a name="fightMode" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightMode"></a>

```java
public java.lang.Object getFightMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `optimizeWordpress`<sup>Required</sup> <a name="optimizeWordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress"></a>

```java
public java.lang.Object getOptimizeWordpress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sbfmDefinitelyAutomated`<sup>Required</sup> <a name="sbfmDefinitelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated"></a>

```java
public java.lang.String getSbfmDefinitelyAutomated();
```

- *Type:* java.lang.String

---

##### `sbfmLikelyAutomated`<sup>Required</sup> <a name="sbfmLikelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated"></a>

```java
public java.lang.String getSbfmLikelyAutomated();
```

- *Type:* java.lang.String

---

##### `sbfmStaticResourceProtection`<sup>Required</sup> <a name="sbfmStaticResourceProtection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection"></a>

```java
public java.lang.Object getSbfmStaticResourceProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sbfmVerifiedBots`<sup>Required</sup> <a name="sbfmVerifiedBots" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots"></a>

```java
public java.lang.String getSbfmVerifiedBots();
```

- *Type:* java.lang.String

---

##### `suppressSessionScore`<sup>Required</sup> <a name="suppressSessionScore" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore"></a>

```java
public java.lang.Object getSuppressSessionScore();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BotManagementConfig <a name="BotManagementConfig" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.cloudflare.bot_management.BotManagementConfig;

BotManagementConfig.builder()
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
    .zoneId(java.lang.String)
//  .autoUpdateModel(java.lang.Boolean)
//  .autoUpdateModel(IResolvable)
//  .enableJs(java.lang.Boolean)
//  .enableJs(IResolvable)
//  .fightMode(java.lang.Boolean)
//  .fightMode(IResolvable)
//  .id(java.lang.String)
//  .optimizeWordpress(java.lang.Boolean)
//  .optimizeWordpress(IResolvable)
//  .sbfmDefinitelyAutomated(java.lang.String)
//  .sbfmLikelyAutomated(java.lang.String)
//  .sbfmStaticResourceProtection(java.lang.Boolean)
//  .sbfmStaticResourceProtection(IResolvable)
//  .sbfmVerifiedBots(java.lang.String)
//  .suppressSessionScore(java.lang.Boolean)
//  .suppressSessionScore(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel">autoUpdateModel</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes). |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs">enableJs</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode">fightMode</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to enable Bot Fight Mode. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#id BotManagement#id}. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress">optimizeWordpress</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to optimize Super Bot Fight Mode protections for Wordpress. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated">sbfmDefinitelyAutomated</a></code> | <code>java.lang.String</code> | Super Bot Fight Mode (SBFM) action to take on definitely automated requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated">sbfmLikelyAutomated</a></code> | <code>java.lang.String</code> | Super Bot Fight Mode (SBFM) action to take on likely automated requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection">sbfmStaticResourceProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Super Bot Fight Mode (SBFM) to enable static resource protection. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots">sbfmVerifiedBots</a></code> | <code>java.lang.String</code> | Super Bot Fight Mode (SBFM) action to take on verified bots requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore">suppressSessionScore</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to disable tracking the highest bot score for a session in the Bot Management cookie. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#zone_id BotManagement#zone_id}

---

##### `autoUpdateModel`<sup>Optional</sup> <a name="autoUpdateModel" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel"></a>

```java
public java.lang.Object getAutoUpdateModel();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}

---

##### `enableJs`<sup>Optional</sup> <a name="enableJs" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs"></a>

```java
public java.lang.Object getEnableJs();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#enable_js BotManagement#enable_js}

---

##### `fightMode`<sup>Optional</sup> <a name="fightMode" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode"></a>

```java
public java.lang.Object getFightMode();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to enable Bot Fight Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#id BotManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `optimizeWordpress`<sup>Optional</sup> <a name="optimizeWordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress"></a>

```java
public java.lang.Object getOptimizeWordpress();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to optimize Super Bot Fight Mode protections for Wordpress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}

---

##### `sbfmDefinitelyAutomated`<sup>Optional</sup> <a name="sbfmDefinitelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated"></a>

```java
public java.lang.String getSbfmDefinitelyAutomated();
```

- *Type:* java.lang.String

Super Bot Fight Mode (SBFM) action to take on definitely automated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}

---

##### `sbfmLikelyAutomated`<sup>Optional</sup> <a name="sbfmLikelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated"></a>

```java
public java.lang.String getSbfmLikelyAutomated();
```

- *Type:* java.lang.String

Super Bot Fight Mode (SBFM) action to take on likely automated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}

---

##### `sbfmStaticResourceProtection`<sup>Optional</sup> <a name="sbfmStaticResourceProtection" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection"></a>

```java
public java.lang.Object getSbfmStaticResourceProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Super Bot Fight Mode (SBFM) to enable static resource protection.

Enable if static resources on your application need bot protection. Note: Static resource protection can also result in legitimate traffic being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}

---

##### `sbfmVerifiedBots`<sup>Optional</sup> <a name="sbfmVerifiedBots" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots"></a>

```java
public java.lang.String getSbfmVerifiedBots();
```

- *Type:* java.lang.String

Super Bot Fight Mode (SBFM) action to take on verified bots requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}

---

##### `suppressSessionScore`<sup>Optional</sup> <a name="suppressSessionScore" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore"></a>

```java
public java.lang.Object getSuppressSessionScore();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to disable tracking the highest bot score for a session in the Bot Management cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.35.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}

---



