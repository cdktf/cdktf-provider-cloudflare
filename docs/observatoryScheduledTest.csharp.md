# `observatoryScheduledTest` Submodule <a name="`observatoryScheduledTest` Submodule" id="@cdktf/provider-cloudflare.observatoryScheduledTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservatoryScheduledTest <a name="ObservatoryScheduledTest" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/observatory_scheduled_test cloudflare_observatory_scheduled_test}.

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

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/observatory_scheduled_test#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference">ObservatoryScheduledTestScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.test">Test</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference">ObservatoryScheduledTestTestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
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

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.schedule"></a>

```csharp
public ObservatoryScheduledTestScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference">ObservatoryScheduledTestScheduleOutputReference</a>

---

##### `Test`<sup>Required</sup> <a name="Test" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTest.property.test"></a>

```csharp
public ObservatoryScheduledTestTestOutputReference Test { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference">ObservatoryScheduledTestTestOutputReference</a>

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
    string Url,
    string ZoneId
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
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.url">Url</a></code> | <code>string</code> | A URL. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |

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

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

A URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/observatory_scheduled_test#url ObservatoryScheduledTest#url}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.1/docs/resources/observatory_scheduled_test#zone_id ObservatoryScheduledTest#zone_id}

---

### ObservatoryScheduledTestSchedule <a name="ObservatoryScheduledTestSchedule" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestSchedule {

};
```


### ObservatoryScheduledTestTest <a name="ObservatoryScheduledTestTest" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTest {

};
```


### ObservatoryScheduledTestTestDesktopReport <a name="ObservatoryScheduledTestTestDesktopReport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTestDesktopReport {

};
```


### ObservatoryScheduledTestTestDesktopReportError <a name="ObservatoryScheduledTestTestDesktopReportError" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTestDesktopReportError {

};
```


### ObservatoryScheduledTestTestMobileReport <a name="ObservatoryScheduledTestTestMobileReport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReport.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTestMobileReport {

};
```


### ObservatoryScheduledTestTestMobileReportError <a name="ObservatoryScheduledTestTestMobileReportError" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportError"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportError.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTestMobileReportError {

};
```


### ObservatoryScheduledTestTestRegion <a name="ObservatoryScheduledTestTestRegion" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTestRegion {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ObservatoryScheduledTestScheduleOutputReference <a name="ObservatoryScheduledTestScheduleOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestSchedule">ObservatoryScheduledTestSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestScheduleOutputReference.property.internalValue"></a>

```csharp
public ObservatoryScheduledTestSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestSchedule">ObservatoryScheduledTestSchedule</a>

---


### ObservatoryScheduledTestTestDesktopReportErrorOutputReference <a name="ObservatoryScheduledTestTestDesktopReportErrorOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTestDesktopReportErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.detail">Detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.finalDisplayedUrl">FinalDisplayedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportError">ObservatoryScheduledTestTestDesktopReportError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.detail"></a>

```csharp
public string Detail { get; }
```

- *Type:* string

---

##### `FinalDisplayedUrl`<sup>Required</sup> <a name="FinalDisplayedUrl" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.finalDisplayedUrl"></a>

```csharp
public string FinalDisplayedUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference.property.internalValue"></a>

```csharp
public ObservatoryScheduledTestTestDesktopReportError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportError">ObservatoryScheduledTestTestDesktopReportError</a>

---


### ObservatoryScheduledTestTestDesktopReportOutputReference <a name="ObservatoryScheduledTestTestDesktopReportOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTestDesktopReportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.cls">Cls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.deviceType">DeviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.error">Error</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference">ObservatoryScheduledTestTestDesktopReportErrorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.fcp">Fcp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.jsonReportUrl">JsonReportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.lcp">Lcp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.performanceScore">PerformanceScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.si">Si</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.tbt">Tbt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.ttfb">Ttfb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.tti">Tti</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReport">ObservatoryScheduledTestTestDesktopReport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cls`<sup>Required</sup> <a name="Cls" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.cls"></a>

```csharp
public double Cls { get; }
```

- *Type:* double

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.deviceType"></a>

