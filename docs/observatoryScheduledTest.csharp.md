# `observatoryScheduledTest` Submodule <a name="`observatoryScheduledTest` Submodule" id="@cdktf/provider-cloudflare.observatoryScheduledTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservatoryScheduledTest <a name="ObservatoryScheduledTest" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTest(Construct Scope, string Id, ObservatoryScheduledTestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig">ObservatoryScheduledTestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig">ObservatoryScheduledTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.putTimeouts"></a>

```csharp
private void PutTimeouts(ObservatoryScheduledTestTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeouts">ObservatoryScheduledTestTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObservatoryScheduledTest resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ObservatoryScheduledTest.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ObservatoryScheduledTest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ObservatoryScheduledTest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ObservatoryScheduledTest.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ObservatoryScheduledTest resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservatoryScheduledTest to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservatoryScheduledTest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/observatory_scheduled_test#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ObservatoryScheduledTest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference">ObservatoryScheduledTestTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.timeouts"></a>

```csharp
public ObservatoryScheduledTestTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference">ObservatoryScheduledTestTimeoutsOutputReference</a>

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservatoryScheduledTestConfig <a name="ObservatoryScheduledTestConfig" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Frequency,
    string Region,
    string Url,
    string ZoneId,
    string Id = null,
    ObservatoryScheduledTestTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.frequency">Frequency</a></code> | <code>string</code> | The frequency to run the test. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.region">Region</a></code> | <code>string</code> | The region to run the test in. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.url">Url</a></code> | <code>string</code> | The page to run the test on. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/observatory_scheduled_test#id ObservatoryScheduledTest#id}. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeouts">ObservatoryScheduledTestTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

The frequency to run the test.

Available values: `DAILY`, `WEEKLY`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/observatory_scheduled_test#frequency ObservatoryScheduledTest#frequency}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region to run the test in.

Available values: `us-central1`, `us-east1`, `us-east4`, `us-south1`, `us-west1`, `southamerica-east1`, `europe-north1`, `europe-southwest1`, `europe-west1`, `europe-west2`, `europe-west3`, `europe-west4`, `europe-west8`, `europe-west9`, `asia-east1`, `asia-south1`, `asia-southeast1`, `me-west1`, `australia-southeast1`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/observatory_scheduled_test#region ObservatoryScheduledTest#region}

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The page to run the test on. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/observatory_scheduled_test#url ObservatoryScheduledTest#url}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/observatory_scheduled_test#zone_id ObservatoryScheduledTest#zone_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/observatory_scheduled_test#id ObservatoryScheduledTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.timeouts"></a>

```csharp
public ObservatoryScheduledTestTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeouts">ObservatoryScheduledTestTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/observatory_scheduled_test#timeouts ObservatoryScheduledTest#timeouts}

---

### ObservatoryScheduledTestTimeouts <a name="ObservatoryScheduledTestTimeouts" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/observatory_scheduled_test#create ObservatoryScheduledTest#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/observatory_scheduled_test#create ObservatoryScheduledTest#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObservatoryScheduledTestTimeoutsOutputReference <a name="ObservatoryScheduledTestTimeoutsOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



