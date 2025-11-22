# `worker` Submodule <a name="`worker` Submodule" id="@cdktf/provider-cloudflare.worker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Worker <a name="Worker" id="@cdktf/provider-cloudflare.worker.Worker"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker cloudflare_worker}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.Worker.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new Worker(Construct Scope, string Id, WorkerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig">WorkerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.worker.Worker.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.worker.Worker.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.worker.Worker.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerConfig">WorkerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.putObservability">PutObservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.putSubdomain">PutSubdomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.putTailConsumers">PutTailConsumers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.resetLogpush">ResetLogpush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.resetObservability">ResetObservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.resetSubdomain">ResetSubdomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.resetTailConsumers">ResetTailConsumers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.Worker.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.worker.Worker.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.worker.Worker.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.worker.Worker.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.worker.Worker.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.worker.Worker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.worker.Worker.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.worker.Worker.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.worker.Worker.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.worker.Worker.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.worker.Worker.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.worker.Worker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.Worker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.worker.Worker.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.worker.Worker.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.worker.Worker.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.worker.Worker.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.worker.Worker.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.Worker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.worker.Worker.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.worker.Worker.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.worker.Worker.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.worker.Worker.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.worker.Worker.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.worker.Worker.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.worker.Worker.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutObservability` <a name="PutObservability" id="@cdktf/provider-cloudflare.worker.Worker.putObservability"></a>

