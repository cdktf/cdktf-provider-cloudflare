# `cloudflare_bot_management`

Refer to the Terraform Registory for docs: [`cloudflare_bot_management`](https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management).

# `botManagement` Submodule <a name="`botManagement` Submodule" id="@cdktf/provider-cloudflare.botManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotManagement <a name="BotManagement" id="@cdktf/provider-cloudflare.botManagement.BotManagement"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management cloudflare_bot_management}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new BotManagement(Construct Scope, string Id, BotManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig">BotManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig">BotManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel">ResetAutoUpdateModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetEnableJs">ResetEnableJs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetFightMode">ResetFightMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress">ResetOptimizeWordpress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated">ResetSbfmDefinitelyAutomated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated">ResetSbfmLikelyAutomated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection">ResetSbfmStaticResourceProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots">ResetSbfmVerifiedBots</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore">ResetSuppressSessionScore</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.botManagement.BotManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAutoUpdateModel` <a name="ResetAutoUpdateModel" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel"></a>

```csharp
private void ResetAutoUpdateModel()
```

##### `ResetEnableJs` <a name="ResetEnableJs" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetEnableJs"></a>

```csharp
private void ResetEnableJs()
```

##### `ResetFightMode` <a name="ResetFightMode" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetFightMode"></a>

```csharp
private void ResetFightMode()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOptimizeWordpress` <a name="ResetOptimizeWordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress"></a>

```csharp
private void ResetOptimizeWordpress()
```

##### `ResetSbfmDefinitelyAutomated` <a name="ResetSbfmDefinitelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated"></a>

```csharp
private void ResetSbfmDefinitelyAutomated()
```

##### `ResetSbfmLikelyAutomated` <a name="ResetSbfmLikelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated"></a>

```csharp
private void ResetSbfmLikelyAutomated()
```

##### `ResetSbfmStaticResourceProtection` <a name="ResetSbfmStaticResourceProtection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection"></a>

```csharp
private void ResetSbfmStaticResourceProtection()
```

##### `ResetSbfmVerifiedBots` <a name="ResetSbfmVerifiedBots" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots"></a>

```csharp
private void ResetSbfmVerifiedBots()
```

##### `ResetSuppressSessionScore` <a name="ResetSuppressSessionScore" id="@cdktf/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore"></a>

