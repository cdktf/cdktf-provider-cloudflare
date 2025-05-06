# `workersForPlatformsDispatchNamespace` Submodule <a name="`workersForPlatformsDispatchNamespace` Submodule" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkersForPlatformsDispatchNamespace <a name="WorkersForPlatformsDispatchNamespace" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/workers_for_platforms_dispatch_namespace cloudflare_workers_for_platforms_dispatch_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersForPlatformsDispatchNamespace(Construct Scope, string Id, WorkersForPlatformsDispatchNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig">WorkersForPlatformsDispatchNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig">WorkersForPlatformsDispatchNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a WorkersForPlatformsDispatchNamespace resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkersForPlatformsDispatchNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkersForPlatformsDispatchNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkersForPlatformsDispatchNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

WorkersForPlatformsDispatchNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a WorkersForPlatformsDispatchNamespace resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkersForPlatformsDispatchNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkersForPlatformsDispatchNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/workers_for_platforms_dispatch_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the WorkersForPlatformsDispatchNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.modifiedBy">ModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.scriptCount">ScriptCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.modifiedBy"></a>

```csharp
public string ModifiedBy { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `ScriptCount`<sup>Required</sup> <a name="ScriptCount" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.scriptCount"></a>

```csharp
public double ScriptCount { get; }
```

- *Type:* double

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkersForPlatformsDispatchNamespaceConfig <a name="WorkersForPlatformsDispatchNamespaceConfig" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkersForPlatformsDispatchNamespaceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.name">Name</a></code> | <code>string</code> | The name of the dispatch namespace. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/workers_for_platforms_dispatch_namespace#account_id WorkersForPlatformsDispatchNamespace#account_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.workersForPlatformsDispatchNamespace.WorkersForPlatformsDispatchNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the dispatch namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.4.0/docs/resources/workers_for_platforms_dispatch_namespace#name WorkersForPlatformsDispatchNamespace#name}

---