```csharp
private void PutObservability(WorkerObservability Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.worker.Worker.putObservability.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a>

---

##### `PutSubdomain` <a name="PutSubdomain" id="@cdktf/provider-cloudflare.worker.Worker.putSubdomain"></a>

```csharp
private void PutSubdomain(WorkerSubdomain Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.worker.Worker.putSubdomain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a>

---

##### `PutTailConsumers` <a name="PutTailConsumers" id="@cdktf/provider-cloudflare.worker.Worker.putTailConsumers"></a>

```csharp
private void PutTailConsumers(IResolvable|WorkerTailConsumers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.worker.Worker.putTailConsumers.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>[]

---

##### `ResetLogpush` <a name="ResetLogpush" id="@cdktf/provider-cloudflare.worker.Worker.resetLogpush"></a>

```csharp
private void ResetLogpush()
```

##### `ResetObservability` <a name="ResetObservability" id="@cdktf/provider-cloudflare.worker.Worker.resetObservability"></a>

```csharp
private void ResetObservability()
```

##### `ResetSubdomain` <a name="ResetSubdomain" id="@cdktf/provider-cloudflare.worker.Worker.resetSubdomain"></a>

```csharp
private void ResetSubdomain()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-cloudflare.worker.Worker.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTailConsumers` <a name="ResetTailConsumers" id="@cdktf/provider-cloudflare.worker.Worker.resetTailConsumers"></a>

```csharp
private void ResetTailConsumers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Worker resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.worker.Worker.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

Worker.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.worker.Worker.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.worker.Worker.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

Worker.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.worker.Worker.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.worker.Worker.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

Worker.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.worker.Worker.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.worker.Worker.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

Worker.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Worker resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.worker.Worker.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.worker.Worker.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Worker to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.worker.Worker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Worker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.worker.Worker.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Worker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.observability">Observability</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference">WorkerObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.references">References</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference">WorkerReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.subdomain">Subdomain</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference">WorkerSubdomainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.tailConsumers">TailConsumers</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersList">WorkerTailConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.updatedOn">UpdatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.logpushInput">LogpushInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.observabilityInput">ObservabilityInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.subdomainInput">SubdomainInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.tailConsumersInput">TailConsumersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.logpush">Logpush</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.worker.Worker.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.worker.Worker.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.Worker.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.worker.Worker.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.worker.Worker.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.worker.Worker.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.worker.Worker.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.worker.Worker.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.worker.Worker.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.worker.Worker.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.worker.Worker.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.worker.Worker.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.worker.Worker.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.worker.Worker.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.worker.Worker.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.worker.Worker.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Observability`<sup>Required</sup> <a name="Observability" id="@cdktf/provider-cloudflare.worker.Worker.property.observability"></a>

```csharp
public WorkerObservabilityOutputReference Observability { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference">WorkerObservabilityOutputReference</a>

---

##### `References`<sup>Required</sup> <a name="References" id="@cdktf/provider-cloudflare.worker.Worker.property.references"></a>

```csharp
public WorkerReferencesOutputReference References { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference">WorkerReferencesOutputReference</a>

---

##### `Subdomain`<sup>Required</sup> <a name="Subdomain" id="@cdktf/provider-cloudflare.worker.Worker.property.subdomain"></a>

```csharp
public WorkerSubdomainOutputReference Subdomain { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference">WorkerSubdomainOutputReference</a>

---

##### `TailConsumers`<sup>Required</sup> <a name="TailConsumers" id="@cdktf/provider-cloudflare.worker.Worker.property.tailConsumers"></a>

```csharp
public WorkerTailConsumersList TailConsumers { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersList">WorkerTailConsumersList</a>

---

##### `UpdatedOn`<sup>Required</sup> <a name="UpdatedOn" id="@cdktf/provider-cloudflare.worker.Worker.property.updatedOn"></a>

```csharp
public string UpdatedOn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.worker.Worker.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `LogpushInput`<sup>Optional</sup> <a name="LogpushInput" id="@cdktf/provider-cloudflare.worker.Worker.property.logpushInput"></a>

```csharp
public bool|IResolvable LogpushInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.worker.Worker.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ObservabilityInput`<sup>Optional</sup> <a name="ObservabilityInput" id="@cdktf/provider-cloudflare.worker.Worker.property.observabilityInput"></a>

```csharp
public IResolvable|WorkerObservability ObservabilityInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a>

---

##### `SubdomainInput`<sup>Optional</sup> <a name="SubdomainInput" id="@cdktf/provider-cloudflare.worker.Worker.property.subdomainInput"></a>

```csharp
public IResolvable|WorkerSubdomain SubdomainInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-cloudflare.worker.Worker.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TailConsumersInput`<sup>Optional</sup> <a name="TailConsumersInput" id="@cdktf/provider-cloudflare.worker.Worker.property.tailConsumersInput"></a>

```csharp
public IResolvable|WorkerTailConsumers[] TailConsumersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.worker.Worker.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Logpush`<sup>Required</sup> <a name="Logpush" id="@cdktf/provider-cloudflare.worker.Worker.property.logpush"></a>

```csharp
public bool|IResolvable Logpush { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.worker.Worker.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-cloudflare.worker.Worker.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.Worker.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.worker.Worker.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkerConfig <a name="WorkerConfig" id="@cdktf/provider-cloudflare.worker.WorkerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.worker.WorkerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Name,
    bool|IResolvable Logpush = null,
    WorkerObservability Observability = null,
    WorkerSubdomain Subdomain = null,
    string[] Tags = null,
    IResolvable|WorkerTailConsumers[] TailConsumers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.name">Name</a></code> | <code>string</code> | Name of the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.logpush">Logpush</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether logpush is enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.observability">Observability</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a></code> | Observability settings for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.subdomain">Subdomain</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a></code> | Subdomain settings for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.tags">Tags</a></code> | <code>string[]</code> | Tags associated with the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerConfig.property.tailConsumers">TailConsumers</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>[]</code> | Other Workers that should consume logs from the Worker. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#account_id Worker#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#name Worker#name}

---

##### `Logpush`<sup>Optional</sup> <a name="Logpush" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.logpush"></a>

```csharp
public bool|IResolvable Logpush { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether logpush is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#logpush Worker#logpush}

---

##### `Observability`<sup>Optional</sup> <a name="Observability" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.observability"></a>

```csharp
public WorkerObservability Observability { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a>

Observability settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#observability Worker#observability}

---

##### `Subdomain`<sup>Optional</sup> <a name="Subdomain" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.subdomain"></a>

```csharp
public WorkerSubdomain Subdomain { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a>

Subdomain settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#subdomain Worker#subdomain}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Tags associated with the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#tags Worker#tags}

---

##### `TailConsumers`<sup>Optional</sup> <a name="TailConsumers" id="@cdktf/provider-cloudflare.worker.WorkerConfig.property.tailConsumers"></a>

```csharp
public IResolvable|WorkerTailConsumers[] TailConsumers { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>[]

Other Workers that should consume logs from the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#tail_consumers Worker#tail_consumers}

---

### WorkerObservability <a name="WorkerObservability" id="@cdktf/provider-cloudflare.worker.WorkerObservability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.worker.WorkerObservability.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerObservability {
    bool|IResolvable Enabled = null,
    double HeadSamplingRate = null,
    WorkerObservabilityLogs Logs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservability.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether observability is enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservability.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservability.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a></code> | Log settings for the Worker. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.worker.WorkerObservability.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether observability is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#enabled Worker#enabled}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktf/provider-cloudflare.worker.WorkerObservability.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; set; }
```

- *Type:* double

The sampling rate for observability. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `Logs`<sup>Optional</sup> <a name="Logs" id="@cdktf/provider-cloudflare.worker.WorkerObservability.property.logs"></a>

```csharp
public WorkerObservabilityLogs Logs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a>

Log settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#logs Worker#logs}

---

### WorkerObservabilityLogs <a name="WorkerObservabilityLogs" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerObservabilityLogs {
    bool|IResolvable Enabled = null,
    double HeadSamplingRate = null,
    bool|IResolvable InvocationLogs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether logs are enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs.property.invocationLogs">InvocationLogs</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether logs are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#enabled Worker#enabled}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; set; }
```

- *Type:* double

The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#head_sampling_rate Worker#head_sampling_rate}

---

##### `InvocationLogs`<sup>Optional</sup> <a name="InvocationLogs" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs.property.invocationLogs"></a>

```csharp
public bool|IResolvable InvocationLogs { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#invocation_logs Worker#invocation_logs}

---

### WorkerReferences <a name="WorkerReferences" id="@cdktf/provider-cloudflare.worker.WorkerReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.worker.WorkerReferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferences {

};
```


### WorkerReferencesDispatchNamespaceOutbounds <a name="WorkerReferencesDispatchNamespaceOutbounds" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutbounds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutbounds.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesDispatchNamespaceOutbounds {

};
```


### WorkerReferencesDomains <a name="WorkerReferencesDomains" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesDomains {

};
```


### WorkerReferencesDurableObjects <a name="WorkerReferencesDurableObjects" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesDurableObjects {

};
```


### WorkerReferencesQueues <a name="WorkerReferencesQueues" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueues.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesQueues {

};
```


### WorkerReferencesWorkers <a name="WorkerReferencesWorkers" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesWorkers {

};
```


### WorkerSubdomain <a name="WorkerSubdomain" id="@cdktf/provider-cloudflare.worker.WorkerSubdomain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.worker.WorkerSubdomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerSubdomain {
    bool|IResolvable Enabled = null,
    bool|IResolvable PreviewsEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomain.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether the *.workers.dev subdomain is enabled for the Worker. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomain.property.previewsEnabled">PreviewsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.worker.WorkerSubdomain.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether the *.workers.dev subdomain is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#enabled Worker#enabled}

---

##### `PreviewsEnabled`<sup>Optional</sup> <a name="PreviewsEnabled" id="@cdktf/provider-cloudflare.worker.WorkerSubdomain.property.previewsEnabled"></a>

```csharp
public bool|IResolvable PreviewsEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Whether [preview URLs](https://developers.cloudflare.com/workers/configuration/previews/) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#previews_enabled Worker#previews_enabled}

---

### WorkerTailConsumers <a name="WorkerTailConsumers" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerTailConsumers {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumers.property.name">Name</a></code> | <code>string</code> | Name of the consumer Worker. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumers.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the consumer Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/worker#name Worker#name}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkerObservabilityLogsOutputReference <a name="WorkerObservabilityLogsOutputReference" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerObservabilityLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetInvocationLogs">ResetInvocationLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetHeadSamplingRate"></a>

```csharp
private void ResetHeadSamplingRate()
```

##### `ResetInvocationLogs` <a name="ResetInvocationLogs" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.resetInvocationLogs"></a>

```csharp
private void ResetInvocationLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.invocationLogsInput">InvocationLogsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.invocationLogs">InvocationLogs</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.headSamplingRateInput"></a>

```csharp
public double HeadSamplingRateInput { get; }
```

- *Type:* double

---

##### `InvocationLogsInput`<sup>Optional</sup> <a name="InvocationLogsInput" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.invocationLogsInput"></a>

```csharp
public bool|IResolvable InvocationLogsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; }
```

- *Type:* double

---

##### `InvocationLogs`<sup>Required</sup> <a name="InvocationLogs" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.invocationLogs"></a>

```csharp
public bool|IResolvable InvocationLogs { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerObservabilityLogs InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a>

---


### WorkerObservabilityOutputReference <a name="WorkerObservabilityOutputReference" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerObservabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.putLogs">PutLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetLogs">ResetLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogs` <a name="PutLogs" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.putLogs"></a>

```csharp
private void PutLogs(WorkerObservabilityLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetHeadSamplingRate"></a>

```csharp
private void ResetHeadSamplingRate()
```

##### `ResetLogs` <a name="ResetLogs" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.resetLogs"></a>

```csharp
private void ResetLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.logs">Logs</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference">WorkerObservabilityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.logsInput">LogsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.logs"></a>

```csharp
public WorkerObservabilityLogsOutputReference Logs { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogsOutputReference">WorkerObservabilityLogsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.headSamplingRateInput"></a>

```csharp
public double HeadSamplingRateInput { get; }
```

- *Type:* double

---

##### `LogsInput`<sup>Optional</sup> <a name="LogsInput" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.logsInput"></a>

```csharp
public IResolvable|WorkerObservabilityLogs LogsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.worker.WorkerObservabilityLogs">WorkerObservabilityLogs</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.worker.WorkerObservabilityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerObservability InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.worker.WorkerObservability">WorkerObservability</a>

---


### WorkerReferencesDispatchNamespaceOutboundsList <a name="WorkerReferencesDispatchNamespaceOutboundsList" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesDispatchNamespaceOutboundsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.get"></a>

```csharp
private WorkerReferencesDispatchNamespaceOutboundsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WorkerReferencesDispatchNamespaceOutboundsOutputReference <a name="WorkerReferencesDispatchNamespaceOutboundsOutputReference" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesDispatchNamespaceOutboundsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.workerId">WorkerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.workerName">WorkerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutbounds">WorkerReferencesDispatchNamespaceOutbounds</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.workerId"></a>

```csharp
public string WorkerId { get; }
```

- *Type:* string

---

##### `WorkerName`<sup>Required</sup> <a name="WorkerName" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.workerName"></a>

```csharp
public string WorkerName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsOutputReference.property.internalValue"></a>

```csharp
public WorkerReferencesDispatchNamespaceOutbounds InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutbounds">WorkerReferencesDispatchNamespaceOutbounds</a>

---


### WorkerReferencesDomainsList <a name="WorkerReferencesDomainsList" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesDomainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.get"></a>

```csharp
private WorkerReferencesDomainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WorkerReferencesDomainsOutputReference <a name="WorkerReferencesDomainsOutputReference" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.zoneName">ZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomains">WorkerReferencesDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.zoneName"></a>

```csharp
public string ZoneName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsOutputReference.property.internalValue"></a>

```csharp
public WorkerReferencesDomains InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomains">WorkerReferencesDomains</a>

---


### WorkerReferencesDurableObjectsList <a name="WorkerReferencesDurableObjectsList" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesDurableObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.get"></a>

```csharp
private WorkerReferencesDurableObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WorkerReferencesDurableObjectsOutputReference <a name="WorkerReferencesDurableObjectsOutputReference" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesDurableObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.namespaceName">NamespaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.workerId">WorkerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.workerName">WorkerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjects">WorkerReferencesDurableObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.namespaceName"></a>

```csharp
public string NamespaceName { get; }
```

- *Type:* string

---

##### `WorkerId`<sup>Required</sup> <a name="WorkerId" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.workerId"></a>

```csharp
public string WorkerId { get; }
```

- *Type:* string

---

##### `WorkerName`<sup>Required</sup> <a name="WorkerName" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.workerName"></a>

```csharp
public string WorkerName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsOutputReference.property.internalValue"></a>

```csharp
public WorkerReferencesDurableObjects InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjects">WorkerReferencesDurableObjects</a>

---


### WorkerReferencesOutputReference <a name="WorkerReferencesOutputReference" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.dispatchNamespaceOutbounds">DispatchNamespaceOutbounds</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList">WorkerReferencesDispatchNamespaceOutboundsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.domains">Domains</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList">WorkerReferencesDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.durableObjects">DurableObjects</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList">WorkerReferencesDurableObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.queues">Queues</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList">WorkerReferencesQueuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.workers">Workers</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList">WorkerReferencesWorkersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferences">WorkerReferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DispatchNamespaceOutbounds`<sup>Required</sup> <a name="DispatchNamespaceOutbounds" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.dispatchNamespaceOutbounds"></a>

```csharp
public WorkerReferencesDispatchNamespaceOutboundsList DispatchNamespaceOutbounds { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDispatchNamespaceOutboundsList">WorkerReferencesDispatchNamespaceOutboundsList</a>

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.domains"></a>

```csharp
public WorkerReferencesDomainsList Domains { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDomainsList">WorkerReferencesDomainsList</a>

---

##### `DurableObjects`<sup>Required</sup> <a name="DurableObjects" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.durableObjects"></a>

```csharp
public WorkerReferencesDurableObjectsList DurableObjects { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesDurableObjectsList">WorkerReferencesDurableObjectsList</a>

---

##### `Queues`<sup>Required</sup> <a name="Queues" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.queues"></a>

```csharp
public WorkerReferencesQueuesList Queues { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList">WorkerReferencesQueuesList</a>

---

##### `Workers`<sup>Required</sup> <a name="Workers" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.workers"></a>

```csharp
public WorkerReferencesWorkersList Workers { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList">WorkerReferencesWorkersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.worker.WorkerReferencesOutputReference.property.internalValue"></a>

```csharp
public WorkerReferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerReferences">WorkerReferences</a>

---


### WorkerReferencesQueuesList <a name="WorkerReferencesQueuesList" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesQueuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.get"></a>

```csharp
private WorkerReferencesQueuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WorkerReferencesQueuesOutputReference <a name="WorkerReferencesQueuesOutputReference" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesQueuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueConsumerId">QueueConsumerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueId">QueueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueName">QueueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueues">WorkerReferencesQueues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueueConsumerId`<sup>Required</sup> <a name="QueueConsumerId" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueConsumerId"></a>

```csharp
public string QueueConsumerId { get; }
```

- *Type:* string

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueId"></a>

```csharp
public string QueueId { get; }
```

- *Type:* string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.queueName"></a>

```csharp
public string QueueName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.worker.WorkerReferencesQueuesOutputReference.property.internalValue"></a>

```csharp
public WorkerReferencesQueues InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesQueues">WorkerReferencesQueues</a>

---


### WorkerReferencesWorkersList <a name="WorkerReferencesWorkersList" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesWorkersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.get"></a>

```csharp
private WorkerReferencesWorkersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WorkerReferencesWorkersOutputReference <a name="WorkerReferencesWorkersOutputReference" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerReferencesWorkersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkers">WorkerReferencesWorkers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.worker.WorkerReferencesWorkersOutputReference.property.internalValue"></a>

```csharp
public WorkerReferencesWorkers InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.worker.WorkerReferencesWorkers">WorkerReferencesWorkers</a>

---


### WorkerSubdomainOutputReference <a name="WorkerSubdomainOutputReference" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerSubdomainOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.resetPreviewsEnabled">ResetPreviewsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetPreviewsEnabled` <a name="ResetPreviewsEnabled" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.resetPreviewsEnabled"></a>

```csharp
private void ResetPreviewsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewsEnabledInput">PreviewsEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewsEnabled">PreviewsEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PreviewsEnabledInput`<sup>Optional</sup> <a name="PreviewsEnabledInput" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewsEnabledInput"></a>

```csharp
public bool|IResolvable PreviewsEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PreviewsEnabled`<sup>Required</sup> <a name="PreviewsEnabled" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.previewsEnabled"></a>

```csharp
public bool|IResolvable PreviewsEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.worker.WorkerSubdomainOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerSubdomain InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.worker.WorkerSubdomain">WorkerSubdomain</a>

---


### WorkerTailConsumersList <a name="WorkerTailConsumersList" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerTailConsumersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.get"></a>

```csharp
private WorkerTailConsumersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersList.property.internalValue"></a>

```csharp
public IResolvable|WorkerTailConsumers[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>[]

---


### WorkerTailConsumersOutputReference <a name="WorkerTailConsumersOutputReference" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new WorkerTailConsumersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.worker.WorkerTailConsumersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkerTailConsumers InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.worker.WorkerTailConsumers">WorkerTailConsumers</a>

---



