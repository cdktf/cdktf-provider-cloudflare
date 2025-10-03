# `r2BucketLifecycle` Submodule <a name="`r2BucketLifecycle` Submodule" id="@cdktf/provider-cloudflare.r2BucketLifecycle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### R2BucketLifecycle <a name="R2BucketLifecycle" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycle(Construct Scope, string Id, R2BucketLifecycleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig">R2BucketLifecycleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig">R2BucketLifecycleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.resetJurisdiction">ResetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.putRules"></a>

```csharp
private void PutRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.putRules.parameter.value"></a>

- *Type:* object

---

##### `ResetJurisdiction` <a name="ResetJurisdiction" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.resetJurisdiction"></a>

```csharp
private void ResetJurisdiction()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.resetRules"></a>

```csharp
private void ResetRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a R2BucketLifecycle resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

R2BucketLifecycle.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

R2BucketLifecycle.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

R2BucketLifecycle.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

R2BucketLifecycle.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a R2BucketLifecycle resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the R2BucketLifecycle to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing R2BucketLifecycle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the R2BucketLifecycle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList">R2BucketLifecycleRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.jurisdictionInput">JurisdictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.rulesInput">RulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.jurisdiction">Jurisdiction</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.rules"></a>

```csharp
public R2BucketLifecycleRulesList Rules { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList">R2BucketLifecycleRulesList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `JurisdictionInput`<sup>Optional</sup> <a name="JurisdictionInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.jurisdictionInput"></a>

```csharp
public string JurisdictionInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.rulesInput"></a>

```csharp
public object RulesInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Jurisdiction`<sup>Required</sup> <a name="Jurisdiction" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.jurisdiction"></a>

```csharp
public string Jurisdiction { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### R2BucketLifecycleConfig <a name="R2BucketLifecycleConfig" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string BucketName,
    string Jurisdiction = null,
    object Rules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.accountId">AccountId</a></code> | <code>string</code> | Account ID. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.bucketName">BucketName</a></code> | <code>string</code> | Name of the bucket. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.jurisdiction">Jurisdiction</a></code> | <code>string</code> | Jurisdiction of the bucket. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.rules">Rules</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#rules R2BucketLifecycle#rules}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#account_id R2BucketLifecycle#account_id}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#bucket_name R2BucketLifecycle#bucket_name}

---

##### `Jurisdiction`<sup>Optional</sup> <a name="Jurisdiction" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.jurisdiction"></a>

```csharp
public string Jurisdiction { get; set; }
```

- *Type:* string

Jurisdiction of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#jurisdiction R2BucketLifecycle#jurisdiction}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.rules"></a>

```csharp
public object Rules { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#rules R2BucketLifecycle#rules}.

---

### R2BucketLifecycleRules <a name="R2BucketLifecycleRules" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRules {
    R2BucketLifecycleRulesConditions Conditions,
    object Enabled,
    string Id,
    R2BucketLifecycleRulesAbortMultipartUploadsTransition AbortMultipartUploadsTransition = null,
    R2BucketLifecycleRulesDeleteObjectsTransition DeleteObjectsTransition = null,
    object StorageClassTransitions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions">R2BucketLifecycleRulesConditions</a></code> | Conditions that apply to all transitions of this rule. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.enabled">Enabled</a></code> | <code>object</code> | Whether or not this rule is in effect. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.id">Id</a></code> | <code>string</code> | Unique identifier for this rule. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.abortMultipartUploadsTransition">AbortMultipartUploadsTransition</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition">R2BucketLifecycleRulesAbortMultipartUploadsTransition</a></code> | Transition to abort ongoing multipart uploads. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.deleteObjectsTransition">DeleteObjectsTransition</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition">R2BucketLifecycleRulesDeleteObjectsTransition</a></code> | Transition to delete objects. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.storageClassTransitions">StorageClassTransitions</a></code> | <code>object</code> | Transitions to change the storage class of objects. |

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.conditions"></a>

```csharp
public R2BucketLifecycleRulesConditions Conditions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions">R2BucketLifecycleRulesConditions</a>

Conditions that apply to all transitions of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#conditions R2BucketLifecycle#conditions}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether or not this rule is in effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#enabled R2BucketLifecycle#enabled}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Unique identifier for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#id R2BucketLifecycle#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `AbortMultipartUploadsTransition`<sup>Optional</sup> <a name="AbortMultipartUploadsTransition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.abortMultipartUploadsTransition"></a>

```csharp
public R2BucketLifecycleRulesAbortMultipartUploadsTransition AbortMultipartUploadsTransition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition">R2BucketLifecycleRulesAbortMultipartUploadsTransition</a>

Transition to abort ongoing multipart uploads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#abort_multipart_uploads_transition R2BucketLifecycle#abort_multipart_uploads_transition}

---

##### `DeleteObjectsTransition`<sup>Optional</sup> <a name="DeleteObjectsTransition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.deleteObjectsTransition"></a>

```csharp
public R2BucketLifecycleRulesDeleteObjectsTransition DeleteObjectsTransition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition">R2BucketLifecycleRulesDeleteObjectsTransition</a>

Transition to delete objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#delete_objects_transition R2BucketLifecycle#delete_objects_transition}

---

##### `StorageClassTransitions`<sup>Optional</sup> <a name="StorageClassTransitions" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.storageClassTransitions"></a>

```csharp
public object StorageClassTransitions { get; set; }
```

- *Type:* object

Transitions to change the storage class of objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#storage_class_transitions R2BucketLifecycle#storage_class_transitions}

---

### R2BucketLifecycleRulesAbortMultipartUploadsTransition <a name="R2BucketLifecycleRulesAbortMultipartUploadsTransition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesAbortMultipartUploadsTransition {
    R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition Condition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a></code> | Condition for lifecycle transitions to apply after an object reaches an age in seconds. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition.property.condition"></a>

```csharp
public R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a>

Condition for lifecycle transitions to apply after an object reaches an age in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#condition R2BucketLifecycle#condition}

---

### R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition <a name="R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition {
    double MaxAge,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.property.maxAge">MaxAge</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.property.type">Type</a></code> | <code>string</code> | Available values: "Age". |

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.property.maxAge"></a>

```csharp
public double MaxAge { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "Age".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#type R2BucketLifecycle#type}

---

### R2BucketLifecycleRulesConditions <a name="R2BucketLifecycleRulesConditions" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesConditions {
    string Prefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions.property.prefix">Prefix</a></code> | <code>string</code> | Transitions will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads. |

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Transitions will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#prefix R2BucketLifecycle#prefix}

---

### R2BucketLifecycleRulesDeleteObjectsTransition <a name="R2BucketLifecycleRulesDeleteObjectsTransition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesDeleteObjectsTransition {
    R2BucketLifecycleRulesDeleteObjectsTransitionCondition Condition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition">R2BucketLifecycleRulesDeleteObjectsTransitionCondition</a></code> | Condition for lifecycle transitions to apply after an object reaches an age in seconds. |

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition.property.condition"></a>

```csharp
public R2BucketLifecycleRulesDeleteObjectsTransitionCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition">R2BucketLifecycleRulesDeleteObjectsTransitionCondition</a>

Condition for lifecycle transitions to apply after an object reaches an age in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#condition R2BucketLifecycle#condition}

---

### R2BucketLifecycleRulesDeleteObjectsTransitionCondition <a name="R2BucketLifecycleRulesDeleteObjectsTransitionCondition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesDeleteObjectsTransitionCondition {
    string Type,
    string Date = null,
    double MaxAge = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.property.type">Type</a></code> | <code>string</code> | Available values: "Age", "Date". |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.property.date">Date</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#date R2BucketLifecycle#date}. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.property.maxAge">MaxAge</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "Age", "Date".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#type R2BucketLifecycle#type}

---

##### `Date`<sup>Optional</sup> <a name="Date" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.property.date"></a>

```csharp
public string Date { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#date R2BucketLifecycle#date}.

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.property.maxAge"></a>

```csharp
public double MaxAge { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}.

---

### R2BucketLifecycleRulesStorageClassTransitions <a name="R2BucketLifecycleRulesStorageClassTransitions" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesStorageClassTransitions {
    R2BucketLifecycleRulesStorageClassTransitionsCondition Condition,
    string StorageClass
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition">R2BucketLifecycleRulesStorageClassTransitionsCondition</a></code> | Condition for lifecycle transitions to apply after an object reaches an age in seconds. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions.property.storageClass">StorageClass</a></code> | <code>string</code> | Available values: "InfrequentAccess". |

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions.property.condition"></a>

```csharp
public R2BucketLifecycleRulesStorageClassTransitionsCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition">R2BucketLifecycleRulesStorageClassTransitionsCondition</a>

Condition for lifecycle transitions to apply after an object reaches an age in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#condition R2BucketLifecycle#condition}

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions.property.storageClass"></a>

```csharp
public string StorageClass { get; set; }
```

- *Type:* string

Available values: "InfrequentAccess".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#storage_class R2BucketLifecycle#storage_class}

---

### R2BucketLifecycleRulesStorageClassTransitionsCondition <a name="R2BucketLifecycleRulesStorageClassTransitionsCondition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesStorageClassTransitionsCondition {
    string Type,
    string Date = null,
    double MaxAge = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.property.type">Type</a></code> | <code>string</code> | Available values: "Age", "Date". |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.property.date">Date</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#date R2BucketLifecycle#date}. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.property.maxAge">MaxAge</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "Age", "Date".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#type R2BucketLifecycle#type}

---

##### `Date`<sup>Optional</sup> <a name="Date" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.property.date"></a>

```csharp
public string Date { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#date R2BucketLifecycle#date}.

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.property.maxAge"></a>

```csharp
public double MaxAge { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}.

---

## Classes <a name="Classes" id="Classes"></a>

### R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference <a name="R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.maxAgeInput"></a>

```csharp
public double MaxAgeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference <a name="R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.putCondition"></a>

```csharp
private void PutCondition(R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference">R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.conditionInput">ConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.condition"></a>

```csharp
public R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference">R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.conditionInput"></a>

```csharp
public object ConditionInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### R2BucketLifecycleRulesConditionsOutputReference <a name="R2BucketLifecycleRulesConditionsOutputReference" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference <a name="R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resetDate">ResetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resetMaxAge">ResetMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDate` <a name="ResetDate" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resetDate"></a>

```csharp
private void ResetDate()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resetMaxAge"></a>

```csharp
private void ResetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.dateInput">DateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.date">Date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateInput`<sup>Optional</sup> <a name="DateInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.dateInput"></a>

```csharp
public string DateInput { get; }
```

- *Type:* string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.maxAgeInput"></a>

```csharp
public double MaxAgeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Date`<sup>Required</sup> <a name="Date" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.date"></a>

```csharp
public string Date { get; }
```

- *Type:* string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference <a name="R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.putCondition"></a>

```csharp
private void PutCondition(R2BucketLifecycleRulesDeleteObjectsTransitionCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition">R2BucketLifecycleRulesDeleteObjectsTransitionCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference">R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.conditionInput">ConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.condition"></a>

```csharp
public R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference">R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.conditionInput"></a>

```csharp
public object ConditionInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### R2BucketLifecycleRulesList <a name="R2BucketLifecycleRulesList" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.get"></a>

```csharp
private R2BucketLifecycleRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### R2BucketLifecycleRulesOutputReference <a name="R2BucketLifecycleRulesOutputReference" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putAbortMultipartUploadsTransition">PutAbortMultipartUploadsTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putDeleteObjectsTransition">PutDeleteObjectsTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putStorageClassTransitions">PutStorageClassTransitions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resetAbortMultipartUploadsTransition">ResetAbortMultipartUploadsTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resetDeleteObjectsTransition">ResetDeleteObjectsTransition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resetStorageClassTransitions">ResetStorageClassTransitions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbortMultipartUploadsTransition` <a name="PutAbortMultipartUploadsTransition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putAbortMultipartUploadsTransition"></a>

```csharp
private void PutAbortMultipartUploadsTransition(R2BucketLifecycleRulesAbortMultipartUploadsTransition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putAbortMultipartUploadsTransition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition">R2BucketLifecycleRulesAbortMultipartUploadsTransition</a>

---

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putConditions"></a>

```csharp
private void PutConditions(R2BucketLifecycleRulesConditions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions">R2BucketLifecycleRulesConditions</a>

---

##### `PutDeleteObjectsTransition` <a name="PutDeleteObjectsTransition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putDeleteObjectsTransition"></a>

```csharp
private void PutDeleteObjectsTransition(R2BucketLifecycleRulesDeleteObjectsTransition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putDeleteObjectsTransition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition">R2BucketLifecycleRulesDeleteObjectsTransition</a>

---

##### `PutStorageClassTransitions` <a name="PutStorageClassTransitions" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putStorageClassTransitions"></a>

```csharp
private void PutStorageClassTransitions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putStorageClassTransitions.parameter.value"></a>

- *Type:* object

---

##### `ResetAbortMultipartUploadsTransition` <a name="ResetAbortMultipartUploadsTransition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resetAbortMultipartUploadsTransition"></a>

```csharp
private void ResetAbortMultipartUploadsTransition()
```

##### `ResetDeleteObjectsTransition` <a name="ResetDeleteObjectsTransition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resetDeleteObjectsTransition"></a>

```csharp
private void ResetDeleteObjectsTransition()
```

##### `ResetStorageClassTransitions` <a name="ResetStorageClassTransitions" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resetStorageClassTransitions"></a>

```csharp
private void ResetStorageClassTransitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.abortMultipartUploadsTransition">AbortMultipartUploadsTransition</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference">R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference">R2BucketLifecycleRulesConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.deleteObjectsTransition">DeleteObjectsTransition</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference">R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.storageClassTransitions">StorageClassTransitions</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList">R2BucketLifecycleRulesStorageClassTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.abortMultipartUploadsTransitionInput">AbortMultipartUploadsTransitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.deleteObjectsTransitionInput">DeleteObjectsTransitionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.storageClassTransitionsInput">StorageClassTransitionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AbortMultipartUploadsTransition`<sup>Required</sup> <a name="AbortMultipartUploadsTransition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.abortMultipartUploadsTransition"></a>

```csharp
public R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference AbortMultipartUploadsTransition { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference">R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference</a>

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.conditions"></a>

```csharp
public R2BucketLifecycleRulesConditionsOutputReference Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference">R2BucketLifecycleRulesConditionsOutputReference</a>

---

##### `DeleteObjectsTransition`<sup>Required</sup> <a name="DeleteObjectsTransition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.deleteObjectsTransition"></a>

```csharp
public R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference DeleteObjectsTransition { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference">R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference</a>

---

##### `StorageClassTransitions`<sup>Required</sup> <a name="StorageClassTransitions" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.storageClassTransitions"></a>

```csharp
public R2BucketLifecycleRulesStorageClassTransitionsList StorageClassTransitions { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList">R2BucketLifecycleRulesStorageClassTransitionsList</a>

---

##### `AbortMultipartUploadsTransitionInput`<sup>Optional</sup> <a name="AbortMultipartUploadsTransitionInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.abortMultipartUploadsTransitionInput"></a>

```csharp
public object AbortMultipartUploadsTransitionInput { get; }
```

- *Type:* object

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.conditionsInput"></a>

```csharp
public object ConditionsInput { get; }
```

- *Type:* object

---

##### `DeleteObjectsTransitionInput`<sup>Optional</sup> <a name="DeleteObjectsTransitionInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.deleteObjectsTransitionInput"></a>

```csharp
public object DeleteObjectsTransitionInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StorageClassTransitionsInput`<sup>Optional</sup> <a name="StorageClassTransitionsInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.storageClassTransitionsInput"></a>

```csharp
public object StorageClassTransitionsInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference <a name="R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resetDate">ResetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resetMaxAge">ResetMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDate` <a name="ResetDate" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resetDate"></a>

```csharp
private void ResetDate()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resetMaxAge"></a>

```csharp
private void ResetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.dateInput">DateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.date">Date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateInput`<sup>Optional</sup> <a name="DateInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.dateInput"></a>

```csharp
public string DateInput { get; }
```

- *Type:* string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.maxAgeInput"></a>

```csharp
public double MaxAgeInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Date`<sup>Required</sup> <a name="Date" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.date"></a>

```csharp
public string Date { get; }
```

- *Type:* string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### R2BucketLifecycleRulesStorageClassTransitionsList <a name="R2BucketLifecycleRulesStorageClassTransitionsList" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesStorageClassTransitionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.get"></a>

```csharp
private R2BucketLifecycleRulesStorageClassTransitionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### R2BucketLifecycleRulesStorageClassTransitionsOutputReference <a name="R2BucketLifecycleRulesStorageClassTransitionsOutputReference" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new R2BucketLifecycleRulesStorageClassTransitionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.putCondition">PutCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.putCondition"></a>

```csharp
private void PutCondition(R2BucketLifecycleRulesStorageClassTransitionsCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition">R2BucketLifecycleRulesStorageClassTransitionsCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference">R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.condition"></a>

```csharp
public R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference">R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference</a>

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.conditionInput"></a>

```csharp
public object ConditionInput { get; }
```

- *Type:* object

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.storageClassInput"></a>

```csharp
public string StorageClassInput { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