```csharp
private void ResetSuppressSessionScore()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

BotManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

BotManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

BotManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.botManagement.BotManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel">UsingLatestModel</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput">AutoUpdateModelInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJsInput">EnableJsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightModeInput">FightModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput">OptimizeWordpressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput">SbfmDefinitelyAutomatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput">SbfmLikelyAutomatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput">SbfmStaticResourceProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput">SbfmVerifiedBotsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput">SuppressSessionScoreInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel">AutoUpdateModel</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJs">EnableJs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightMode">FightMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress">OptimizeWordpress</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated">SbfmDefinitelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated">SbfmLikelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection">SbfmStaticResourceProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots">SbfmVerifiedBots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore">SuppressSessionScore</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `UsingLatestModel`<sup>Required</sup> <a name="UsingLatestModel" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel"></a>

```csharp
public IResolvable UsingLatestModel { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AutoUpdateModelInput`<sup>Optional</sup> <a name="AutoUpdateModelInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput"></a>

```csharp
public object AutoUpdateModelInput { get; }
```

- *Type:* object

---

##### `EnableJsInput`<sup>Optional</sup> <a name="EnableJsInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJsInput"></a>

```csharp
public object EnableJsInput { get; }
```

- *Type:* object

---

##### `FightModeInput`<sup>Optional</sup> <a name="FightModeInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightModeInput"></a>

```csharp
public object FightModeInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OptimizeWordpressInput`<sup>Optional</sup> <a name="OptimizeWordpressInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput"></a>

```csharp
public object OptimizeWordpressInput { get; }
```

- *Type:* object

---

##### `SbfmDefinitelyAutomatedInput`<sup>Optional</sup> <a name="SbfmDefinitelyAutomatedInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput"></a>

```csharp
public string SbfmDefinitelyAutomatedInput { get; }
```

- *Type:* string

---

##### `SbfmLikelyAutomatedInput`<sup>Optional</sup> <a name="SbfmLikelyAutomatedInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput"></a>

```csharp
public string SbfmLikelyAutomatedInput { get; }
```

- *Type:* string

---

##### `SbfmStaticResourceProtectionInput`<sup>Optional</sup> <a name="SbfmStaticResourceProtectionInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput"></a>

```csharp
public object SbfmStaticResourceProtectionInput { get; }
```

- *Type:* object

---

##### `SbfmVerifiedBotsInput`<sup>Optional</sup> <a name="SbfmVerifiedBotsInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput"></a>

```csharp
public string SbfmVerifiedBotsInput { get; }
```

- *Type:* string

---

##### `SuppressSessionScoreInput`<sup>Optional</sup> <a name="SuppressSessionScoreInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput"></a>

```csharp
public object SuppressSessionScoreInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AutoUpdateModel`<sup>Required</sup> <a name="AutoUpdateModel" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel"></a>

```csharp
public object AutoUpdateModel { get; }
```

- *Type:* object

---

##### `EnableJs`<sup>Required</sup> <a name="EnableJs" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.enableJs"></a>

```csharp
public object EnableJs { get; }
```

- *Type:* object

---

##### `FightMode`<sup>Required</sup> <a name="FightMode" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.fightMode"></a>

```csharp
public object FightMode { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OptimizeWordpress`<sup>Required</sup> <a name="OptimizeWordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress"></a>

```csharp
public object OptimizeWordpress { get; }
```

- *Type:* object

---

##### `SbfmDefinitelyAutomated`<sup>Required</sup> <a name="SbfmDefinitelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated"></a>

```csharp
public string SbfmDefinitelyAutomated { get; }
```

- *Type:* string

---

##### `SbfmLikelyAutomated`<sup>Required</sup> <a name="SbfmLikelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated"></a>

```csharp
public string SbfmLikelyAutomated { get; }
```

- *Type:* string

---

##### `SbfmStaticResourceProtection`<sup>Required</sup> <a name="SbfmStaticResourceProtection" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection"></a>

```csharp
public object SbfmStaticResourceProtection { get; }
```

- *Type:* object

---

##### `SbfmVerifiedBots`<sup>Required</sup> <a name="SbfmVerifiedBots" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots"></a>

```csharp
public string SbfmVerifiedBots { get; }
```

- *Type:* string

---

##### `SuppressSessionScore`<sup>Required</sup> <a name="SuppressSessionScore" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore"></a>

```csharp
public object SuppressSessionScore { get; }
```

- *Type:* object

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.botManagement.BotManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BotManagementConfig <a name="BotManagementConfig" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new BotManagementConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ZoneId,
    object AutoUpdateModel = null,
    object EnableJs = null,
    object FightMode = null,
    string Id = null,
    object OptimizeWordpress = null,
    string SbfmDefinitelyAutomated = null,
    string SbfmLikelyAutomated = null,
    object SbfmStaticResourceProtection = null,
    string SbfmVerifiedBots = null,
    object SuppressSessionScore = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel">AutoUpdateModel</a></code> | <code>object</code> | Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes). |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs">EnableJs</a></code> | <code>object</code> | Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode">FightMode</a></code> | <code>object</code> | Whether to enable Bot Fight Mode. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management#id BotManagement#id}. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress">OptimizeWordpress</a></code> | <code>object</code> | Whether to optimize Super Bot Fight Mode protections for Wordpress. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated">SbfmDefinitelyAutomated</a></code> | <code>string</code> | Super Bot Fight Mode (SBFM) action to take on definitely automated requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated">SbfmLikelyAutomated</a></code> | <code>string</code> | Super Bot Fight Mode (SBFM) action to take on likely automated requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection">SbfmStaticResourceProtection</a></code> | <code>object</code> | Super Bot Fight Mode (SBFM) to enable static resource protection. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots">SbfmVerifiedBots</a></code> | <code>string</code> | Super Bot Fight Mode (SBFM) action to take on verified bots requests. |
| <code><a href="#@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore">SuppressSessionScore</a></code> | <code>object</code> | Whether to disable tracking the highest bot score for a session in the Bot Management cookie. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management#zone_id BotManagement#zone_id}

---

##### `AutoUpdateModel`<sup>Optional</sup> <a name="AutoUpdateModel" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel"></a>

```csharp
public object AutoUpdateModel { get; set; }
```

- *Type:* object

Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}

---

##### `EnableJs`<sup>Optional</sup> <a name="EnableJs" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs"></a>

```csharp
public object EnableJs { get; set; }
```

- *Type:* object

Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management#enable_js BotManagement#enable_js}

---

##### `FightMode`<sup>Optional</sup> <a name="FightMode" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode"></a>

```csharp
public object FightMode { get; set; }
```

- *Type:* object

Whether to enable Bot Fight Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management#id BotManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OptimizeWordpress`<sup>Optional</sup> <a name="OptimizeWordpress" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress"></a>

```csharp
public object OptimizeWordpress { get; set; }
```

- *Type:* object

Whether to optimize Super Bot Fight Mode protections for Wordpress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}

---

##### `SbfmDefinitelyAutomated`<sup>Optional</sup> <a name="SbfmDefinitelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated"></a>

```csharp
public string SbfmDefinitelyAutomated { get; set; }
```

- *Type:* string

Super Bot Fight Mode (SBFM) action to take on definitely automated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}

---

##### `SbfmLikelyAutomated`<sup>Optional</sup> <a name="SbfmLikelyAutomated" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated"></a>

```csharp
public string SbfmLikelyAutomated { get; set; }
```

- *Type:* string

Super Bot Fight Mode (SBFM) action to take on likely automated requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}

---

##### `SbfmStaticResourceProtection`<sup>Optional</sup> <a name="SbfmStaticResourceProtection" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection"></a>

```csharp
public object SbfmStaticResourceProtection { get; set; }
```

- *Type:* object

Super Bot Fight Mode (SBFM) to enable static resource protection.

Enable if static resources on your application need bot protection. Note: Static resource protection can also result in legitimate traffic being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}

---

##### `SbfmVerifiedBots`<sup>Optional</sup> <a name="SbfmVerifiedBots" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots"></a>

```csharp
public string SbfmVerifiedBots { get; set; }
```

- *Type:* string

Super Bot Fight Mode (SBFM) action to take on verified bots requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}

---

##### `SuppressSessionScore`<sup>Optional</sup> <a name="SuppressSessionScore" id="@cdktf/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore"></a>

```csharp
public object SuppressSessionScore { get; set; }
```

- *Type:* object

Whether to disable tracking the highest bot score for a session in the Bot Management cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.13.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}

---


