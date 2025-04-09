# `workersForPlatformsScriptSecret` Submodule <a name="`workersForPlatformsScriptSecret` Submodule" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkersForPlatformsScriptSecret <a name="WorkersForPlatformsScriptSecret" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret cloudflare_workers_for_platforms_script_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersForPlatformsScriptSecret(Construct Scope, string Id, WorkersForPlatformsScriptSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig">WorkersForPlatformsScriptSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig">WorkersForPlatformsScriptSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetText` <a name="ResetText" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkersForPlatformsScriptSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkersForPlatformsScriptSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkersForPlatformsScriptSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkersForPlatformsScriptSecret.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkersForPlatformsScriptSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkersForPlatformsScriptSecret resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkersForPlatformsScriptSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkersForPlatformsScriptSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkersForPlatformsScriptSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.dispatchNamespaceInput">DispatchNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.scriptNameInput">ScriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.dispatchNamespace">DispatchNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.scriptName">ScriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DispatchNamespaceInput`<sup>Optional</sup> <a name="DispatchNamespaceInput" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.dispatchNamespaceInput"></a>

```csharp
public string DispatchNamespaceInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScriptNameInput`<sup>Optional</sup> <a name="ScriptNameInput" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.scriptNameInput"></a>

```csharp
public string ScriptNameInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `DispatchNamespace`<sup>Required</sup> <a name="DispatchNamespace" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.dispatchNamespace"></a>

```csharp
public string DispatchNamespace { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.scriptName"></a>

```csharp
public string ScriptName { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkersForPlatformsScriptSecretConfig <a name="WorkersForPlatformsScriptSecretConfig" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersForPlatformsScriptSecretConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string DispatchNamespace,
    string Name,
    string ScriptName,
    string Text = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.dispatchNamespace">DispatchNamespace</a></code> | <code>string</code> | Name of the Workers for Platforms dispatch namespace. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.name">Name</a></code> | <code>string</code> | The name of this secret, this is what will be used to access it inside the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.scriptName">ScriptName</a></code> | <code>string</code> | Name of the script, used in URLs and route configuration. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.text">Text</a></code> | <code>string</code> | The value of the secret. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.type">Type</a></code> | <code>string</code> | The type of secret to put. Available values: "secret_text". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#account_id WorkersForPlatformsScriptSecret#account_id}

---

##### `DispatchNamespace`<sup>Required</sup> <a name="DispatchNamespace" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.dispatchNamespace"></a>

```csharp
public string DispatchNamespace { get; set; }
```

- *Type:* string

Name of the Workers for Platforms dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#dispatch_namespace WorkersForPlatformsScriptSecret#dispatch_namespace}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of this secret, this is what will be used to access it inside the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#name WorkersForPlatformsScriptSecret#name}

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.scriptName"></a>

```csharp
public string ScriptName { get; set; }
```

- *Type:* string

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#script_name WorkersForPlatformsScriptSecret#script_name}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

The value of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#text WorkersForPlatformsScriptSecret#text}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.workersForPlatformsScriptSecret.WorkersForPlatformsScriptSecretConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of secret to put. Available values: "secret_text".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.3.0/docs/resources/workers_for_platforms_script_secret#type WorkersForPlatformsScriptSecret#type}

---



