# `workersScript` Submodule <a name="`workersScript` Submodule" id="@cdktf/provider-cloudflare.workersScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkersScript <a name="WorkersScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScript"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script cloudflare_workers_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScript(Construct Scope, string Id, WorkersScriptConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig">WorkersScriptConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig">WorkersScriptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets">PutAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putBindings">PutBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations">PutMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability">PutObservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.putTailConsumers">PutTailConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetAssets">ResetAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBindings">ResetBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBodyPart">ResetBodyPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityDate">ResetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityFlags">ResetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentFile">ResetContentFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentSha256">ResetContentSha256</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepAssets">ResetKeepAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepBindings">ResetKeepBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLogpush">ResetLogpush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMainModule">ResetMainModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMigrations">ResetMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetObservability">ResetObservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetTailConsumers">ResetTailConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.resetUsageModel">ResetUsageModel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssets` <a name="PutAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets"></a>

```csharp
private void PutAssets(WorkersScriptAssets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putAssets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

---

##### `PutBindings` <a name="PutBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putBindings"></a>

```csharp
private void PutBindings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putBindings.parameter.value"></a>

- *Type:* object

---

##### `PutMigrations` <a name="PutMigrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations"></a>

```csharp
private void PutMigrations(WorkersScriptMigrations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putMigrations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

---

##### `PutObservability` <a name="PutObservability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability"></a>

```csharp
private void PutObservability(WorkersScriptObservability Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putObservability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement"></a>

```csharp
private void PutPlacement(WorkersScriptPlacement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

---

##### `PutTailConsumers` <a name="PutTailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putTailConsumers"></a>

```csharp
private void PutTailConsumers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.putTailConsumers.parameter.value"></a>

- *Type:* object

---

##### `ResetAssets` <a name="ResetAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetAssets"></a>

```csharp
private void ResetAssets()
```

##### `ResetBindings` <a name="ResetBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBindings"></a>

```csharp
private void ResetBindings()
```

##### `ResetBodyPart` <a name="ResetBodyPart" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetBodyPart"></a>

```csharp
private void ResetBodyPart()
```

##### `ResetCompatibilityDate` <a name="ResetCompatibilityDate" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityDate"></a>

```csharp
private void ResetCompatibilityDate()
```

##### `ResetCompatibilityFlags` <a name="ResetCompatibilityFlags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityFlags"></a>

```csharp
private void ResetCompatibilityFlags()
```

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentFile` <a name="ResetContentFile" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentFile"></a>

```csharp
private void ResetContentFile()
```

##### `ResetContentSha256` <a name="ResetContentSha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentSha256"></a>

```csharp
private void ResetContentSha256()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetKeepAssets` <a name="ResetKeepAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepAssets"></a>

```csharp
private void ResetKeepAssets()
```

##### `ResetKeepBindings` <a name="ResetKeepBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetKeepBindings"></a>

```csharp
private void ResetKeepBindings()
```

##### `ResetLogpush` <a name="ResetLogpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetLogpush"></a>

```csharp
private void ResetLogpush()
```

##### `ResetMainModule` <a name="ResetMainModule" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMainModule"></a>

```csharp
private void ResetMainModule()
```

##### `ResetMigrations` <a name="ResetMigrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetMigrations"></a>

```csharp
private void ResetMigrations()
```

##### `ResetObservability` <a name="ResetObservability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetObservability"></a>

```csharp
private void ResetObservability()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetPlacement"></a>

```csharp
private void ResetPlacement()
```

##### `ResetTailConsumers` <a name="ResetTailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetTailConsumers"></a>

```csharp
private void ResetTailConsumers()
```

##### `ResetUsageModel` <a name="ResetUsageModel" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.resetUsageModel"></a>

```csharp
private void ResetUsageModel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkersScript resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkersScript.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkersScript.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkersScript.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkersScript.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkersScript resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkersScript to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkersScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkersScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assets">Assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference">WorkersScriptAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindings">Bindings</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList">WorkersScriptBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasAssets">HasAssets</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasModules">HasModules</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrations">Migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference">WorkersScriptMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observability">Observability</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference">WorkersScriptObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference">WorkersScriptPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.startupTimeMs">StartupTimeMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumers">TailConsumers</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList">WorkersScriptTailConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assetsInput">AssetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindingsInput">BindingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPartInput">BodyPartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDateInput">CompatibilityDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlagsInput">CompatibilityFlagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFileInput">ContentFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256Input">ContentSha256Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssetsInput">KeepAssetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindingsInput">KeepBindingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpushInput">LogpushInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModuleInput">MainModuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationsInput">MigrationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observabilityInput">ObservabilityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placementInput">PlacementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptNameInput">ScriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumersInput">TailConsumersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModelInput">UsageModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPart">BodyPart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDate">CompatibilityDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFile">ContentFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256">ContentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssets">KeepAssets</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindings">KeepBindings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpush">Logpush</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModule">MainModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptName">ScriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModel">UsageModel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Assets`<sup>Required</sup> <a name="Assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assets"></a>

```csharp
public WorkersScriptAssetsOutputReference Assets { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference">WorkersScriptAssetsOutputReference</a>

---

##### `Bindings`<sup>Required</sup> <a name="Bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindings"></a>

```csharp
public WorkersScriptBindingsList Bindings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList">WorkersScriptBindingsList</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `HasAssets`<sup>Required</sup> <a name="HasAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasAssets"></a>

```csharp
public IResolvable HasAssets { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `HasModules`<sup>Required</sup> <a name="HasModules" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.hasModules"></a>

```csharp
public IResolvable HasModules { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Migrations`<sup>Required</sup> <a name="Migrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrations"></a>

```csharp
public WorkersScriptMigrationsOutputReference Migrations { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference">WorkersScriptMigrationsOutputReference</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Observability`<sup>Required</sup> <a name="Observability" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observability"></a>

```csharp
public WorkersScriptObservabilityOutputReference Observability { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference">WorkersScriptObservabilityOutputReference</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placement"></a>

```csharp
public WorkersScriptPlacementOutputReference Placement { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference">WorkersScriptPlacementOutputReference</a>

---

##### `StartupTimeMs`<sup>Required</sup> <a name="StartupTimeMs" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.startupTimeMs"></a>

```csharp
public double StartupTimeMs { get; }
```

- *Type:* double

---

##### `TailConsumers`<sup>Required</sup> <a name="TailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumers"></a>

```csharp
public WorkersScriptTailConsumersList TailConsumers { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList">WorkersScriptTailConsumersList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AssetsInput`<sup>Optional</sup> <a name="AssetsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.assetsInput"></a>

```csharp
public object AssetsInput { get; }
```

- *Type:* object

---

##### `BindingsInput`<sup>Optional</sup> <a name="BindingsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bindingsInput"></a>

```csharp
public object BindingsInput { get; }
```

- *Type:* object

---

##### `BodyPartInput`<sup>Optional</sup> <a name="BodyPartInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPartInput"></a>

```csharp
public string BodyPartInput { get; }
```

- *Type:* string

---

##### `CompatibilityDateInput`<sup>Optional</sup> <a name="CompatibilityDateInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDateInput"></a>

```csharp
public string CompatibilityDateInput { get; }
```

- *Type:* string

---

##### `CompatibilityFlagsInput`<sup>Optional</sup> <a name="CompatibilityFlagsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlagsInput"></a>

```csharp
public string[] CompatibilityFlagsInput { get; }
```

- *Type:* string[]

---

##### `ContentFileInput`<sup>Optional</sup> <a name="ContentFileInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFileInput"></a>

```csharp
public string ContentFileInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentSha256Input`<sup>Optional</sup> <a name="ContentSha256Input" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256Input"></a>

```csharp
public string ContentSha256Input { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `KeepAssetsInput`<sup>Optional</sup> <a name="KeepAssetsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssetsInput"></a>

```csharp
public object KeepAssetsInput { get; }
```

- *Type:* object

---

##### `KeepBindingsInput`<sup>Optional</sup> <a name="KeepBindingsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindingsInput"></a>

```csharp
public string[] KeepBindingsInput { get; }
```

- *Type:* string[]

---

##### `LogpushInput`<sup>Optional</sup> <a name="LogpushInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpushInput"></a>

```csharp
public object LogpushInput { get; }
```

- *Type:* object

---

##### `MainModuleInput`<sup>Optional</sup> <a name="MainModuleInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModuleInput"></a>

```csharp
public string MainModuleInput { get; }
```

- *Type:* string

---

##### `MigrationsInput`<sup>Optional</sup> <a name="MigrationsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.migrationsInput"></a>

```csharp
public object MigrationsInput { get; }
```

- *Type:* object

---

##### `ObservabilityInput`<sup>Optional</sup> <a name="ObservabilityInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.observabilityInput"></a>

```csharp
public object ObservabilityInput { get; }
```

- *Type:* object

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.placementInput"></a>

```csharp
public object PlacementInput { get; }
```

- *Type:* object

---

##### `ScriptNameInput`<sup>Optional</sup> <a name="ScriptNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptNameInput"></a>

```csharp
public string ScriptNameInput { get; }
```

- *Type:* string

---

##### `TailConsumersInput`<sup>Optional</sup> <a name="TailConsumersInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tailConsumersInput"></a>

```csharp
public object TailConsumersInput { get; }
```

- *Type:* object

---

##### `UsageModelInput`<sup>Optional</sup> <a name="UsageModelInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModelInput"></a>

```csharp
public string UsageModelInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `BodyPart`<sup>Required</sup> <a name="BodyPart" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.bodyPart"></a>

```csharp
public string BodyPart { get; }
```

- *Type:* string

---

##### `CompatibilityDate`<sup>Required</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDate"></a>

```csharp
public string CompatibilityDate { get; }
```

- *Type:* string

---

##### `CompatibilityFlags`<sup>Required</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlags"></a>

```csharp
public string[] CompatibilityFlags { get; }
```

- *Type:* string[]

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentFile`<sup>Required</sup> <a name="ContentFile" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentFile"></a>

```csharp
public string ContentFile { get; }
```

- *Type:* string

---

##### `ContentSha256`<sup>Required</sup> <a name="ContentSha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentSha256"></a>

```csharp
public string ContentSha256 { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `KeepAssets`<sup>Required</sup> <a name="KeepAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepAssets"></a>

```csharp
public object KeepAssets { get; }
```

- *Type:* object

---

##### `KeepBindings`<sup>Required</sup> <a name="KeepBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.keepBindings"></a>

```csharp
public string[] KeepBindings { get; }
```

- *Type:* string[]

---

##### `Logpush`<sup>Required</sup> <a name="Logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.logpush"></a>

```csharp
public object Logpush { get; }
```

- *Type:* object

---

##### `MainModule`<sup>Required</sup> <a name="MainModule" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.mainModule"></a>

```csharp
public string MainModule { get; }
```

- *Type:* string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.scriptName"></a>

```csharp
public string ScriptName { get; }
```

- *Type:* string

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.usageModel"></a>

```csharp
public string UsageModel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.workersScript.WorkersScript.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkersScriptAssets <a name="WorkersScriptAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptAssets {
    WorkersScriptAssetsConfig Config = null,
    string Jwt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.jwt">Jwt</a></code> | <code>string</code> | Token provided upon successful upload of all files from a registered manifest. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.config"></a>

```csharp
public WorkersScriptAssetsConfig Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#config WorkersScript#config}

---

##### `Jwt`<sup>Optional</sup> <a name="Jwt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets.property.jwt"></a>

```csharp
public string Jwt { get; set; }
```

- *Type:* string

Token provided upon successful upload of all files from a registered manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#jwt WorkersScript#jwt}

---

### WorkersScriptAssetsConfig <a name="WorkersScriptAssetsConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptAssetsConfig {
    string Headers = null,
    string HtmlHandling = null,
    string NotFoundHandling = null,
    string Redirects = null,
    object RunWorkerFirst = null,
    object ServeDirectly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.headers">Headers</a></code> | <code>string</code> | The contents of a _headers file (used to attach custom headers on asset responses). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.htmlHandling">HtmlHandling</a></code> | <code>string</code> | Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.notFoundHandling">NotFoundHandling</a></code> | <code>string</code> | Determines the response when a request does not match a static asset, and there is no Worker script. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.redirects">Redirects</a></code> | <code>string</code> | The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.runWorkerFirst">RunWorkerFirst</a></code> | <code>object</code> | When true, requests will always invoke the Worker script. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.serveDirectly">ServeDirectly</a></code> | <code>object</code> | When true and the incoming request matches an asset, that will be served instead of invoking the Worker script. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.headers"></a>

```csharp
public string Headers { get; set; }
```

- *Type:* string

The contents of a _headers file (used to attach custom headers on asset responses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#headers WorkersScript#headers}

---

##### `HtmlHandling`<sup>Optional</sup> <a name="HtmlHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.htmlHandling"></a>

```csharp
public string HtmlHandling { get; set; }
```

- *Type:* string

Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#html_handling WorkersScript#html_handling}

---

##### `NotFoundHandling`<sup>Optional</sup> <a name="NotFoundHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.notFoundHandling"></a>

```csharp
public string NotFoundHandling { get; set; }
```

- *Type:* string

Determines the response when a request does not match a static asset, and there is no Worker script.

Available values: "none", "404-page", "single-page-application".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#not_found_handling WorkersScript#not_found_handling}

---

##### `Redirects`<sup>Optional</sup> <a name="Redirects" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.redirects"></a>

```csharp
public string Redirects { get; set; }
```

- *Type:* string

The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#redirects WorkersScript#redirects}

---

##### `RunWorkerFirst`<sup>Optional</sup> <a name="RunWorkerFirst" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.runWorkerFirst"></a>

```csharp
public object RunWorkerFirst { get; set; }
```

- *Type:* object

When true, requests will always invoke the Worker script.

Otherwise, attempt to serve an asset matching the request, falling back to the Worker script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#run_worker_first WorkersScript#run_worker_first}

---

##### `ServeDirectly`<sup>Optional</sup> <a name="ServeDirectly" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.serveDirectly"></a>

```csharp
public object ServeDirectly { get; set; }
```

- *Type:* object

When true and the incoming request matches an asset, that will be served instead of invoking the Worker script.

When false, requests will always invoke the Worker script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#serve_directly WorkersScript#serve_directly}

---

### WorkersScriptBindings <a name="WorkersScriptBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptBindings {
    string Name,
    string Type,
    string Algorithm = null,
    string BucketName = null,
    string CertificateId = null,
    string ClassName = null,
    string Dataset = null,
    string Environment = null,
    string Format = null,
    string Id = null,
    string IndexName = null,
    string Json = null,
    string KeyBase64 = null,
    string KeyJwk = null,
    string Namespace = null,
    string NamespaceId = null,
    WorkersScriptBindingsOutbound Outbound = null,
    string Pipeline = null,
    string QueueName = null,
    string ScriptName = null,
    string SecretName = null,
    string Service = null,
    string StoreId = null,
    string Text = null,
    string[] Usages = null,
    string WorkflowName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.name">Name</a></code> | <code>string</code> | A JavaScript variable name for the binding. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.type">Type</a></code> | <code>string</code> | The kind of resource that the binding provides. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.algorithm">Algorithm</a></code> | <code>string</code> | Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.bucketName">BucketName</a></code> | <code>string</code> | R2 bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.certificateId">CertificateId</a></code> | <code>string</code> | Identifier of the certificate to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.className">ClassName</a></code> | <code>string</code> | The exported class name of the Durable Object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.dataset">Dataset</a></code> | <code>string</code> | The name of the dataset to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.environment">Environment</a></code> | <code>string</code> | The environment of the script_name to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.format">Format</a></code> | <code>string</code> | Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.id">Id</a></code> | <code>string</code> | Identifier of the D1 database to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.indexName">IndexName</a></code> | <code>string</code> | Name of the Vectorize index to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.json">Json</a></code> | <code>string</code> | JSON data to use. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyBase64">KeyBase64</a></code> | <code>string</code> | Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyJwk">KeyJwk</a></code> | <code>string</code> | Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespace">Namespace</a></code> | <code>string</code> | Namespace to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespaceId">NamespaceId</a></code> | <code>string</code> | Namespace identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.outbound">Outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a></code> | Outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.pipeline">Pipeline</a></code> | <code>string</code> | Name of the Pipeline to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.queueName">QueueName</a></code> | <code>string</code> | Name of the Queue to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.scriptName">ScriptName</a></code> | <code>string</code> | The script where the Durable Object is defined, if it is external to this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.secretName">SecretName</a></code> | <code>string</code> | Name of the secret in the store. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.service">Service</a></code> | <code>string</code> | Name of Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.storeId">StoreId</a></code> | <code>string</code> | ID of the store containing the secret. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.text">Text</a></code> | <code>string</code> | The text value to use. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.usages">Usages</a></code> | <code>string[]</code> | Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.workflowName">WorkflowName</a></code> | <code>string</code> | Name of the Workflow to bind to. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A JavaScript variable name for the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#name WorkersScript#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The kind of resource that the binding provides.

Available values: "ai", "analytics_engine", "assets", "browser", "d1", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "json", "kv_namespace", "mtls_certificate", "plain_text", "pipelines", "queue", "r2_bucket", "secret_text", "service", "tail_consumer", "vectorize", "version_metadata", "secrets_store_secret", "secret_key", "workflow".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#type WorkersScript#type}

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#algorithm WorkersScript#algorithm}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

R2 bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#bucket_name WorkersScript#bucket_name}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.certificateId"></a>

```csharp
public string CertificateId { get; set; }
```

- *Type:* string

Identifier of the certificate to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#certificate_id WorkersScript#certificate_id}

---

##### `ClassName`<sup>Optional</sup> <a name="ClassName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.className"></a>

```csharp
public string ClassName { get; set; }
```

- *Type:* string

The exported class name of the Durable Object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#class_name WorkersScript#class_name}

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

The name of the dataset to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#dataset WorkersScript#dataset}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The environment of the script_name to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#format WorkersScript#format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Identifier of the D1 database to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#id WorkersScript#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexName`<sup>Optional</sup> <a name="IndexName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.indexName"></a>

```csharp
public string IndexName { get; set; }
```

- *Type:* string

Name of the Vectorize index to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#index_name WorkersScript#index_name}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.json"></a>

```csharp
public string Json { get; set; }
```

- *Type:* string

JSON data to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#json WorkersScript#json}

---

##### `KeyBase64`<sup>Optional</sup> <a name="KeyBase64" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyBase64"></a>

```csharp
public string KeyBase64 { get; set; }
```

- *Type:* string

Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#key_base64 WorkersScript#key_base64}

---

##### `KeyJwk`<sup>Optional</sup> <a name="KeyJwk" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyJwk"></a>

```csharp
public string KeyJwk { get; set; }
```

- *Type:* string

Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#key_jwk WorkersScript#key_jwk}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Namespace to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#namespace WorkersScript#namespace}

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

Namespace identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#namespace_id WorkersScript#namespace_id}

---

##### `Outbound`<sup>Optional</sup> <a name="Outbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.outbound"></a>

```csharp
public WorkersScriptBindingsOutbound Outbound { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#outbound WorkersScript#outbound}

---

##### `Pipeline`<sup>Optional</sup> <a name="Pipeline" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.pipeline"></a>

```csharp
public string Pipeline { get; set; }
```

- *Type:* string

Name of the Pipeline to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#pipeline WorkersScript#pipeline}

---

##### `QueueName`<sup>Optional</sup> <a name="QueueName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.queueName"></a>

```csharp
public string QueueName { get; set; }
```

- *Type:* string

Name of the Queue to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#queue_name WorkersScript#queue_name}

---

##### `ScriptName`<sup>Optional</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.scriptName"></a>

```csharp
public string ScriptName { get; set; }
```

- *Type:* string

The script where the Durable Object is defined, if it is external to this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#script_name WorkersScript#script_name}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Name of the secret in the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#secret_name WorkersScript#secret_name}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Name of Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#service WorkersScript#service}

---

##### `StoreId`<sup>Optional</sup> <a name="StoreId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.storeId"></a>

```csharp
public string StoreId { get; set; }
```

- *Type:* string

ID of the store containing the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#store_id WorkersScript#store_id}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

The text value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#text WorkersScript#text}

---

##### `Usages`<sup>Optional</sup> <a name="Usages" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.usages"></a>

```csharp
public string[] Usages { get; set; }
```

- *Type:* string[]

Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#usages WorkersScript#usages}

---

##### `WorkflowName`<sup>Optional</sup> <a name="WorkflowName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindings.property.workflowName"></a>

```csharp
public string WorkflowName { get; set; }
```

- *Type:* string

Name of the Workflow to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#workflow_name WorkersScript#workflow_name}

---

### WorkersScriptBindingsOutbound <a name="WorkersScriptBindingsOutbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptBindingsOutbound {
    string[] Params = null,
    WorkersScriptBindingsOutboundWorker Worker = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.params">Params</a></code> | <code>string[]</code> | Pass information from the Dispatch Worker to the Outbound Worker through the parameters. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a></code> | Outbound worker. |

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.params"></a>

```csharp
public string[] Params { get; set; }
```

- *Type:* string[]

Pass information from the Dispatch Worker to the Outbound Worker through the parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#params WorkersScript#params}

---

##### `Worker`<sup>Optional</sup> <a name="Worker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.worker"></a>

```csharp
public WorkersScriptBindingsOutboundWorker Worker { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#worker WorkersScript#worker}

---

### WorkersScriptBindingsOutboundWorker <a name="WorkersScriptBindingsOutboundWorker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptBindingsOutboundWorker {
    string Environment = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.environment">Environment</a></code> | <code>string</code> | Environment of the outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.service">Service</a></code> | <code>string</code> | Name of the outbound worker. |

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Environment of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Name of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#service WorkersScript#service}

---

### WorkersScriptConfig <a name="WorkersScriptConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string ScriptName,
    WorkersScriptAssets Assets = null,
    object Bindings = null,
    string BodyPart = null,
    string CompatibilityDate = null,
    string[] CompatibilityFlags = null,
    string Content = null,
    string ContentFile = null,
    string ContentSha256 = null,
    string ContentType = null,
    object KeepAssets = null,
    string[] KeepBindings = null,
    object Logpush = null,
    string MainModule = null,
    WorkersScriptMigrations Migrations = null,
    WorkersScriptObservability Observability = null,
    WorkersScriptPlacement Placement = null,
    object TailConsumers = null,
    string UsageModel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.scriptName">ScriptName</a></code> | <code>string</code> | Name of the script, used in URLs and route configuration. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.assets">Assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bindings">Bindings</a></code> | <code>object</code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bodyPart">BodyPart</a></code> | <code>string</code> | Name of the part in the multipart request that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityDate">CompatibilityDate</a></code> | <code>string</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>string[]</code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.content">Content</a></code> | <code>string</code> | Module or Service Worker contents of the Worker. Exactly one of `content` or `content_file` must be specified. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentFile">ContentFile</a></code> | <code>string</code> | Path to a file containing the Module or Service Worker contents of the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentSha256">ContentSha256</a></code> | <code>string</code> | SHA-256 hash of the Worker contents. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentType">ContentType</a></code> | <code>string</code> | Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python"). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepAssets">KeepAssets</a></code> | <code>object</code> | Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepBindings">KeepBindings</a></code> | <code>string[]</code> | List of binding types to keep from previous_upload. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.logpush">Logpush</a></code> | <code>object</code> | Whether Logpush is turned on for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.mainModule">MainModule</a></code> | <code>string</code> | Name of the part in the multipart request that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.migrations">Migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a></code> | Migrations to apply for Durable Objects associated with this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.observability">Observability</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a></code> | Observability settings for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a></code> | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.tailConsumers">TailConsumers</a></code> | <code>object</code> | List of Workers that will consume logs from the attached Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.usageModel">UsageModel</a></code> | <code>string</code> | Usage model for the Worker invocations. Available values: "standard". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#account_id WorkersScript#account_id}

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.scriptName"></a>

```csharp
public string ScriptName { get; set; }
```

- *Type:* string

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#script_name WorkersScript#script_name}

---

##### `Assets`<sup>Optional</sup> <a name="Assets" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.assets"></a>

```csharp
public WorkersScriptAssets Assets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#assets WorkersScript#assets}

---

##### `Bindings`<sup>Optional</sup> <a name="Bindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bindings"></a>

```csharp
public object Bindings { get; set; }
```

- *Type:* object

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#bindings WorkersScript#bindings}

---

##### `BodyPart`<sup>Optional</sup> <a name="BodyPart" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.bodyPart"></a>

```csharp
public string BodyPart { get; set; }
```

- *Type:* string

Name of the part in the multipart request that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#body_part WorkersScript#body_part}

---

##### `CompatibilityDate`<sup>Optional</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityDate"></a>

```csharp
public string CompatibilityDate { get; set; }
```

- *Type:* string

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#compatibility_date WorkersScript#compatibility_date}

---

##### `CompatibilityFlags`<sup>Optional</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityFlags"></a>

```csharp
public string[] CompatibilityFlags { get; set; }
```

- *Type:* string[]

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#compatibility_flags WorkersScript#compatibility_flags}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Module or Service Worker contents of the Worker. Exactly one of `content` or `content_file` must be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#content WorkersScript#content}

---

##### `ContentFile`<sup>Optional</sup> <a name="ContentFile" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentFile"></a>

```csharp
public string ContentFile { get; set; }
```

- *Type:* string

Path to a file containing the Module or Service Worker contents of the Worker.

Exactly one of `content` or `content_file` must be specified. Must be paired with `content_sha256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#content_file WorkersScript#content_file}

---

##### `ContentSha256`<sup>Optional</sup> <a name="ContentSha256" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentSha256"></a>

```csharp
public string ContentSha256 { get; set; }
```

- *Type:* string

SHA-256 hash of the Worker contents.

Used to trigger updates when source code changes. Must be provided when `content_file` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#content_sha256 WorkersScript#content_sha256}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#content_type WorkersScript#content_type}

---

##### `KeepAssets`<sup>Optional</sup> <a name="KeepAssets" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepAssets"></a>

```csharp
public object KeepAssets { get; set; }
```

- *Type:* object

Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#keep_assets WorkersScript#keep_assets}

---

##### `KeepBindings`<sup>Optional</sup> <a name="KeepBindings" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepBindings"></a>

```csharp
public string[] KeepBindings { get; set; }
```

- *Type:* string[]

List of binding types to keep from previous_upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#keep_bindings WorkersScript#keep_bindings}

---

##### `Logpush`<sup>Optional</sup> <a name="Logpush" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.logpush"></a>

```csharp
public object Logpush { get; set; }
```

- *Type:* object

Whether Logpush is turned on for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#logpush WorkersScript#logpush}

---

##### `MainModule`<sup>Optional</sup> <a name="MainModule" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.mainModule"></a>

```csharp
public string MainModule { get; set; }
```

- *Type:* string

Name of the part in the multipart request that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#main_module WorkersScript#main_module}

---

##### `Migrations`<sup>Optional</sup> <a name="Migrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.migrations"></a>

```csharp
public WorkersScriptMigrations Migrations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

Migrations to apply for Durable Objects associated with this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#migrations WorkersScript#migrations}

---

##### `Observability`<sup>Optional</sup> <a name="Observability" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.observability"></a>

```csharp
public WorkersScriptObservability Observability { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

Observability settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#observability WorkersScript#observability}

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.placement"></a>

```csharp
public WorkersScriptPlacement Placement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#placement WorkersScript#placement}

---

##### `TailConsumers`<sup>Optional</sup> <a name="TailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.tailConsumers"></a>

```csharp
public object TailConsumers { get; set; }
```

- *Type:* object

List of Workers that will consume logs from the attached Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#tail_consumers WorkersScript#tail_consumers}

---

##### `UsageModel`<sup>Optional</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptConfig.property.usageModel"></a>

```csharp
public string UsageModel { get; set; }
```

- *Type:* string

Usage model for the Worker invocations. Available values: "standard".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#usage_model WorkersScript#usage_model}

---

### WorkersScriptMigrations <a name="WorkersScriptMigrations" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrations {
    string[] DeletedClasses = null,
    string[] NewClasses = null,
    string[] NewSqliteClasses = null,
    string NewTag = null,
    string OldTag = null,
    object RenamedClasses = null,
    object Steps = null,
    object TransferredClasses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newClasses">NewClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newTag">NewTag</a></code> | <code>string</code> | Tag to set as the latest migration tag. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.oldTag">OldTag</a></code> | <code>string</code> | Tag used to verify against the latest migration tag for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.renamedClasses">RenamedClasses</a></code> | <code>object</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.steps">Steps</a></code> | <code>object</code> | Migrations to apply in order. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.transferredClasses">TransferredClasses</a></code> | <code>object</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `DeletedClasses`<sup>Optional</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; set; }
```

- *Type:* string[]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}

---

##### `NewClasses`<sup>Optional</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newClasses"></a>

```csharp
public string[] NewClasses { get; set; }
```

- *Type:* string[]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#new_classes WorkersScript#new_classes}

---

##### `NewSqliteClasses`<sup>Optional</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; set; }
```

- *Type:* string[]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}

---

##### `NewTag`<sup>Optional</sup> <a name="NewTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newTag"></a>

```csharp
public string NewTag { get; set; }
```

- *Type:* string

Tag to set as the latest migration tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#new_tag WorkersScript#new_tag}

---

##### `OldTag`<sup>Optional</sup> <a name="OldTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.oldTag"></a>

```csharp
public string OldTag { get; set; }
```

- *Type:* string

Tag used to verify against the latest migration tag for this Worker.

If they don't match, the upload is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#old_tag WorkersScript#old_tag}

---

##### `RenamedClasses`<sup>Optional</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.renamedClasses"></a>

```csharp
public object RenamedClasses { get; set; }
```

- *Type:* object

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}

---

##### `Steps`<sup>Optional</sup> <a name="Steps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.steps"></a>

```csharp
public object Steps { get; set; }
```

- *Type:* object

Migrations to apply in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#steps WorkersScript#steps}

---

##### `TransferredClasses`<sup>Optional</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrations.property.transferredClasses"></a>

```csharp
public object TransferredClasses { get; set; }
```

- *Type:* object

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}

---

### WorkersScriptMigrationsRenamedClasses <a name="WorkersScriptMigrationsRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsRenamedClasses {
    string From = null,
    string To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.to">To</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#from WorkersScript#from}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.to"></a>

```csharp
public string To { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsSteps <a name="WorkersScriptMigrationsSteps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsSteps {
    string[] DeletedClasses = null,
    string[] NewClasses = null,
    string[] NewSqliteClasses = null,
    object RenamedClasses = null,
    object TransferredClasses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newClasses">NewClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.renamedClasses">RenamedClasses</a></code> | <code>object</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.transferredClasses">TransferredClasses</a></code> | <code>object</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `DeletedClasses`<sup>Optional</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; set; }
```

- *Type:* string[]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}

---

##### `NewClasses`<sup>Optional</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newClasses"></a>

```csharp
public string[] NewClasses { get; set; }
```

- *Type:* string[]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#new_classes WorkersScript#new_classes}

---

##### `NewSqliteClasses`<sup>Optional</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; set; }
```

- *Type:* string[]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}

---

##### `RenamedClasses`<sup>Optional</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.renamedClasses"></a>

```csharp
public object RenamedClasses { get; set; }
```

- *Type:* object

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}

---

##### `TransferredClasses`<sup>Optional</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.transferredClasses"></a>

```csharp
public object TransferredClasses { get; set; }
```

- *Type:* object

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}

---

### WorkersScriptMigrationsStepsRenamedClasses <a name="WorkersScriptMigrationsStepsRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsStepsRenamedClasses {
    string From = null,
    string To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.to">To</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#from WorkersScript#from}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.to"></a>

```csharp
public string To { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsStepsTransferredClasses <a name="WorkersScriptMigrationsStepsTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsStepsTransferredClasses {
    string From = null,
    string FromScript = null,
    string To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.fromScript">FromScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#from_script WorkersScript#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.to">To</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#from WorkersScript#from}.

---

##### `FromScript`<sup>Optional</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.fromScript"></a>

```csharp
public string FromScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#from_script WorkersScript#from_script}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.to"></a>

```csharp
public string To { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsTransferredClasses <a name="WorkersScriptMigrationsTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsTransferredClasses {
    string From = null,
    string FromScript = null,
    string To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.fromScript">FromScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#from_script WorkersScript#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.to">To</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#from WorkersScript#from}.

---

##### `FromScript`<sup>Optional</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.fromScript"></a>

```csharp
public string FromScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#from_script WorkersScript#from_script}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.to"></a>

```csharp
public string To { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptObservability <a name="WorkersScriptObservability" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptObservability {
    object Enabled,
    double HeadSamplingRate = null,
    WorkersScriptObservabilityLogs Logs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.enabled">Enabled</a></code> | <code>object</code> | Whether observability is enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a></code> | Log settings for the Worker. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether observability is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#enabled WorkersScript#enabled}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; set; }
```

- *Type:* double

The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}

---

##### `Logs`<sup>Optional</sup> <a name="Logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservability.property.logs"></a>

```csharp
public WorkersScriptObservabilityLogs Logs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

Log settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#logs WorkersScript#logs}

---

### WorkersScriptObservabilityLogs <a name="WorkersScriptObservabilityLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptObservabilityLogs {
    object Enabled,
    object InvocationLogs,
    double HeadSamplingRate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.enabled">Enabled</a></code> | <code>object</code> | Whether logs are enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.invocationLogs">InvocationLogs</a></code> | <code>object</code> | Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether logs are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#enabled WorkersScript#enabled}

---

##### `InvocationLogs`<sup>Required</sup> <a name="InvocationLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.invocationLogs"></a>

```csharp
public object InvocationLogs { get; set; }
```

- *Type:* object

Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#invocation_logs WorkersScript#invocation_logs}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; set; }
```

- *Type:* double

The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}

---

### WorkersScriptPlacement <a name="WorkersScriptPlacement" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptPlacement {
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.property.mode">Mode</a></code> | <code>string</code> | Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart". |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacement.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#mode WorkersScript#mode}

---

### WorkersScriptTailConsumers <a name="WorkersScriptTailConsumers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptTailConsumers {
    string Service,
    string Environment = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.service">Service</a></code> | <code>string</code> | Name of Worker that is to be the consumer. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.environment">Environment</a></code> | <code>string</code> | Optional environment if the Worker utilizes one. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.namespace">Namespace</a></code> | <code>string</code> | Optional dispatch namespace the script belongs to. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Name of Worker that is to be the consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#service WorkersScript#service}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Optional environment if the Worker utilizes one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Optional dispatch namespace the script belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/workers_script#namespace WorkersScript#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkersScriptAssetsConfigOutputReference <a name="WorkersScriptAssetsConfigOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptAssetsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHtmlHandling">ResetHtmlHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetNotFoundHandling">ResetNotFoundHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRedirects">ResetRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRunWorkerFirst">ResetRunWorkerFirst</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetServeDirectly">ResetServeDirectly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetHtmlHandling` <a name="ResetHtmlHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHtmlHandling"></a>

```csharp
private void ResetHtmlHandling()
```

##### `ResetNotFoundHandling` <a name="ResetNotFoundHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetNotFoundHandling"></a>

```csharp
private void ResetNotFoundHandling()
```

##### `ResetRedirects` <a name="ResetRedirects" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRedirects"></a>

```csharp
private void ResetRedirects()
```

##### `ResetRunWorkerFirst` <a name="ResetRunWorkerFirst" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRunWorkerFirst"></a>

```csharp
private void ResetRunWorkerFirst()
```

##### `ResetServeDirectly` <a name="ResetServeDirectly" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetServeDirectly"></a>

```csharp
private void ResetServeDirectly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headersInput">HeadersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandlingInput">HtmlHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandlingInput">NotFoundHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirectsInput">RedirectsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirstInput">RunWorkerFirstInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectlyInput">ServeDirectlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headers">Headers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandling">HtmlHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandling">NotFoundHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirects">Redirects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirst">RunWorkerFirst</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectly">ServeDirectly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headersInput"></a>

```csharp
public string HeadersInput { get; }
```

- *Type:* string

---

##### `HtmlHandlingInput`<sup>Optional</sup> <a name="HtmlHandlingInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandlingInput"></a>

```csharp
public string HtmlHandlingInput { get; }
```

- *Type:* string

---

##### `NotFoundHandlingInput`<sup>Optional</sup> <a name="NotFoundHandlingInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandlingInput"></a>

```csharp
public string NotFoundHandlingInput { get; }
```

- *Type:* string

---

##### `RedirectsInput`<sup>Optional</sup> <a name="RedirectsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirectsInput"></a>

```csharp
public string RedirectsInput { get; }
```

- *Type:* string

---

##### `RunWorkerFirstInput`<sup>Optional</sup> <a name="RunWorkerFirstInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirstInput"></a>

```csharp
public object RunWorkerFirstInput { get; }
```

- *Type:* object

---

##### `ServeDirectlyInput`<sup>Optional</sup> <a name="ServeDirectlyInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectlyInput"></a>

```csharp
public object ServeDirectlyInput { get; }
```

- *Type:* object

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headers"></a>

```csharp
public string Headers { get; }
```

- *Type:* string

---

##### `HtmlHandling`<sup>Required</sup> <a name="HtmlHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandling"></a>

```csharp
public string HtmlHandling { get; }
```

- *Type:* string

---

##### `NotFoundHandling`<sup>Required</sup> <a name="NotFoundHandling" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandling"></a>

```csharp
public string NotFoundHandling { get; }
```

- *Type:* string

---

##### `Redirects`<sup>Required</sup> <a name="Redirects" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirects"></a>

```csharp
public string Redirects { get; }
```

- *Type:* string

---

##### `RunWorkerFirst`<sup>Required</sup> <a name="RunWorkerFirst" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirst"></a>

```csharp
public object RunWorkerFirst { get; }
```

- *Type:* object

---

##### `ServeDirectly`<sup>Required</sup> <a name="ServeDirectly" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectly"></a>

```csharp
public object ServeDirectly { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptAssetsOutputReference <a name="WorkersScriptAssetsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptAssetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetJwt">ResetJwt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig"></a>

```csharp
private void PutConfig(WorkersScriptAssetsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetJwt` <a name="ResetJwt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetJwt"></a>

```csharp
private void ResetJwt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference">WorkersScriptAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.configInput">ConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwtInput">JwtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwt">Jwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.config"></a>

```csharp
public WorkersScriptAssetsConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference">WorkersScriptAssetsConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.configInput"></a>

```csharp
public object ConfigInput { get; }
```

- *Type:* object

---

##### `JwtInput`<sup>Optional</sup> <a name="JwtInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwtInput"></a>

```csharp
public string JwtInput { get; }
```

- *Type:* string

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwt"></a>

```csharp
public string Jwt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptBindingsList <a name="WorkersScriptBindingsList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptBindingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.get"></a>

```csharp
private WorkersScriptBindingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptBindingsOutboundOutputReference <a name="WorkersScriptBindingsOutboundOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptBindingsOutboundOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker">PutWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetWorker">ResetWorker</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWorker` <a name="PutWorker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker"></a>

```csharp
private void PutWorker(WorkersScriptBindingsOutboundWorker Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

---

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetWorker` <a name="ResetWorker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetWorker"></a>

```csharp
private void ResetWorker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference">WorkersScriptBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.paramsInput">ParamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.workerInput">WorkerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.params">Params</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Worker`<sup>Required</sup> <a name="Worker" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.worker"></a>

```csharp
public WorkersScriptBindingsOutboundWorkerOutputReference Worker { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference">WorkersScriptBindingsOutboundWorkerOutputReference</a>

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.paramsInput"></a>

```csharp
public string[] ParamsInput { get; }
```

- *Type:* string[]

---

##### `WorkerInput`<sup>Optional</sup> <a name="WorkerInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.workerInput"></a>

```csharp
public object WorkerInput { get; }
```

- *Type:* object

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.params"></a>

```csharp
public string[] Params { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptBindingsOutboundWorkerOutputReference <a name="WorkersScriptBindingsOutboundWorkerOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptBindingsOutboundWorkerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptBindingsOutputReference <a name="WorkersScriptBindingsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptBindingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound">PutOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetClassName">ResetClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetIndexName">ResetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyBase64">ResetKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyJwk">ResetKeyJwk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOutbound">ResetOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPipeline">ResetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetQueueName">ResetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetScriptName">ResetScriptName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetStoreId">ResetStoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetUsages">ResetUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetWorkflowName">ResetWorkflowName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutbound` <a name="PutOutbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound"></a>

```csharp
private void PutOutbound(WorkersScriptBindingsOutbound Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetCertificateId"></a>

```csharp
private void ResetCertificateId()
```

##### `ResetClassName` <a name="ResetClassName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetClassName"></a>

```csharp
private void ResetClassName()
```

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndexName` <a name="ResetIndexName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetIndexName"></a>

```csharp
private void ResetIndexName()
```

##### `ResetJson` <a name="ResetJson" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJson"></a>

```csharp
private void ResetJson()
```

##### `ResetKeyBase64` <a name="ResetKeyBase64" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyBase64"></a>

```csharp
private void ResetKeyBase64()
```

##### `ResetKeyJwk` <a name="ResetKeyJwk" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyJwk"></a>

```csharp
private void ResetKeyJwk()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespaceId"></a>

```csharp
private void ResetNamespaceId()
```

##### `ResetOutbound` <a name="ResetOutbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOutbound"></a>

```csharp
private void ResetOutbound()
```

##### `ResetPipeline` <a name="ResetPipeline" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPipeline"></a>

```csharp
private void ResetPipeline()
```

##### `ResetQueueName` <a name="ResetQueueName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetQueueName"></a>

```csharp
private void ResetQueueName()
```

##### `ResetScriptName` <a name="ResetScriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetScriptName"></a>

```csharp
private void ResetScriptName()
```

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetSecretName"></a>

```csharp
private void ResetSecretName()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetStoreId` <a name="ResetStoreId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetStoreId"></a>

```csharp
private void ResetStoreId()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetUsages` <a name="ResetUsages" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetUsages"></a>

```csharp
private void ResetUsages()
```

##### `ResetWorkflowName` <a name="ResetWorkflowName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetWorkflowName"></a>

```csharp
private void ResetWorkflowName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outbound">Outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference">WorkersScriptBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.classNameInput">ClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jsonInput">JsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64Input">KeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwkInput">KeyJwkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outboundInput">OutboundInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipelineInput">PipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueNameInput">QueueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptNameInput">ScriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeIdInput">StoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usagesInput">UsagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowNameInput">WorkflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.className">ClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexName">IndexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.json">Json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64">KeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwk">KeyJwk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipeline">Pipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueName">QueueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptName">ScriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeId">StoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usages">Usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowName">WorkflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Outbound`<sup>Required</sup> <a name="Outbound" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outbound"></a>

```csharp
public WorkersScriptBindingsOutboundOutputReference Outbound { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference">WorkersScriptBindingsOutboundOutputReference</a>

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateIdInput"></a>

```csharp
public string CertificateIdInput { get; }
```

- *Type:* string

---

##### `ClassNameInput`<sup>Optional</sup> <a name="ClassNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.classNameInput"></a>

```csharp
public string ClassNameInput { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexNameInput"></a>

```csharp
public string IndexNameInput { get; }
```

- *Type:* string

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jsonInput"></a>

```csharp
public string JsonInput { get; }
```

- *Type:* string

---

##### `KeyBase64Input`<sup>Optional</sup> <a name="KeyBase64Input" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64Input"></a>

```csharp
public string KeyBase64Input { get; }
```

- *Type:* string

---

##### `KeyJwkInput`<sup>Optional</sup> <a name="KeyJwkInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwkInput"></a>

```csharp
public string KeyJwkInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OutboundInput`<sup>Optional</sup> <a name="OutboundInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outboundInput"></a>

```csharp
public object OutboundInput { get; }
```

- *Type:* object

---

##### `PipelineInput`<sup>Optional</sup> <a name="PipelineInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipelineInput"></a>

```csharp
public string PipelineInput { get; }
```

- *Type:* string

---

##### `QueueNameInput`<sup>Optional</sup> <a name="QueueNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueNameInput"></a>

```csharp
public string QueueNameInput { get; }
```

- *Type:* string

---

##### `ScriptNameInput`<sup>Optional</sup> <a name="ScriptNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptNameInput"></a>

```csharp
public string ScriptNameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `StoreIdInput`<sup>Optional</sup> <a name="StoreIdInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeIdInput"></a>

```csharp
public string StoreIdInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsagesInput`<sup>Optional</sup> <a name="UsagesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usagesInput"></a>

```csharp
public string[] UsagesInput { get; }
```

- *Type:* string[]

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowNameInput"></a>

```csharp
public string WorkflowNameInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.className"></a>

```csharp
public string ClassName { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexName"></a>

```csharp
public string IndexName { get; }
```

- *Type:* string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.json"></a>

```csharp
public string Json { get; }
```

- *Type:* string

---

##### `KeyBase64`<sup>Required</sup> <a name="KeyBase64" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64"></a>

```csharp
public string KeyBase64 { get; }
```

- *Type:* string

---

##### `KeyJwk`<sup>Required</sup> <a name="KeyJwk" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwk"></a>

```csharp
public string KeyJwk { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipeline"></a>

```csharp
public string Pipeline { get; }
```

- *Type:* string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueName"></a>

```csharp
public string QueueName { get; }
```

- *Type:* string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptName"></a>

```csharp
public string ScriptName { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeId"></a>

```csharp
public string StoreId { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usages"></a>

```csharp
public string[] Usages { get; }
```

- *Type:* string[]

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowName"></a>

```csharp
public string WorkflowName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptMigrationsOutputReference <a name="WorkersScriptMigrationsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses">PutRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses">PutTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetDeletedClasses">ResetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewClasses">ResetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewSqliteClasses">ResetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewTag">ResetNewTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetOldTag">ResetOldTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetRenamedClasses">ResetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetSteps">ResetSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetTransferredClasses">ResetTransferredClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRenamedClasses` <a name="PutRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses"></a>

```csharp
private void PutRenamedClasses(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* object

---

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps"></a>

```csharp
private void PutSteps(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps.parameter.value"></a>

- *Type:* object

---

##### `PutTransferredClasses` <a name="PutTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses"></a>

```csharp
private void PutTransferredClasses(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* object

---

##### `ResetDeletedClasses` <a name="ResetDeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetDeletedClasses"></a>

```csharp
private void ResetDeletedClasses()
```

##### `ResetNewClasses` <a name="ResetNewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewClasses"></a>

```csharp
private void ResetNewClasses()
```

##### `ResetNewSqliteClasses` <a name="ResetNewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewSqliteClasses"></a>

```csharp
private void ResetNewSqliteClasses()
```

##### `ResetNewTag` <a name="ResetNewTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewTag"></a>

```csharp
private void ResetNewTag()
```

##### `ResetOldTag` <a name="ResetOldTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetOldTag"></a>

```csharp
private void ResetOldTag()
```

##### `ResetRenamedClasses` <a name="ResetRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetRenamedClasses"></a>

```csharp
private void ResetRenamedClasses()
```

##### `ResetSteps` <a name="ResetSteps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetSteps"></a>

```csharp
private void ResetSteps()
```

##### `ResetTransferredClasses` <a name="ResetTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetTransferredClasses"></a>

```csharp
private void ResetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList">WorkersScriptMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList">WorkersScriptMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList">WorkersScriptMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClassesInput">DeletedClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClassesInput">NewClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClassesInput">NewSqliteClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTagInput">NewTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTagInput">OldTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClassesInput">RenamedClassesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.stepsInput">StepsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClassesInput">TransferredClassesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClasses">NewClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTag">NewTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTag">OldTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClasses"></a>

```csharp
public WorkersScriptMigrationsRenamedClassesList RenamedClasses { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList">WorkersScriptMigrationsRenamedClassesList</a>

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.steps"></a>

```csharp
public WorkersScriptMigrationsStepsList Steps { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList">WorkersScriptMigrationsStepsList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClasses"></a>

```csharp
public WorkersScriptMigrationsTransferredClassesList TransferredClasses { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList">WorkersScriptMigrationsTransferredClassesList</a>

---

##### `DeletedClassesInput`<sup>Optional</sup> <a name="DeletedClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClassesInput"></a>

```csharp
public string[] DeletedClassesInput { get; }
```

- *Type:* string[]

---

##### `NewClassesInput`<sup>Optional</sup> <a name="NewClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClassesInput"></a>

```csharp
public string[] NewClassesInput { get; }
```

- *Type:* string[]

---

##### `NewSqliteClassesInput`<sup>Optional</sup> <a name="NewSqliteClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClassesInput"></a>

```csharp
public string[] NewSqliteClassesInput { get; }
```

- *Type:* string[]

---

##### `NewTagInput`<sup>Optional</sup> <a name="NewTagInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTagInput"></a>

```csharp
public string NewTagInput { get; }
```

- *Type:* string

---

##### `OldTagInput`<sup>Optional</sup> <a name="OldTagInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTagInput"></a>

```csharp
public string OldTagInput { get; }
```

- *Type:* string

---

##### `RenamedClassesInput`<sup>Optional</sup> <a name="RenamedClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClassesInput"></a>

```csharp
public object RenamedClassesInput { get; }
```

- *Type:* object

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.stepsInput"></a>

```csharp
public object StepsInput { get; }
```

- *Type:* object

---

##### `TransferredClassesInput`<sup>Optional</sup> <a name="TransferredClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClassesInput"></a>

```csharp
public object TransferredClassesInput { get; }
```

- *Type:* object

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; }
```

- *Type:* string[]

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClasses"></a>

```csharp
public string[] NewClasses { get; }
```

- *Type:* string[]

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; }
```

- *Type:* string[]

---

##### `NewTag`<sup>Required</sup> <a name="NewTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTag"></a>

```csharp
public string NewTag { get; }
```

- *Type:* string

---

##### `OldTag`<sup>Required</sup> <a name="OldTag" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTag"></a>

```csharp
public string OldTag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptMigrationsRenamedClassesList <a name="WorkersScriptMigrationsRenamedClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsRenamedClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get"></a>

```csharp
private WorkersScriptMigrationsRenamedClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptMigrationsRenamedClassesOutputReference <a name="WorkersScriptMigrationsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsRenamedClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetTo"></a>

```csharp
private void ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.toInput">ToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.toInput"></a>

```csharp
public string ToInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptMigrationsStepsList <a name="WorkersScriptMigrationsStepsList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get"></a>

```csharp
private WorkersScriptMigrationsStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptMigrationsStepsOutputReference <a name="WorkersScriptMigrationsStepsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses">PutRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses">PutTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetDeletedClasses">ResetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewClasses">ResetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewSqliteClasses">ResetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetRenamedClasses">ResetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetTransferredClasses">ResetTransferredClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRenamedClasses` <a name="PutRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses"></a>

```csharp
private void PutRenamedClasses(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* object

---

##### `PutTransferredClasses` <a name="PutTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses"></a>

```csharp
private void PutTransferredClasses(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* object

---

##### `ResetDeletedClasses` <a name="ResetDeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetDeletedClasses"></a>

```csharp
private void ResetDeletedClasses()
```

##### `ResetNewClasses` <a name="ResetNewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewClasses"></a>

```csharp
private void ResetNewClasses()
```

##### `ResetNewSqliteClasses` <a name="ResetNewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewSqliteClasses"></a>

```csharp
private void ResetNewSqliteClasses()
```

##### `ResetRenamedClasses` <a name="ResetRenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetRenamedClasses"></a>

```csharp
private void ResetRenamedClasses()
```

##### `ResetTransferredClasses` <a name="ResetTransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetTransferredClasses"></a>

```csharp
private void ResetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList">WorkersScriptMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList">WorkersScriptMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClassesInput">DeletedClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClassesInput">NewClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClassesInput">NewSqliteClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClassesInput">RenamedClassesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClassesInput">TransferredClassesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClasses">NewClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClasses"></a>

```csharp
public WorkersScriptMigrationsStepsRenamedClassesList RenamedClasses { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList">WorkersScriptMigrationsStepsRenamedClassesList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClasses"></a>

```csharp
public WorkersScriptMigrationsStepsTransferredClassesList TransferredClasses { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList">WorkersScriptMigrationsStepsTransferredClassesList</a>

---

##### `DeletedClassesInput`<sup>Optional</sup> <a name="DeletedClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClassesInput"></a>

```csharp
public string[] DeletedClassesInput { get; }
```

- *Type:* string[]

---

##### `NewClassesInput`<sup>Optional</sup> <a name="NewClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClassesInput"></a>

```csharp
public string[] NewClassesInput { get; }
```

- *Type:* string[]

---

##### `NewSqliteClassesInput`<sup>Optional</sup> <a name="NewSqliteClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClassesInput"></a>

```csharp
public string[] NewSqliteClassesInput { get; }
```

- *Type:* string[]

---

##### `RenamedClassesInput`<sup>Optional</sup> <a name="RenamedClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClassesInput"></a>

```csharp
public object RenamedClassesInput { get; }
```

- *Type:* object

---

##### `TransferredClassesInput`<sup>Optional</sup> <a name="TransferredClassesInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClassesInput"></a>

```csharp
public object TransferredClassesInput { get; }
```

- *Type:* object

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; }
```

- *Type:* string[]

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClasses"></a>

```csharp
public string[] NewClasses { get; }
```

- *Type:* string[]

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptMigrationsStepsRenamedClassesList <a name="WorkersScriptMigrationsStepsRenamedClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsStepsRenamedClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get"></a>

```csharp
private WorkersScriptMigrationsStepsRenamedClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptMigrationsStepsRenamedClassesOutputReference <a name="WorkersScriptMigrationsStepsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsStepsRenamedClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetTo"></a>

```csharp
private void ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.toInput">ToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.toInput"></a>

```csharp
public string ToInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptMigrationsStepsTransferredClassesList <a name="WorkersScriptMigrationsStepsTransferredClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsStepsTransferredClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get"></a>

```csharp
private WorkersScriptMigrationsStepsTransferredClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptMigrationsStepsTransferredClassesOutputReference <a name="WorkersScriptMigrationsStepsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsStepsTransferredClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFromScript">ResetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetFromScript` <a name="ResetFromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFromScript"></a>

```csharp
private void ResetFromScript()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetTo"></a>

```csharp
private void ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput">FromScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.toInput">ToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `FromScriptInput`<sup>Optional</sup> <a name="FromScriptInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput"></a>

```csharp
public string FromScriptInput { get; }
```

- *Type:* string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.toInput"></a>

```csharp
public string ToInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```csharp
public string FromScript { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptMigrationsTransferredClassesList <a name="WorkersScriptMigrationsTransferredClassesList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsTransferredClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get"></a>

```csharp
private WorkersScriptMigrationsTransferredClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptMigrationsTransferredClassesOutputReference <a name="WorkersScriptMigrationsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptMigrationsTransferredClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFromScript">ResetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetFromScript` <a name="ResetFromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFromScript"></a>

```csharp
private void ResetFromScript()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetTo"></a>

```csharp
private void ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScriptInput">FromScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.toInput">ToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `FromScriptInput`<sup>Optional</sup> <a name="FromScriptInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScriptInput"></a>

```csharp
public string FromScriptInput { get; }
```

- *Type:* string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.toInput"></a>

```csharp
public string ToInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```csharp
public string FromScript { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptObservabilityLogsOutputReference <a name="WorkersScriptObservabilityLogsOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptObservabilityLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetHeadSamplingRate"></a>

```csharp
private void ResetHeadSamplingRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogsInput">InvocationLogsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogs">InvocationLogs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRateInput"></a>

```csharp
public double HeadSamplingRateInput { get; }
```

- *Type:* double

---

##### `InvocationLogsInput`<sup>Optional</sup> <a name="InvocationLogsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogsInput"></a>

```csharp
public object InvocationLogsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; }
```

- *Type:* double

---

##### `InvocationLogs`<sup>Required</sup> <a name="InvocationLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogs"></a>

```csharp
public object InvocationLogs { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptObservabilityOutputReference <a name="WorkersScriptObservabilityOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptObservabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs">PutLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetLogs">ResetLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogs` <a name="PutLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs"></a>

```csharp
private void PutLogs(WorkersScriptObservabilityLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

---

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetHeadSamplingRate"></a>

```csharp
private void ResetHeadSamplingRate()
```

##### `ResetLogs` <a name="ResetLogs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetLogs"></a>

```csharp
private void ResetLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference">WorkersScriptObservabilityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logsInput">LogsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logs"></a>

```csharp
public WorkersScriptObservabilityLogsOutputReference Logs { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference">WorkersScriptObservabilityLogsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRateInput"></a>

```csharp
public double HeadSamplingRateInput { get; }
```

- *Type:* double

---

##### `LogsInput`<sup>Optional</sup> <a name="LogsInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logsInput"></a>

```csharp
public object LogsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptPlacementOutputReference <a name="WorkersScriptPlacementOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptPlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.lastAnalyzedAt">LastAnalyzedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastAnalyzedAt`<sup>Required</sup> <a name="LastAnalyzedAt" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.lastAnalyzedAt"></a>

```csharp
public string LastAnalyzedAt { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptTailConsumersList <a name="WorkersScriptTailConsumersList" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptTailConsumersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get"></a>

```csharp
private WorkersScriptTailConsumersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### WorkersScriptTailConsumersOutputReference <a name="WorkersScriptTailConsumersOutputReference" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersScriptTailConsumersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



