# `workerVersion` Submodule <a name="`workerVersion` Submodule" id="@cdktf/provider-cloudflare.workerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkerVersion <a name="WorkerVersion" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version cloudflare_worker_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersion(Construct Scope, string Id, WorkerVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig">WorkerVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig">WorkerVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations">PutAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets">PutAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings">PutBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations">PutMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules">PutModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAssets">ResetAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetBindings">ResetBindings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityDate">ResetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityFlags">ResetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMainModule">ResetMainModule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMigrations">ResetMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetModules">ResetModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetUsageModel">ResetUsageModel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnnotations` <a name="PutAnnotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations"></a>

```csharp
private void PutAnnotations(WorkerVersionAnnotations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAnnotations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

---

##### `PutAssets` <a name="PutAssets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets"></a>

```csharp
private void PutAssets(WorkerVersionAssets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putAssets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

---

##### `PutBindings` <a name="PutBindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings"></a>

```csharp
private void PutBindings(IResolvable|WorkerVersionBindings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putBindings.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]

---

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits"></a>

```csharp
private void PutLimits(WorkerVersionLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

---

##### `PutMigrations` <a name="PutMigrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations"></a>

```csharp
private void PutMigrations(WorkerVersionMigrations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putMigrations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

---

##### `PutModules` <a name="PutModules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules"></a>

```csharp
private void PutModules(IResolvable|WorkerVersionModules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putModules.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement"></a>

```csharp
private void PutPlacement(WorkerVersionPlacement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAssets` <a name="ResetAssets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetAssets"></a>

```csharp
private void ResetAssets()
```

##### `ResetBindings` <a name="ResetBindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetBindings"></a>

```csharp
private void ResetBindings()
```

##### `ResetCompatibilityDate` <a name="ResetCompatibilityDate" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityDate"></a>

```csharp
private void ResetCompatibilityDate()
```

##### `ResetCompatibilityFlags` <a name="ResetCompatibilityFlags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetCompatibilityFlags"></a>

```csharp
private void ResetCompatibilityFlags()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetLimits"></a>

```csharp
private void ResetLimits()
```

##### `ResetMainModule` <a name="ResetMainModule" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMainModule"></a>

```csharp
private void ResetMainModule()
```

##### `ResetMigrations` <a name="ResetMigrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetMigrations"></a>

```csharp
private void ResetMigrations()
```

##### `ResetModules` <a name="ResetModules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetModules"></a>

```csharp
private void ResetModules()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetPlacement"></a>

```csharp
private void ResetPlacement()
```

##### `ResetUsageModel` <a name="ResetUsageModel" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.resetUsageModel"></a>

```csharp
private void ResetUsageModel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkerVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkerVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkerVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkerVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkerVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkerVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotations">Annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference">WorkerVersionAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assets">Assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference">WorkerVersionAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindings">Bindings</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList">WorkerVersionBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference">WorkerVersionLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrations">Migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference">WorkerVersionMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modules">Modules</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList">WorkerVersionModulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.number">Number</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference">WorkerVersionPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotationsInput">AnnotationsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assetsInput">AssetsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindingsInput">BindingsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDateInput">CompatibilityDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlagsInput">CompatibilityFlagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limitsInput">LimitsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModuleInput">MainModuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrationsInput">MigrationsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modulesInput">ModulesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placementInput">PlacementInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModelInput">UsageModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerIdInput">WorkerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDate">CompatibilityDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModule">MainModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModel">UsageModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerId">WorkerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotations"></a>

```csharp
public WorkerVersionAnnotationsOutputReference Annotations { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference">WorkerVersionAnnotationsOutputReference</a>

---

##### `Assets`<sup>Required</sup> <a name="Assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assets"></a>

```csharp
public WorkerVersionAssetsOutputReference Assets { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference">WorkerVersionAssetsOutputReference</a>

---

##### `Bindings`<sup>Required</sup> <a name="Bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindings"></a>

```csharp
public WorkerVersionBindingsList Bindings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList">WorkerVersionBindingsList</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limits"></a>

```csharp
public WorkerVersionLimitsOutputReference Limits { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference">WorkerVersionLimitsOutputReference</a>

---

##### `Migrations`<sup>Required</sup> <a name="Migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrations"></a>

```csharp
public WorkerVersionMigrationsOutputReference Migrations { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference">WorkerVersionMigrationsOutputReference</a>

---

##### `Modules`<sup>Required</sup> <a name="Modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modules"></a>

```csharp
public WorkerVersionModulesList Modules { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList">WorkerVersionModulesList</a>

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.number"></a>

```csharp
public double Number { get; }
```

- *Type:* double

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placement"></a>

```csharp
public WorkerVersionPlacementOutputReference Placement { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference">WorkerVersionPlacementOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.annotationsInput"></a>

```csharp
public IResolvable|WorkerVersionAnnotations AnnotationsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

---

##### `AssetsInput`<sup>Optional</sup> <a name="AssetsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.assetsInput"></a>

```csharp
public IResolvable|WorkerVersionAssets AssetsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

---

##### `BindingsInput`<sup>Optional</sup> <a name="BindingsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.bindingsInput"></a>

```csharp
public IResolvable|WorkerVersionBindings[] BindingsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]

---

##### `CompatibilityDateInput`<sup>Optional</sup> <a name="CompatibilityDateInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDateInput"></a>

```csharp
public string CompatibilityDateInput { get; }
```

- *Type:* string

---

##### `CompatibilityFlagsInput`<sup>Optional</sup> <a name="CompatibilityFlagsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlagsInput"></a>

```csharp
public string[] CompatibilityFlagsInput { get; }
```

- *Type:* string[]

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.limitsInput"></a>

```csharp
public IResolvable|WorkerVersionLimits LimitsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

---

##### `MainModuleInput`<sup>Optional</sup> <a name="MainModuleInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModuleInput"></a>

```csharp
public string MainModuleInput { get; }
```

- *Type:* string

---

##### `MigrationsInput`<sup>Optional</sup> <a name="MigrationsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.migrationsInput"></a>

```csharp
public IResolvable|WorkerVersionMigrations MigrationsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

---

##### `ModulesInput`<sup>Optional</sup> <a name="ModulesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.modulesInput"></a>

```csharp
public IResolvable|WorkerVersionModules[] ModulesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.placementInput"></a>

```csharp
public IResolvable|WorkerVersionPlacement PlacementInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

---

##### `UsageModelInput`<sup>Optional</sup> <a name="UsageModelInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModelInput"></a>

```csharp
public string UsageModelInput { get; }
```

- *Type:* string

---

##### `WorkerIdInput`<sup>Optional</sup> <a name="WorkerIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerIdInput"></a>

```csharp
public string WorkerIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `CompatibilityDate`<sup>Required</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityDate"></a>

```csharp
public string CompatibilityDate { get; }
```

- *Type:* string

---

##### `CompatibilityFlags`<sup>Required</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.compatibilityFlags"></a>

```csharp
public string[] CompatibilityFlags { get; }
```

- *Type:* string[]

---

##### `MainModule`<sup>Required</sup> <a name="MainModule" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.mainModule"></a>

```csharp
public string MainModule { get; }
```

- *Type:* string

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.usageModel"></a>

```csharp
public string UsageModel { get; }
```

- *Type:* string

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.workerId"></a>

```csharp
public string WorkerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkerVersionAnnotations <a name="WorkerVersionAnnotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionAnnotations {
    string WorkersMessage = null,
    string WorkersTag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersMessage">WorkersMessage</a></code> | <code>string</code> | Human-readable message about the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersTag">WorkersTag</a></code> | <code>string</code> | User-provided identifier for the version. |

---

##### `WorkersMessage`<sup>Optional</sup> <a name="WorkersMessage" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersMessage"></a>

```csharp
public string WorkersMessage { get; set; }
```

- *Type:* string

Human-readable message about the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#workers_message WorkerVersion#workers_message}

---

##### `WorkersTag`<sup>Optional</sup> <a name="WorkersTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations.property.workersTag"></a>

```csharp
public string WorkersTag { get; set; }
```

- *Type:* string

User-provided identifier for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#workers_tag WorkerVersion#workers_tag}

---

### WorkerVersionAssets <a name="WorkerVersionAssets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionAssets {
    WorkerVersionAssetsConfig Config = null,
    string Directory = null,
    string Jwt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.directory">Directory</a></code> | <code>string</code> | Path to the directory containing asset files to upload. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.jwt">Jwt</a></code> | <code>string</code> | Token provided upon successful upload of all files from a registered manifest. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.config"></a>

```csharp
public WorkerVersionAssetsConfig Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#config WorkerVersion#config}

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.directory"></a>

```csharp
public string Directory { get; set; }
```

- *Type:* string

Path to the directory containing asset files to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#directory WorkerVersion#directory}

---

##### `Jwt`<sup>Optional</sup> <a name="Jwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets.property.jwt"></a>

```csharp
public string Jwt { get; set; }
```

- *Type:* string

Token provided upon successful upload of all files from a registered manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#jwt WorkerVersion#jwt}

---

### WorkerVersionAssetsConfig <a name="WorkerVersionAssetsConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionAssetsConfig {
    string HtmlHandling = null,
    string NotFoundHandling = null,
    System.Collections.Generic.IDictionary<string, object> RunWorkerFirst = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.htmlHandling">HtmlHandling</a></code> | <code>string</code> | Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.notFoundHandling">NotFoundHandling</a></code> | <code>string</code> | Determines the response when a request does not match a static asset, and there is no Worker script. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.runWorkerFirst">RunWorkerFirst</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | When a boolean true, requests will always invoke the Worker script. |

---

##### `HtmlHandling`<sup>Optional</sup> <a name="HtmlHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.htmlHandling"></a>

```csharp
public string HtmlHandling { get; set; }
```

- *Type:* string

Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#html_handling WorkerVersion#html_handling}

---

##### `NotFoundHandling`<sup>Optional</sup> <a name="NotFoundHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.notFoundHandling"></a>

```csharp
public string NotFoundHandling { get; set; }
```

- *Type:* string

Determines the response when a request does not match a static asset, and there is no Worker script.

Available values: "none", "404-page", "single-page-application".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#not_found_handling WorkerVersion#not_found_handling}

---

##### `RunWorkerFirst`<sup>Optional</sup> <a name="RunWorkerFirst" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig.property.runWorkerFirst"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> RunWorkerFirst { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

When a boolean true, requests will always invoke the Worker script.

Otherwise, attempt to serve an asset matching the request, falling back to the Worker script. When a list of strings, contains path rules to control routing to either the Worker or assets. Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#run_worker_first WorkerVersion#run_worker_first}

---

### WorkerVersionBindings <a name="WorkerVersionBindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionBindings {
    string Name,
    string Type,
    string Algorithm = null,
    string[] AllowedDestinationAddresses = null,
    string[] AllowedSenderAddresses = null,
    string BucketName = null,
    string CertificateId = null,
    string ClassName = null,
    string Dataset = null,
    string DestinationAddress = null,
    string Environment = null,
    string Format = null,
    string Id = null,
    string IndexName = null,
    string Json = null,
    string Jurisdiction = null,
    string KeyBase64 = null,
    string KeyJwk = null,
    string Namespace = null,
    string NamespaceId = null,
    string OldName = null,
    WorkerVersionBindingsOutbound Outbound = null,
    string Part = null,
    string Pipeline = null,
    string QueueName = null,
    string ScriptName = null,
    string SecretName = null,
    string Service = null,
    string StoreId = null,
    string Text = null,
    string[] Usages = null,
    string VersionId = null,
    string WorkflowName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.name">Name</a></code> | <code>string</code> | A JavaScript variable name for the binding. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.type">Type</a></code> | <code>string</code> | The kind of resource that the binding provides. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.algorithm">Algorithm</a></code> | <code>string</code> | Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.allowedDestinationAddresses">AllowedDestinationAddresses</a></code> | <code>string[]</code> | List of allowed destination addresses. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.allowedSenderAddresses">AllowedSenderAddresses</a></code> | <code>string[]</code> | List of allowed sender addresses. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.bucketName">BucketName</a></code> | <code>string</code> | R2 bucket to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.certificateId">CertificateId</a></code> | <code>string</code> | Identifier of the certificate to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.className">ClassName</a></code> | <code>string</code> | The exported class name of the Durable Object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.dataset">Dataset</a></code> | <code>string</code> | The name of the dataset to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | Destination address for the email. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.environment">Environment</a></code> | <code>string</code> | The environment of the script_name to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.format">Format</a></code> | <code>string</code> | Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.id">Id</a></code> | <code>string</code> | Identifier of the D1 database to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.indexName">IndexName</a></code> | <code>string</code> | Name of the Vectorize index to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.json">Json</a></code> | <code>string</code> | JSON data to use. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.jurisdiction">Jurisdiction</a></code> | <code>string</code> | The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyBase64">KeyBase64</a></code> | <code>string</code> | Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyJwk">KeyJwk</a></code> | <code>string</code> | Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespace">Namespace</a></code> | <code>string</code> | The name of the dispatch namespace. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespaceId">NamespaceId</a></code> | <code>string</code> | Namespace identifier tag. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.oldName">OldName</a></code> | <code>string</code> | The old name of the inherited binding. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.outbound">Outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a></code> | Outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.part">Part</a></code> | <code>string</code> | The name of the file containing the data content. Only accepted for `service worker syntax` Workers. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.pipeline">Pipeline</a></code> | <code>string</code> | Name of the Pipeline to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.queueName">QueueName</a></code> | <code>string</code> | Name of the Queue to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.scriptName">ScriptName</a></code> | <code>string</code> | The script where the Durable Object is defined, if it is external to this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.secretName">SecretName</a></code> | <code>string</code> | Name of the secret in the store. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.service">Service</a></code> | <code>string</code> | Name of Worker to bind to. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.storeId">StoreId</a></code> | <code>string</code> | ID of the store containing the secret. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.text">Text</a></code> | <code>string</code> | The text value to use. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.usages">Usages</a></code> | <code>string[]</code> | Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.versionId">VersionId</a></code> | <code>string</code> | Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.workflowName">WorkflowName</a></code> | <code>string</code> | Name of the Workflow to bind to. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A JavaScript variable name for the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#name WorkerVersion#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The kind of resource that the binding provides.

Available values: "ai", "analytics_engine", "assets", "browser", "d1", "data_blob", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "inherit", "images", "json", "kv_namespace", "mtls_certificate", "plain_text", "pipelines", "queue", "r2_bucket", "secret_text", "send_email", "service", "text_blob", "vectorize", "version_metadata", "secrets_store_secret", "secret_key", "workflow", "wasm_module".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#type WorkerVersion#type}

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#algorithm WorkerVersion#algorithm}

---

##### `AllowedDestinationAddresses`<sup>Optional</sup> <a name="AllowedDestinationAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.allowedDestinationAddresses"></a>

```csharp
public string[] AllowedDestinationAddresses { get; set; }
```

- *Type:* string[]

List of allowed destination addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#allowed_destination_addresses WorkerVersion#allowed_destination_addresses}

---

##### `AllowedSenderAddresses`<sup>Optional</sup> <a name="AllowedSenderAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.allowedSenderAddresses"></a>

```csharp
public string[] AllowedSenderAddresses { get; set; }
```

- *Type:* string[]

List of allowed sender addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#allowed_sender_addresses WorkerVersion#allowed_sender_addresses}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

R2 bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#bucket_name WorkerVersion#bucket_name}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.certificateId"></a>

```csharp
public string CertificateId { get; set; }
```

- *Type:* string

Identifier of the certificate to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#certificate_id WorkerVersion#certificate_id}

---

##### `ClassName`<sup>Optional</sup> <a name="ClassName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.className"></a>

```csharp
public string ClassName { get; set; }
```

- *Type:* string

The exported class name of the Durable Object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#class_name WorkerVersion#class_name}

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

The name of the dataset to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#dataset WorkerVersion#dataset}

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; set; }
```

- *Type:* string

Destination address for the email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#destination_address WorkerVersion#destination_address}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The environment of the script_name to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#environment WorkerVersion#environment}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#format WorkerVersion#format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Identifier of the D1 database to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#id WorkerVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexName`<sup>Optional</sup> <a name="IndexName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.indexName"></a>

```csharp
public string IndexName { get; set; }
```

- *Type:* string

Name of the Vectorize index to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#index_name WorkerVersion#index_name}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.json"></a>

```csharp
public string Json { get; set; }
```

- *Type:* string

JSON data to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#json WorkerVersion#json}

---

##### `Jurisdiction`<sup>Optional</sup> <a name="Jurisdiction" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.jurisdiction"></a>

```csharp
public string Jurisdiction { get; set; }
```

- *Type:* string

The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#jurisdiction WorkerVersion#jurisdiction}

---

##### `KeyBase64`<sup>Optional</sup> <a name="KeyBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyBase64"></a>

```csharp
public string KeyBase64 { get; set; }
```

- *Type:* string

Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#key_base64 WorkerVersion#key_base64}

---

##### `KeyJwk`<sup>Optional</sup> <a name="KeyJwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.keyJwk"></a>

```csharp
public string KeyJwk { get; set; }
```

- *Type:* string

Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#key_jwk WorkerVersion#key_jwk}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The name of the dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#namespace WorkerVersion#namespace}

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

Namespace identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#namespace_id WorkerVersion#namespace_id}

---

##### `OldName`<sup>Optional</sup> <a name="OldName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.oldName"></a>

```csharp
public string OldName { get; set; }
```

- *Type:* string

The old name of the inherited binding.

If set, the binding will be renamed from `old_name` to `name` in the new version. If not set, the binding will keep the same name between versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#old_name WorkerVersion#old_name}

---

##### `Outbound`<sup>Optional</sup> <a name="Outbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.outbound"></a>

```csharp
public WorkerVersionBindingsOutbound Outbound { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#outbound WorkerVersion#outbound}

---

##### `Part`<sup>Optional</sup> <a name="Part" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.part"></a>

```csharp
public string Part { get; set; }
```

- *Type:* string

The name of the file containing the data content. Only accepted for `service worker syntax` Workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#part WorkerVersion#part}

---

##### `Pipeline`<sup>Optional</sup> <a name="Pipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.pipeline"></a>

```csharp
public string Pipeline { get; set; }
```

- *Type:* string

Name of the Pipeline to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#pipeline WorkerVersion#pipeline}

---

##### `QueueName`<sup>Optional</sup> <a name="QueueName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.queueName"></a>

```csharp
public string QueueName { get; set; }
```

- *Type:* string

Name of the Queue to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#queue_name WorkerVersion#queue_name}

---

##### `ScriptName`<sup>Optional</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.scriptName"></a>

```csharp
public string ScriptName { get; set; }
```

- *Type:* string

The script where the Durable Object is defined, if it is external to this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#script_name WorkerVersion#script_name}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Name of the secret in the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#secret_name WorkerVersion#secret_name}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Name of Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#service WorkerVersion#service}

---

##### `StoreId`<sup>Optional</sup> <a name="StoreId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.storeId"></a>

```csharp
public string StoreId { get; set; }
```

- *Type:* string

ID of the store containing the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#store_id WorkerVersion#store_id}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

The text value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#text WorkerVersion#text}

---

##### `Usages`<sup>Optional</sup> <a name="Usages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.usages"></a>

```csharp
public string[] Usages { get; set; }
```

- *Type:* string[]

Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#usages WorkerVersion#usages}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version.

Defaults to inheriting the binding from the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#version_id WorkerVersion#version_id}

---

##### `WorkflowName`<sup>Optional</sup> <a name="WorkflowName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings.property.workflowName"></a>

```csharp
public string WorkflowName { get; set; }
```

- *Type:* string

Name of the Workflow to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#workflow_name WorkerVersion#workflow_name}

---

### WorkerVersionBindingsOutbound <a name="WorkerVersionBindingsOutbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionBindingsOutbound {
    string[] Params = null,
    WorkerVersionBindingsOutboundWorker Worker = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.params">Params</a></code> | <code>string[]</code> | Pass information from the Dispatch Worker to the Outbound Worker through the parameters. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a></code> | Outbound worker. |

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.params"></a>

```csharp
public string[] Params { get; set; }
```

- *Type:* string[]

Pass information from the Dispatch Worker to the Outbound Worker through the parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#params WorkerVersion#params}

---

##### `Worker`<sup>Optional</sup> <a name="Worker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound.property.worker"></a>

```csharp
public WorkerVersionBindingsOutboundWorker Worker { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#worker WorkerVersion#worker}

---

### WorkerVersionBindingsOutboundWorker <a name="WorkerVersionBindingsOutboundWorker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionBindingsOutboundWorker {
    string Environment = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.environment">Environment</a></code> | <code>string</code> | Environment of the outbound worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.service">Service</a></code> | <code>string</code> | Name of the outbound worker. |

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Environment of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#environment WorkerVersion#environment}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Name of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#service WorkerVersion#service}

---

### WorkerVersionConfig <a name="WorkerVersionConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string WorkerId,
    WorkerVersionAnnotations Annotations = null,
    WorkerVersionAssets Assets = null,
    IResolvable|WorkerVersionBindings[] Bindings = null,
    string CompatibilityDate = null,
    string[] CompatibilityFlags = null,
    WorkerVersionLimits Limits = null,
    string MainModule = null,
    WorkerVersionMigrations Migrations = null,
    IResolvable|WorkerVersionModules[] Modules = null,
    WorkerVersionPlacement Placement = null,
    string UsageModel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.workerId">WorkerId</a></code> | <code>string</code> | Identifier for the Worker, which can be ID or name. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.annotations">Annotations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a></code> | Metadata about the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.assets">Assets</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.bindings">Bindings</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]</code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityDate">CompatibilityDate</a></code> | <code>string</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>string[]</code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a></code> | Resource limits enforced at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.mainModule">MainModule</a></code> | <code>string</code> | The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler). |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.migrations">Migrations</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a></code> | Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.modules">Modules</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]</code> | Code, sourcemaps, and other content used at runtime. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.placement">Placement</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a></code> | Placement settings for the version. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.usageModel">UsageModel</a></code> | <code>string</code> | Usage model for the version. Available values: "standard", "bundled", "unbound". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#account_id WorkerVersion#account_id}

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.workerId"></a>

```csharp
public string WorkerId { get; set; }
```

- *Type:* string

Identifier for the Worker, which can be ID or name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#worker_id WorkerVersion#worker_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.annotations"></a>

```csharp
public WorkerVersionAnnotations Annotations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

Metadata about the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#annotations WorkerVersion#annotations}

---

##### `Assets`<sup>Optional</sup> <a name="Assets" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.assets"></a>

```csharp
public WorkerVersionAssets Assets { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

Configuration for assets within a Worker.

[`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and
[`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/) files should be
included as modules named `_headers` and `_redirects` with content type `text/plain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#assets WorkerVersion#assets}

---

##### `Bindings`<sup>Optional</sup> <a name="Bindings" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.bindings"></a>

```csharp
public IResolvable|WorkerVersionBindings[] Bindings { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#bindings WorkerVersion#bindings}

---

##### `CompatibilityDate`<sup>Optional</sup> <a name="CompatibilityDate" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityDate"></a>

```csharp
public string CompatibilityDate { get; set; }
```

- *Type:* string

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#compatibility_date WorkerVersion#compatibility_date}

---

##### `CompatibilityFlags`<sup>Optional</sup> <a name="CompatibilityFlags" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.compatibilityFlags"></a>

```csharp
public string[] CompatibilityFlags { get; set; }
```

- *Type:* string[]

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#compatibility_flags WorkerVersion#compatibility_flags}

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.limits"></a>

```csharp
public WorkerVersionLimits Limits { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

Resource limits enforced at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#limits WorkerVersion#limits}

---

##### `MainModule`<sup>Optional</sup> <a name="MainModule" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.mainModule"></a>

```csharp
public string MainModule { get; set; }
```

- *Type:* string

The name of the main module in the `modules` array (e.g. the name of the module that exports a `fetch` handler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#main_module WorkerVersion#main_module}

---

##### `Migrations`<sup>Optional</sup> <a name="Migrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.migrations"></a>

```csharp
public WorkerVersionMigrations Migrations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

Migrations for Durable Objects associated with the version. Migrations are applied when the version is deployed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#migrations WorkerVersion#migrations}

---

##### `Modules`<sup>Optional</sup> <a name="Modules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.modules"></a>

```csharp
public IResolvable|WorkerVersionModules[] Modules { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]

Code, sourcemaps, and other content used at runtime.

This includes [`_headers`](https://developers.cloudflare.com/workers/static-assets/headers/#custom-headers) and
[`_redirects`](https://developers.cloudflare.com/workers/static-assets/redirects/) files used to configure
[Static Assets](https://developers.cloudflare.com/workers/static-assets/). `_headers` and `_redirects` files should be
included as modules named `_headers` and `_redirects` with content type `text/plain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#modules WorkerVersion#modules}

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.placement"></a>

```csharp
public WorkerVersionPlacement Placement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

Placement settings for the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#placement WorkerVersion#placement}

---

##### `UsageModel`<sup>Optional</sup> <a name="UsageModel" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionConfig.property.usageModel"></a>

```csharp
public string UsageModel { get; set; }
```

- *Type:* string

Usage model for the version. Available values: "standard", "bundled", "unbound".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#usage_model WorkerVersion#usage_model}

---

### WorkerVersionLimits <a name="WorkerVersionLimits" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionLimits {
    double CpuMs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.property.cpuMs">CpuMs</a></code> | <code>double</code> | CPU time limit in milliseconds. |

---

##### `CpuMs`<sup>Required</sup> <a name="CpuMs" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits.property.cpuMs"></a>

```csharp
public double CpuMs { get; set; }
```

- *Type:* double

CPU time limit in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#cpu_ms WorkerVersion#cpu_ms}

---

### WorkerVersionMigrations <a name="WorkerVersionMigrations" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrations {
    string[] DeletedClasses = null,
    string[] NewClasses = null,
    string[] NewSqliteClasses = null,
    string NewTag = null,
    string OldTag = null,
    IResolvable|WorkerVersionMigrationsRenamedClasses[] RenamedClasses = null,
    IResolvable|WorkerVersionMigrationsSteps[] Steps = null,
    IResolvable|WorkerVersionMigrationsTransferredClasses[] TransferredClasses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newClasses">NewClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newTag">NewTag</a></code> | <code>string</code> | Tag to set as the latest migration tag. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.oldTag">OldTag</a></code> | <code>string</code> | Tag used to verify against the latest migration tag for this Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.renamedClasses">RenamedClasses</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.steps">Steps</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]</code> | Migrations to apply in order. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.transferredClasses">TransferredClasses</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `DeletedClasses`<sup>Optional</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; set; }
```

- *Type:* string[]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}

---

##### `NewClasses`<sup>Optional</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newClasses"></a>

```csharp
public string[] NewClasses { get; set; }
```

- *Type:* string[]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#new_classes WorkerVersion#new_classes}

---

##### `NewSqliteClasses`<sup>Optional</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; set; }
```

- *Type:* string[]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}

---

##### `NewTag`<sup>Optional</sup> <a name="NewTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.newTag"></a>

```csharp
public string NewTag { get; set; }
```

- *Type:* string

Tag to set as the latest migration tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#new_tag WorkerVersion#new_tag}

---

##### `OldTag`<sup>Optional</sup> <a name="OldTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.oldTag"></a>

```csharp
public string OldTag { get; set; }
```

- *Type:* string

Tag used to verify against the latest migration tag for this Worker.

If they don't match, the upload is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#old_tag WorkerVersion#old_tag}

---

##### `RenamedClasses`<sup>Optional</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.renamedClasses"></a>

```csharp
public IResolvable|WorkerVersionMigrationsRenamedClasses[] RenamedClasses { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}

---

##### `Steps`<sup>Optional</sup> <a name="Steps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.steps"></a>

```csharp
public IResolvable|WorkerVersionMigrationsSteps[] Steps { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]

Migrations to apply in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#steps WorkerVersion#steps}

---

##### `TransferredClasses`<sup>Optional</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations.property.transferredClasses"></a>

```csharp
public IResolvable|WorkerVersionMigrationsTransferredClasses[] TransferredClasses { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}

---

### WorkerVersionMigrationsRenamedClasses <a name="WorkerVersionMigrationsRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsRenamedClasses {
    string From = null,
    string To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.to">To</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses.property.to"></a>

```csharp
public string To { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsSteps <a name="WorkerVersionMigrationsSteps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsSteps {
    string[] DeletedClasses = null,
    string[] NewClasses = null,
    string[] NewSqliteClasses = null,
    IResolvable|WorkerVersionMigrationsStepsRenamedClasses[] RenamedClasses = null,
    IResolvable|WorkerVersionMigrationsStepsTransferredClasses[] TransferredClasses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newClasses">NewClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.renamedClasses">RenamedClasses</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.transferredClasses">TransferredClasses</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `DeletedClasses`<sup>Optional</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; set; }
```

- *Type:* string[]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#deleted_classes WorkerVersion#deleted_classes}

---

##### `NewClasses`<sup>Optional</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newClasses"></a>

```csharp
public string[] NewClasses { get; set; }
```

- *Type:* string[]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#new_classes WorkerVersion#new_classes}

---

##### `NewSqliteClasses`<sup>Optional</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; set; }
```

- *Type:* string[]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#new_sqlite_classes WorkerVersion#new_sqlite_classes}

---

##### `RenamedClasses`<sup>Optional</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.renamedClasses"></a>

```csharp
public IResolvable|WorkerVersionMigrationsStepsRenamedClasses[] RenamedClasses { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#renamed_classes WorkerVersion#renamed_classes}

---

##### `TransferredClasses`<sup>Optional</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps.property.transferredClasses"></a>

```csharp
public IResolvable|WorkerVersionMigrationsStepsTransferredClasses[] TransferredClasses { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#transferred_classes WorkerVersion#transferred_classes}

---

### WorkerVersionMigrationsStepsRenamedClasses <a name="WorkerVersionMigrationsStepsRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsStepsRenamedClasses {
    string From = null,
    string To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.to">To</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses.property.to"></a>

```csharp
public string To { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsStepsTransferredClasses <a name="WorkerVersionMigrationsStepsTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsStepsTransferredClasses {
    string From = null,
    string FromScript = null,
    string To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.fromScript">FromScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#from_script WorkerVersion#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.to">To</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `FromScript`<sup>Optional</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.fromScript"></a>

```csharp
public string FromScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#from_script WorkerVersion#from_script}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses.property.to"></a>

```csharp
public string To { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionMigrationsTransferredClasses <a name="WorkerVersionMigrationsTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsTransferredClasses {
    string From = null,
    string FromScript = null,
    string To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#from WorkerVersion#from}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.fromScript">FromScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#from_script WorkerVersion#from_script}. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.to">To</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#to WorkerVersion#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#from WorkerVersion#from}.

---

##### `FromScript`<sup>Optional</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.fromScript"></a>

```csharp
public string FromScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#from_script WorkerVersion#from_script}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses.property.to"></a>

```csharp
public string To { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#to WorkerVersion#to}.

---

### WorkerVersionModules <a name="WorkerVersionModules" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionModules {
    string ContentType,
    string Name,
    string ContentBase64 = null,
    string ContentFile = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentType">ContentType</a></code> | <code>string</code> | The content type of the module. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.name">Name</a></code> | <code>string</code> | The name of the module. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentBase64">ContentBase64</a></code> | <code>string</code> | The base64-encoded module content. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentFile">ContentFile</a></code> | <code>string</code> | The file path of the module content. |

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

The content type of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#content_type WorkerVersion#content_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the module.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#name WorkerVersion#name}

---

##### `ContentBase64`<sup>Optional</sup> <a name="ContentBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; set; }
```

- *Type:* string

The base64-encoded module content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#content_base64 WorkerVersion#content_base64}

---

##### `ContentFile`<sup>Optional</sup> <a name="ContentFile" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules.property.contentFile"></a>

```csharp
public string ContentFile { get; set; }
```

- *Type:* string

The file path of the module content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#content_file WorkerVersion#content_file}

---

### WorkerVersionPlacement <a name="WorkerVersionPlacement" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionPlacement {
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.property.mode">Mode</a></code> | <code>string</code> | Placement mode for the version. Available values: "smart". |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Placement mode for the version. Available values: "smart".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker_version#mode WorkerVersion#mode}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkerVersionAnnotationsOutputReference <a name="WorkerVersionAnnotationsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionAnnotationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersMessage">ResetWorkersMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersTag">ResetWorkersTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkersMessage` <a name="ResetWorkersMessage" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersMessage"></a>

```csharp
private void ResetWorkersMessage()
```

##### `ResetWorkersTag` <a name="ResetWorkersTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.resetWorkersTag"></a>

```csharp
private void ResetWorkersTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTriggeredBy">WorkersTriggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessageInput">WorkersMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTagInput">WorkersTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessage">WorkersMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTag">WorkersTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkersTriggeredBy`<sup>Required</sup> <a name="WorkersTriggeredBy" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTriggeredBy"></a>

```csharp
public string WorkersTriggeredBy { get; }
```

- *Type:* string

---

##### `WorkersMessageInput`<sup>Optional</sup> <a name="WorkersMessageInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessageInput"></a>

```csharp
public string WorkersMessageInput { get; }
```

- *Type:* string

---

##### `WorkersTagInput`<sup>Optional</sup> <a name="WorkersTagInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTagInput"></a>

```csharp
public string WorkersTagInput { get; }
```

- *Type:* string

---

##### `WorkersMessage`<sup>Required</sup> <a name="WorkersMessage" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersMessage"></a>

```csharp
public string WorkersMessage { get; }
```

- *Type:* string

---

##### `WorkersTag`<sup>Required</sup> <a name="WorkersTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.workersTag"></a>

```csharp
public string WorkersTag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionAnnotations InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAnnotations">WorkerVersionAnnotations</a>

---


### WorkerVersionAssetsConfigOutputReference <a name="WorkerVersionAssetsConfigOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionAssetsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetHtmlHandling">ResetHtmlHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetNotFoundHandling">ResetNotFoundHandling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetRunWorkerFirst">ResetRunWorkerFirst</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHtmlHandling` <a name="ResetHtmlHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetHtmlHandling"></a>

```csharp
private void ResetHtmlHandling()
```

##### `ResetNotFoundHandling` <a name="ResetNotFoundHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetNotFoundHandling"></a>

```csharp
private void ResetNotFoundHandling()
```

##### `ResetRunWorkerFirst` <a name="ResetRunWorkerFirst" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.resetRunWorkerFirst"></a>

```csharp
private void ResetRunWorkerFirst()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandlingInput">HtmlHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandlingInput">NotFoundHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirstInput">RunWorkerFirstInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandling">HtmlHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandling">NotFoundHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirst">RunWorkerFirst</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HtmlHandlingInput`<sup>Optional</sup> <a name="HtmlHandlingInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandlingInput"></a>

```csharp
public string HtmlHandlingInput { get; }
```

- *Type:* string

---

##### `NotFoundHandlingInput`<sup>Optional</sup> <a name="NotFoundHandlingInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandlingInput"></a>

```csharp
public string NotFoundHandlingInput { get; }
```

- *Type:* string

---

##### `RunWorkerFirstInput`<sup>Optional</sup> <a name="RunWorkerFirstInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirstInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> RunWorkerFirstInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `HtmlHandling`<sup>Required</sup> <a name="HtmlHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.htmlHandling"></a>

```csharp
public string HtmlHandling { get; }
```

- *Type:* string

---

##### `NotFoundHandling`<sup>Required</sup> <a name="NotFoundHandling" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.notFoundHandling"></a>

```csharp
public string NotFoundHandling { get; }
```

- *Type:* string

---

##### `RunWorkerFirst`<sup>Required</sup> <a name="RunWorkerFirst" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.runWorkerFirst"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> RunWorkerFirst { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionAssetsConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

---


### WorkerVersionAssetsOutputReference <a name="WorkerVersionAssetsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionAssetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetJwt">ResetJwt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig"></a>

```csharp
private void PutConfig(WorkerVersionAssetsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetDirectory"></a>

```csharp
private void ResetDirectory()
```

##### `ResetJwt` <a name="ResetJwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.resetJwt"></a>

```csharp
private void ResetJwt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.assetManifestSha256">AssetManifestSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference">WorkerVersionAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.configInput">ConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwtInput">JwtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.directory">Directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwt">Jwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssetManifestSha256`<sup>Required</sup> <a name="AssetManifestSha256" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.assetManifestSha256"></a>

```csharp
public string AssetManifestSha256 { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.config"></a>

```csharp
public WorkerVersionAssetsConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfigOutputReference">WorkerVersionAssetsConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.configInput"></a>

```csharp
public IResolvable|WorkerVersionAssetsConfig ConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsConfig">WorkerVersionAssetsConfig</a>

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.directoryInput"></a>

```csharp
public string DirectoryInput { get; }
```

- *Type:* string

---

##### `JwtInput`<sup>Optional</sup> <a name="JwtInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwtInput"></a>

```csharp
public string JwtInput { get; }
```

- *Type:* string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.directory"></a>

```csharp
public string Directory { get; }
```

- *Type:* string

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.jwt"></a>

```csharp
public string Jwt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionAssets InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionAssets">WorkerVersionAssets</a>

---


### WorkerVersionBindingsList <a name="WorkerVersionBindingsList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionBindingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get"></a>

```csharp
private WorkerVersionBindingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsList.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionBindings[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>[]

---


### WorkerVersionBindingsOutboundOutputReference <a name="WorkerVersionBindingsOutboundOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionBindingsOutboundOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker">PutWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetWorker">ResetWorker</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWorker` <a name="PutWorker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker"></a>

```csharp
private void PutWorker(WorkerVersionBindingsOutboundWorker Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.putWorker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

---

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetWorker` <a name="ResetWorker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.resetWorker"></a>

```csharp
private void ResetWorker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.worker">Worker</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference">WorkerVersionBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.paramsInput">ParamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.workerInput">WorkerInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.params">Params</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Worker`<sup>Required</sup> <a name="Worker" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.worker"></a>

```csharp
public WorkerVersionBindingsOutboundWorkerOutputReference Worker { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference">WorkerVersionBindingsOutboundWorkerOutputReference</a>

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.paramsInput"></a>

```csharp
public string[] ParamsInput { get; }
```

- *Type:* string[]

---

##### `WorkerInput`<sup>Optional</sup> <a name="WorkerInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.workerInput"></a>

```csharp
public IResolvable|WorkerVersionBindingsOutboundWorker WorkerInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.params"></a>

```csharp
public string[] Params { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionBindingsOutbound InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

---


### WorkerVersionBindingsOutboundWorkerOutputReference <a name="WorkerVersionBindingsOutboundWorkerOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionBindingsOutboundWorkerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionBindingsOutboundWorker InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundWorker">WorkerVersionBindingsOutboundWorker</a>

---


### WorkerVersionBindingsOutputReference <a name="WorkerVersionBindingsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionBindingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound">PutOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAllowedDestinationAddresses">ResetAllowedDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAllowedSenderAddresses">ResetAllowedSenderAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetClassName">ResetClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetIndexName">ResetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJurisdiction">ResetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyBase64">ResetKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyJwk">ResetKeyJwk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOldName">ResetOldName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOutbound">ResetOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPart">ResetPart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPipeline">ResetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetQueueName">ResetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetScriptName">ResetScriptName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetStoreId">ResetStoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetUsages">ResetUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetVersionId">ResetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetWorkflowName">ResetWorkflowName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutbound` <a name="PutOutbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound"></a>

```csharp
private void PutOutbound(WorkerVersionBindingsOutbound Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.putOutbound.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetAllowedDestinationAddresses` <a name="ResetAllowedDestinationAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAllowedDestinationAddresses"></a>

```csharp
private void ResetAllowedDestinationAddresses()
```

##### `ResetAllowedSenderAddresses` <a name="ResetAllowedSenderAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetAllowedSenderAddresses"></a>

```csharp
private void ResetAllowedSenderAddresses()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetCertificateId"></a>

```csharp
private void ResetCertificateId()
```

##### `ResetClassName` <a name="ResetClassName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetClassName"></a>

```csharp
private void ResetClassName()
```

##### `ResetDataset` <a name="ResetDataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetDestinationAddress"></a>

```csharp
private void ResetDestinationAddress()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndexName` <a name="ResetIndexName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetIndexName"></a>

```csharp
private void ResetIndexName()
```

##### `ResetJson` <a name="ResetJson" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJson"></a>

```csharp
private void ResetJson()
```

##### `ResetJurisdiction` <a name="ResetJurisdiction" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetJurisdiction"></a>

```csharp
private void ResetJurisdiction()
```

##### `ResetKeyBase64` <a name="ResetKeyBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyBase64"></a>

```csharp
private void ResetKeyBase64()
```

##### `ResetKeyJwk` <a name="ResetKeyJwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetKeyJwk"></a>

```csharp
private void ResetKeyJwk()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetNamespaceId"></a>

```csharp
private void ResetNamespaceId()
```

##### `ResetOldName` <a name="ResetOldName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOldName"></a>

```csharp
private void ResetOldName()
```

##### `ResetOutbound` <a name="ResetOutbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetOutbound"></a>

```csharp
private void ResetOutbound()
```

##### `ResetPart` <a name="ResetPart" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPart"></a>

```csharp
private void ResetPart()
```

##### `ResetPipeline` <a name="ResetPipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetPipeline"></a>

```csharp
private void ResetPipeline()
```

##### `ResetQueueName` <a name="ResetQueueName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetQueueName"></a>

```csharp
private void ResetQueueName()
```

##### `ResetScriptName` <a name="ResetScriptName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetScriptName"></a>

```csharp
private void ResetScriptName()
```

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetSecretName"></a>

```csharp
private void ResetSecretName()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetStoreId` <a name="ResetStoreId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetStoreId"></a>

```csharp
private void ResetStoreId()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetUsages` <a name="ResetUsages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetUsages"></a>

```csharp
private void ResetUsages()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetVersionId"></a>

```csharp
private void ResetVersionId()
```

##### `ResetWorkflowName` <a name="ResetWorkflowName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.resetWorkflowName"></a>

```csharp
private void ResetWorkflowName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outbound">Outbound</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference">WorkerVersionBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedDestinationAddressesInput">AllowedDestinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedSenderAddressesInput">AllowedSenderAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.classNameInput">ClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jsonInput">JsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jurisdictionInput">JurisdictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64Input">KeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwkInput">KeyJwkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.oldNameInput">OldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outboundInput">OutboundInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.partInput">PartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipelineInput">PipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueNameInput">QueueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptNameInput">ScriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeIdInput">StoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usagesInput">UsagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowNameInput">WorkflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedDestinationAddresses">AllowedDestinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedSenderAddresses">AllowedSenderAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.className">ClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexName">IndexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.json">Json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jurisdiction">Jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64">KeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwk">KeyJwk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.oldName">OldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.part">Part</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipeline">Pipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueName">QueueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptName">ScriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeId">StoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usages">Usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowName">WorkflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Outbound`<sup>Required</sup> <a name="Outbound" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outbound"></a>

```csharp
public WorkerVersionBindingsOutboundOutputReference Outbound { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutboundOutputReference">WorkerVersionBindingsOutboundOutputReference</a>

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `AllowedDestinationAddressesInput`<sup>Optional</sup> <a name="AllowedDestinationAddressesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedDestinationAddressesInput"></a>

```csharp
public string[] AllowedDestinationAddressesInput { get; }
```

- *Type:* string[]

---

##### `AllowedSenderAddressesInput`<sup>Optional</sup> <a name="AllowedSenderAddressesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedSenderAddressesInput"></a>

```csharp
public string[] AllowedSenderAddressesInput { get; }
```

- *Type:* string[]

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateIdInput"></a>

```csharp
public string CertificateIdInput { get; }
```

- *Type:* string

---

##### `ClassNameInput`<sup>Optional</sup> <a name="ClassNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.classNameInput"></a>

```csharp
public string ClassNameInput { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.destinationAddressInput"></a>

```csharp
public string DestinationAddressInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexNameInput"></a>

```csharp
public string IndexNameInput { get; }
```

- *Type:* string

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jsonInput"></a>

```csharp
public string JsonInput { get; }
```

- *Type:* string

---

##### `JurisdictionInput`<sup>Optional</sup> <a name="JurisdictionInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jurisdictionInput"></a>

```csharp
public string JurisdictionInput { get; }
```

- *Type:* string

---

##### `KeyBase64Input`<sup>Optional</sup> <a name="KeyBase64Input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64Input"></a>

```csharp
public string KeyBase64Input { get; }
```

- *Type:* string

---

##### `KeyJwkInput`<sup>Optional</sup> <a name="KeyJwkInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwkInput"></a>

```csharp
public string KeyJwkInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `OldNameInput`<sup>Optional</sup> <a name="OldNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.oldNameInput"></a>

```csharp
public string OldNameInput { get; }
```

- *Type:* string

---

##### `OutboundInput`<sup>Optional</sup> <a name="OutboundInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.outboundInput"></a>

```csharp
public IResolvable|WorkerVersionBindingsOutbound OutboundInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutbound">WorkerVersionBindingsOutbound</a>

---

##### `PartInput`<sup>Optional</sup> <a name="PartInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.partInput"></a>

```csharp
public string PartInput { get; }
```

- *Type:* string

---

##### `PipelineInput`<sup>Optional</sup> <a name="PipelineInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipelineInput"></a>

```csharp
public string PipelineInput { get; }
```

- *Type:* string

---

##### `QueueNameInput`<sup>Optional</sup> <a name="QueueNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueNameInput"></a>

```csharp
public string QueueNameInput { get; }
```

- *Type:* string

---

##### `ScriptNameInput`<sup>Optional</sup> <a name="ScriptNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptNameInput"></a>

```csharp
public string ScriptNameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `StoreIdInput`<sup>Optional</sup> <a name="StoreIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeIdInput"></a>

```csharp
public string StoreIdInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsagesInput`<sup>Optional</sup> <a name="UsagesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usagesInput"></a>

```csharp
public string[] UsagesInput { get; }
```

- *Type:* string[]

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowNameInput"></a>

```csharp
public string WorkflowNameInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `AllowedDestinationAddresses`<sup>Required</sup> <a name="AllowedDestinationAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedDestinationAddresses"></a>

```csharp
public string[] AllowedDestinationAddresses { get; }
```

- *Type:* string[]

---

##### `AllowedSenderAddresses`<sup>Required</sup> <a name="AllowedSenderAddresses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.allowedSenderAddresses"></a>

```csharp
public string[] AllowedSenderAddresses { get; }
```

- *Type:* string[]

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.className"></a>

```csharp
public string ClassName { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.indexName"></a>

```csharp
public string IndexName { get; }
```

- *Type:* string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.json"></a>

```csharp
public string Json { get; }
```

- *Type:* string

---

##### `Jurisdiction`<sup>Required</sup> <a name="Jurisdiction" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.jurisdiction"></a>

```csharp
public string Jurisdiction { get; }
```

- *Type:* string

---

##### `KeyBase64`<sup>Required</sup> <a name="KeyBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyBase64"></a>

```csharp
public string KeyBase64 { get; }
```

- *Type:* string

---

##### `KeyJwk`<sup>Required</sup> <a name="KeyJwk" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.keyJwk"></a>

```csharp
public string KeyJwk { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `OldName`<sup>Required</sup> <a name="OldName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.oldName"></a>

```csharp
public string OldName { get; }
```

- *Type:* string

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.part"></a>

```csharp
public string Part { get; }
```

- *Type:* string

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.pipeline"></a>

```csharp
public string Pipeline { get; }
```

- *Type:* string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.queueName"></a>

```csharp
public string QueueName { get; }
```

- *Type:* string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.scriptName"></a>

```csharp
public string ScriptName { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.storeId"></a>

```csharp
public string StoreId { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.usages"></a>

```csharp
public string[] Usages { get; }
```

- *Type:* string[]

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.workflowName"></a>

```csharp
public string WorkflowName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionBindings InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionBindings">WorkerVersionBindings</a>

---


### WorkerVersionLimitsOutputReference <a name="WorkerVersionLimitsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMsInput">CpuMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMs">CpuMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuMsInput`<sup>Optional</sup> <a name="CpuMsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMsInput"></a>

```csharp
public double CpuMsInput { get; }
```

- *Type:* double

---

##### `CpuMs`<sup>Required</sup> <a name="CpuMs" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.cpuMs"></a>

```csharp
public double CpuMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionLimits InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionLimits">WorkerVersionLimits</a>

---


### WorkerVersionMigrationsOutputReference <a name="WorkerVersionMigrationsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses">PutRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses">PutTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetDeletedClasses">ResetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewClasses">ResetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewSqliteClasses">ResetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewTag">ResetNewTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetOldTag">ResetOldTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetRenamedClasses">ResetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetSteps">ResetSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetTransferredClasses">ResetTransferredClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRenamedClasses` <a name="PutRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses"></a>

```csharp
private void PutRenamedClasses(IResolvable|WorkerVersionMigrationsRenamedClasses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]

---

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps"></a>

```csharp
private void PutSteps(IResolvable|WorkerVersionMigrationsSteps[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putSteps.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]

---

##### `PutTransferredClasses` <a name="PutTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses"></a>

```csharp
private void PutTransferredClasses(IResolvable|WorkerVersionMigrationsTransferredClasses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]

---

##### `ResetDeletedClasses` <a name="ResetDeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetDeletedClasses"></a>

```csharp
private void ResetDeletedClasses()
```

##### `ResetNewClasses` <a name="ResetNewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewClasses"></a>

```csharp
private void ResetNewClasses()
```

##### `ResetNewSqliteClasses` <a name="ResetNewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewSqliteClasses"></a>

```csharp
private void ResetNewSqliteClasses()
```

##### `ResetNewTag` <a name="ResetNewTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetNewTag"></a>

```csharp
private void ResetNewTag()
```

##### `ResetOldTag` <a name="ResetOldTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetOldTag"></a>

```csharp
private void ResetOldTag()
```

##### `ResetRenamedClasses` <a name="ResetRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetRenamedClasses"></a>

```csharp
private void ResetRenamedClasses()
```

##### `ResetSteps` <a name="ResetSteps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetSteps"></a>

```csharp
private void ResetSteps()
```

##### `ResetTransferredClasses` <a name="ResetTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.resetTransferredClasses"></a>

```csharp
private void ResetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList">WorkerVersionMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList">WorkerVersionMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList">WorkerVersionMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClassesInput">DeletedClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClassesInput">NewClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClassesInput">NewSqliteClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTagInput">NewTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTagInput">OldTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClassesInput">RenamedClassesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.stepsInput">StepsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClassesInput">TransferredClassesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClasses">NewClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTag">NewTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTag">OldTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClasses"></a>

```csharp
public WorkerVersionMigrationsRenamedClassesList RenamedClasses { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList">WorkerVersionMigrationsRenamedClassesList</a>

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.steps"></a>

```csharp
public WorkerVersionMigrationsStepsList Steps { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList">WorkerVersionMigrationsStepsList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClasses"></a>

```csharp
public WorkerVersionMigrationsTransferredClassesList TransferredClasses { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList">WorkerVersionMigrationsTransferredClassesList</a>

---

##### `DeletedClassesInput`<sup>Optional</sup> <a name="DeletedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClassesInput"></a>

```csharp
public string[] DeletedClassesInput { get; }
```

- *Type:* string[]

---

##### `NewClassesInput`<sup>Optional</sup> <a name="NewClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClassesInput"></a>

```csharp
public string[] NewClassesInput { get; }
```

- *Type:* string[]

---

##### `NewSqliteClassesInput`<sup>Optional</sup> <a name="NewSqliteClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClassesInput"></a>

```csharp
public string[] NewSqliteClassesInput { get; }
```

- *Type:* string[]

---

##### `NewTagInput`<sup>Optional</sup> <a name="NewTagInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTagInput"></a>

```csharp
public string NewTagInput { get; }
```

- *Type:* string

---

##### `OldTagInput`<sup>Optional</sup> <a name="OldTagInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTagInput"></a>

```csharp
public string OldTagInput { get; }
```

- *Type:* string

---

##### `RenamedClassesInput`<sup>Optional</sup> <a name="RenamedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.renamedClassesInput"></a>

```csharp
public IResolvable|WorkerVersionMigrationsRenamedClasses[] RenamedClassesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.stepsInput"></a>

```csharp
public IResolvable|WorkerVersionMigrationsSteps[] StepsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]

---

##### `TransferredClassesInput`<sup>Optional</sup> <a name="TransferredClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.transferredClassesInput"></a>

```csharp
public IResolvable|WorkerVersionMigrationsTransferredClasses[] TransferredClassesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; }
```

- *Type:* string[]

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newClasses"></a>

```csharp
public string[] NewClasses { get; }
```

- *Type:* string[]

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; }
```

- *Type:* string[]

---

##### `NewTag`<sup>Required</sup> <a name="NewTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.newTag"></a>

```csharp
public string NewTag { get; }
```

- *Type:* string

---

##### `OldTag`<sup>Required</sup> <a name="OldTag" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.oldTag"></a>

```csharp
public string OldTag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionMigrations InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrations">WorkerVersionMigrations</a>

---


### WorkerVersionMigrationsRenamedClassesList <a name="WorkerVersionMigrationsRenamedClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsRenamedClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get"></a>

```csharp
private WorkerVersionMigrationsRenamedClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesList.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionMigrationsRenamedClasses[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>[]

---


### WorkerVersionMigrationsRenamedClassesOutputReference <a name="WorkerVersionMigrationsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsRenamedClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.resetTo"></a>

```csharp
private void ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.toInput">ToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.toInput"></a>

```csharp
public string ToInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionMigrationsRenamedClasses InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsRenamedClasses">WorkerVersionMigrationsRenamedClasses</a>

---


### WorkerVersionMigrationsStepsList <a name="WorkerVersionMigrationsStepsList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get"></a>

```csharp
private WorkerVersionMigrationsStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsList.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionMigrationsSteps[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>[]

---


### WorkerVersionMigrationsStepsOutputReference <a name="WorkerVersionMigrationsStepsOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses">PutRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses">PutTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetDeletedClasses">ResetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewClasses">ResetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewSqliteClasses">ResetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetRenamedClasses">ResetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetTransferredClasses">ResetTransferredClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRenamedClasses` <a name="PutRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses"></a>

```csharp
private void PutRenamedClasses(IResolvable|WorkerVersionMigrationsStepsRenamedClasses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]

---

##### `PutTransferredClasses` <a name="PutTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses"></a>

```csharp
private void PutTransferredClasses(IResolvable|WorkerVersionMigrationsStepsTransferredClasses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]

---

##### `ResetDeletedClasses` <a name="ResetDeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetDeletedClasses"></a>

```csharp
private void ResetDeletedClasses()
```

##### `ResetNewClasses` <a name="ResetNewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewClasses"></a>

```csharp
private void ResetNewClasses()
```

##### `ResetNewSqliteClasses` <a name="ResetNewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetNewSqliteClasses"></a>

```csharp
private void ResetNewSqliteClasses()
```

##### `ResetRenamedClasses` <a name="ResetRenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetRenamedClasses"></a>

```csharp
private void ResetRenamedClasses()
```

##### `ResetTransferredClasses` <a name="ResetTransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.resetTransferredClasses"></a>

```csharp
private void ResetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList">WorkerVersionMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList">WorkerVersionMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClassesInput">DeletedClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClassesInput">NewClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClassesInput">NewSqliteClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClassesInput">RenamedClassesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClassesInput">TransferredClassesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClasses">NewClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClasses"></a>

```csharp
public WorkerVersionMigrationsStepsRenamedClassesList RenamedClasses { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList">WorkerVersionMigrationsStepsRenamedClassesList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClasses"></a>

```csharp
public WorkerVersionMigrationsStepsTransferredClassesList TransferredClasses { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList">WorkerVersionMigrationsStepsTransferredClassesList</a>

---

##### `DeletedClassesInput`<sup>Optional</sup> <a name="DeletedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClassesInput"></a>

```csharp
public string[] DeletedClassesInput { get; }
```

- *Type:* string[]

---

##### `NewClassesInput`<sup>Optional</sup> <a name="NewClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClassesInput"></a>

```csharp
public string[] NewClassesInput { get; }
```

- *Type:* string[]

---

##### `NewSqliteClassesInput`<sup>Optional</sup> <a name="NewSqliteClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClassesInput"></a>

```csharp
public string[] NewSqliteClassesInput { get; }
```

- *Type:* string[]

---

##### `RenamedClassesInput`<sup>Optional</sup> <a name="RenamedClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.renamedClassesInput"></a>

```csharp
public IResolvable|WorkerVersionMigrationsStepsRenamedClasses[] RenamedClassesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]

---

##### `TransferredClassesInput`<sup>Optional</sup> <a name="TransferredClassesInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.transferredClassesInput"></a>

```csharp
public IResolvable|WorkerVersionMigrationsStepsTransferredClasses[] TransferredClassesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; }
```

- *Type:* string[]

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newClasses"></a>

```csharp
public string[] NewClasses { get; }
```

- *Type:* string[]

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionMigrationsSteps InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsSteps">WorkerVersionMigrationsSteps</a>

---


### WorkerVersionMigrationsStepsRenamedClassesList <a name="WorkerVersionMigrationsStepsRenamedClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsStepsRenamedClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get"></a>

```csharp
private WorkerVersionMigrationsStepsRenamedClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesList.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionMigrationsStepsRenamedClasses[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>[]

---


### WorkerVersionMigrationsStepsRenamedClassesOutputReference <a name="WorkerVersionMigrationsStepsRenamedClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsStepsRenamedClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.resetTo"></a>

```csharp
private void ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.toInput">ToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.toInput"></a>

```csharp
public string ToInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionMigrationsStepsRenamedClasses InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsRenamedClasses">WorkerVersionMigrationsStepsRenamedClasses</a>

---


### WorkerVersionMigrationsStepsTransferredClassesList <a name="WorkerVersionMigrationsStepsTransferredClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsStepsTransferredClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get"></a>

```csharp
private WorkerVersionMigrationsStepsTransferredClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesList.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionMigrationsStepsTransferredClasses[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>[]

---


### WorkerVersionMigrationsStepsTransferredClassesOutputReference <a name="WorkerVersionMigrationsStepsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsStepsTransferredClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFromScript">ResetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetFromScript` <a name="ResetFromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetFromScript"></a>

```csharp
private void ResetFromScript()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.resetTo"></a>

```csharp
private void ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput">FromScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.toInput">ToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `FromScriptInput`<sup>Optional</sup> <a name="FromScriptInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput"></a>

```csharp
public string FromScriptInput { get; }
```

- *Type:* string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.toInput"></a>

```csharp
public string ToInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```csharp
public string FromScript { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionMigrationsStepsTransferredClasses InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsStepsTransferredClasses">WorkerVersionMigrationsStepsTransferredClasses</a>

---


### WorkerVersionMigrationsTransferredClassesList <a name="WorkerVersionMigrationsTransferredClassesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsTransferredClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get"></a>

```csharp
private WorkerVersionMigrationsTransferredClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesList.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionMigrationsTransferredClasses[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>[]

---


### WorkerVersionMigrationsTransferredClassesOutputReference <a name="WorkerVersionMigrationsTransferredClassesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionMigrationsTransferredClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFromScript">ResetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetFromScript` <a name="ResetFromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetFromScript"></a>

```csharp
private void ResetFromScript()
```

##### `ResetTo` <a name="ResetTo" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.resetTo"></a>

```csharp
private void ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScriptInput">FromScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.toInput">ToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `FromScriptInput`<sup>Optional</sup> <a name="FromScriptInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScriptInput"></a>

```csharp
public string FromScriptInput { get; }
```

- *Type:* string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.toInput"></a>

```csharp
public string ToInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```csharp
public string FromScript { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionMigrationsTransferredClasses InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionMigrationsTransferredClasses">WorkerVersionMigrationsTransferredClasses</a>

---


### WorkerVersionModulesList <a name="WorkerVersionModulesList" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionModulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get"></a>

```csharp
private WorkerVersionModulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesList.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionModules[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>[]

---


### WorkerVersionModulesOutputReference <a name="WorkerVersionModulesOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionModulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resetContentBase64">ResetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resetContentFile">ResetContentFile</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentBase64` <a name="ResetContentBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resetContentBase64"></a>

```csharp
private void ResetContentBase64()
```

##### `ResetContentFile` <a name="ResetContentFile" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.resetContentFile"></a>

```csharp
private void ResetContentFile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentSha256">ContentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentBase64Input">ContentBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFileInput">ContentFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentBase64">ContentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFile">ContentFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentSha256`<sup>Required</sup> <a name="ContentSha256" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentSha256"></a>

```csharp
public string ContentSha256 { get; }
```

- *Type:* string

---

##### `ContentBase64Input`<sup>Optional</sup> <a name="ContentBase64Input" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentBase64Input"></a>

```csharp
public string ContentBase64Input { get; }
```

- *Type:* string

---

##### `ContentFileInput`<sup>Optional</sup> <a name="ContentFileInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFileInput"></a>

```csharp
public string ContentFileInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; }
```

- *Type:* string

---

##### `ContentFile`<sup>Required</sup> <a name="ContentFile" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentFile"></a>

```csharp
public string ContentFile { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionModulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionModules InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionModules">WorkerVersionModules</a>

---


### WorkerVersionPlacementOutputReference <a name="WorkerVersionPlacementOutputReference" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerVersionPlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacementOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerVersionPlacement InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.workerVersion.WorkerVersionPlacement">WorkerVersionPlacement</a>

---