```csharp
public string DeviceType { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.error"></a>

```csharp
public ObservatoryScheduledTestTestDesktopReportErrorOutputReference Error { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportErrorOutputReference">ObservatoryScheduledTestTestDesktopReportErrorOutputReference</a>

---

##### `Fcp`<sup>Required</sup> <a name="Fcp" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.fcp"></a>

```csharp
public double Fcp { get; }
```

- *Type:* double

---

##### `JsonReportUrl`<sup>Required</sup> <a name="JsonReportUrl" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.jsonReportUrl"></a>

```csharp
public string JsonReportUrl { get; }
```

- *Type:* string

---

##### `Lcp`<sup>Required</sup> <a name="Lcp" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.lcp"></a>

```csharp
public double Lcp { get; }
```

- *Type:* double

---

##### `PerformanceScore`<sup>Required</sup> <a name="PerformanceScore" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.performanceScore"></a>

```csharp
public double PerformanceScore { get; }
```

- *Type:* double

---

##### `Si`<sup>Required</sup> <a name="Si" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.si"></a>

```csharp
public double Si { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tbt`<sup>Required</sup> <a name="Tbt" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.tbt"></a>

```csharp
public double Tbt { get; }
```

- *Type:* double

---

##### `Ttfb`<sup>Required</sup> <a name="Ttfb" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.ttfb"></a>

```csharp
public double Ttfb { get; }
```

- *Type:* double

---

##### `Tti`<sup>Required</sup> <a name="Tti" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.tti"></a>

```csharp
public double Tti { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference.property.internalValue"></a>

```csharp
public ObservatoryScheduledTestTestDesktopReport InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReport">ObservatoryScheduledTestTestDesktopReport</a>

---


### ObservatoryScheduledTestTestMobileReportErrorOutputReference <a name="ObservatoryScheduledTestTestMobileReportErrorOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTestMobileReportErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.detail">Detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.finalDisplayedUrl">FinalDisplayedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportError">ObservatoryScheduledTestTestMobileReportError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.detail"></a>

```csharp
public string Detail { get; }
```

- *Type:* string

---

##### `FinalDisplayedUrl`<sup>Required</sup> <a name="FinalDisplayedUrl" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.finalDisplayedUrl"></a>

```csharp
public string FinalDisplayedUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference.property.internalValue"></a>

```csharp
public ObservatoryScheduledTestTestMobileReportError InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportError">ObservatoryScheduledTestTestMobileReportError</a>

---


### ObservatoryScheduledTestTestMobileReportOutputReference <a name="ObservatoryScheduledTestTestMobileReportOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTestMobileReportOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.cls">Cls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.deviceType">DeviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.error">Error</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference">ObservatoryScheduledTestTestMobileReportErrorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.fcp">Fcp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.jsonReportUrl">JsonReportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.lcp">Lcp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.performanceScore">PerformanceScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.si">Si</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.tbt">Tbt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.ttfb">Ttfb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.tti">Tti</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReport">ObservatoryScheduledTestTestMobileReport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cls`<sup>Required</sup> <a name="Cls" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.cls"></a>

```csharp
public double Cls { get; }
```

- *Type:* double

---

##### `DeviceType`<sup>Required</sup> <a name="DeviceType" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.deviceType"></a>

```csharp
public string DeviceType { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.error"></a>

```csharp
public ObservatoryScheduledTestTestMobileReportErrorOutputReference Error { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportErrorOutputReference">ObservatoryScheduledTestTestMobileReportErrorOutputReference</a>

---

##### `Fcp`<sup>Required</sup> <a name="Fcp" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.fcp"></a>

```csharp
public double Fcp { get; }
```

- *Type:* double

---

##### `JsonReportUrl`<sup>Required</sup> <a name="JsonReportUrl" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.jsonReportUrl"></a>

```csharp
public string JsonReportUrl { get; }
```

- *Type:* string

---

##### `Lcp`<sup>Required</sup> <a name="Lcp" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.lcp"></a>

```csharp
public double Lcp { get; }
```

- *Type:* double

---

##### `PerformanceScore`<sup>Required</sup> <a name="PerformanceScore" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.performanceScore"></a>

```csharp
public double PerformanceScore { get; }
```

- *Type:* double

---

##### `Si`<sup>Required</sup> <a name="Si" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.si"></a>

```csharp
public double Si { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tbt`<sup>Required</sup> <a name="Tbt" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.tbt"></a>

```csharp
public double Tbt { get; }
```

- *Type:* double

---

##### `Ttfb`<sup>Required</sup> <a name="Ttfb" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.ttfb"></a>

```csharp
public double Ttfb { get; }
```

- *Type:* double

---

##### `Tti`<sup>Required</sup> <a name="Tti" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.tti"></a>

```csharp
public double Tti { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference.property.internalValue"></a>

```csharp
public ObservatoryScheduledTestTestMobileReport InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReport">ObservatoryScheduledTestTestMobileReport</a>

---


### ObservatoryScheduledTestTestOutputReference <a name="ObservatoryScheduledTestTestOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.date">Date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.desktopReport">DesktopReport</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference">ObservatoryScheduledTestTestDesktopReportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.mobileReport">MobileReport</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference">ObservatoryScheduledTestTestMobileReportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.region">Region</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference">ObservatoryScheduledTestTestRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.scheduleFrequency">ScheduleFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTest">ObservatoryScheduledTestTest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Date`<sup>Required</sup> <a name="Date" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.date"></a>

```csharp
public string Date { get; }
```

- *Type:* string

---

##### `DesktopReport`<sup>Required</sup> <a name="DesktopReport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.desktopReport"></a>

```csharp
public ObservatoryScheduledTestTestDesktopReportOutputReference DesktopReport { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestDesktopReportOutputReference">ObservatoryScheduledTestTestDesktopReportOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MobileReport`<sup>Required</sup> <a name="MobileReport" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.mobileReport"></a>

```csharp
public ObservatoryScheduledTestTestMobileReportOutputReference MobileReport { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestMobileReportOutputReference">ObservatoryScheduledTestTestMobileReportOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.region"></a>

```csharp
public ObservatoryScheduledTestTestRegionOutputReference Region { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference">ObservatoryScheduledTestTestRegionOutputReference</a>

---

##### `ScheduleFrequency`<sup>Required</sup> <a name="ScheduleFrequency" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.scheduleFrequency"></a>

```csharp
public string ScheduleFrequency { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestOutputReference.property.internalValue"></a>

```csharp
public ObservatoryScheduledTestTest InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTest">ObservatoryScheduledTestTest</a>

---


### ObservatoryScheduledTestTestRegionOutputReference <a name="ObservatoryScheduledTestTestRegionOutputReference" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ObservatoryScheduledTestTestRegionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegion">ObservatoryScheduledTestTestRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegionOutputReference.property.internalValue"></a>

```csharp
public ObservatoryScheduledTestTestRegion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.observatoryScheduledTest.ObservatoryScheduledTestTestRegion">ObservatoryScheduledTestTestRegion</a>

---



