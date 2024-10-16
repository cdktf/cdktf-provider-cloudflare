# `infrastructureAccessTarget` Submodule <a name="`infrastructureAccessTarget` Submodule" id="@cdktf/provider-cloudflare.infrastructureAccessTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InfrastructureAccessTarget <a name="InfrastructureAccessTarget" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/infrastructure_access_target cloudflare_infrastructure_access_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new InfrastructureAccessTarget(Construct Scope, string Id, InfrastructureAccessTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig">InfrastructureAccessTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig">InfrastructureAccessTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.putIp">PutIp</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIp` <a name="PutIp" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.putIp"></a>

```csharp
private void PutIp(InfrastructureAccessTargetIp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.putIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a InfrastructureAccessTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

InfrastructureAccessTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

InfrastructureAccessTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

InfrastructureAccessTarget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

InfrastructureAccessTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a InfrastructureAccessTarget resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InfrastructureAccessTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InfrastructureAccessTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/infrastructure_access_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the InfrastructureAccessTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.ip">Ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference">InfrastructureAccessTargetIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.ipInput">IpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.ip"></a>

```csharp
public InfrastructureAccessTargetIpOutputReference Ip { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference">InfrastructureAccessTargetIpOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.ipInput"></a>

```csharp
public object IpInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InfrastructureAccessTargetConfig <a name="InfrastructureAccessTargetConfig" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new InfrastructureAccessTargetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Hostname,
    InfrastructureAccessTargetIp Ip
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.hostname">Hostname</a></code> | <code>string</code> | A non-unique field that refers to a target. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.ip">Ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/infrastructure_access_target#account_id InfrastructureAccessTarget#account_id}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

A non-unique field that refers to a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/infrastructure_access_target#hostname InfrastructureAccessTarget#hostname}

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetConfig.property.ip"></a>

```csharp
public InfrastructureAccessTargetIp Ip { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp">InfrastructureAccessTargetIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/infrastructure_access_target#ip InfrastructureAccessTarget#ip}

---

### InfrastructureAccessTargetIp <a name="InfrastructureAccessTargetIp" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new InfrastructureAccessTargetIp {
    InfrastructureAccessTargetIpIpv4 Ipv4 = null,
    InfrastructureAccessTargetIpIpv6 Ipv6 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a></code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a></code> | The target's IPv6 address. |

---

##### `Ipv4`<sup>Optional</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.property.ipv4"></a>

```csharp
public InfrastructureAccessTargetIpIpv4 Ipv4 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/infrastructure_access_target#ipv4 InfrastructureAccessTarget#ipv4}

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIp.property.ipv6"></a>

```csharp
public InfrastructureAccessTargetIpIpv6 Ipv6 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/infrastructure_access_target#ipv6 InfrastructureAccessTarget#ipv6}

---

### InfrastructureAccessTargetIpIpv4 <a name="InfrastructureAccessTargetIpIpv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new InfrastructureAccessTargetIpIpv4 {
    string IpAddr,
    string VirtualNetworkId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.property.ipAddr">IpAddr</a></code> | <code>string</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | The private virtual network identifier for the target. |

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.property.ipAddr"></a>

```csharp
public string IpAddr { get; set; }
```

- *Type:* string

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/infrastructure_access_target#ip_addr InfrastructureAccessTarget#ip_addr}

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/infrastructure_access_target#virtual_network_id InfrastructureAccessTarget#virtual_network_id}

---

### InfrastructureAccessTargetIpIpv6 <a name="InfrastructureAccessTargetIpIpv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new InfrastructureAccessTargetIpIpv6 {
    string IpAddr,
    string VirtualNetworkId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.property.ipAddr">IpAddr</a></code> | <code>string</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | The private virtual network identifier for the target. |

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.property.ipAddr"></a>

```csharp
public string IpAddr { get; set; }
```

- *Type:* string

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/infrastructure_access_target#ip_addr InfrastructureAccessTarget#ip_addr}

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/infrastructure_access_target#virtual_network_id InfrastructureAccessTarget#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### InfrastructureAccessTargetIpIpv4OutputReference <a name="InfrastructureAccessTargetIpIpv4OutputReference" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new InfrastructureAccessTargetIpIpv4OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.ipAddrInput">IpAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.ipAddr">IpAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddrInput`<sup>Optional</sup> <a name="IpAddrInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.ipAddrInput"></a>

```csharp
public string IpAddrInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.ipAddr"></a>

```csharp
public string IpAddr { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### InfrastructureAccessTargetIpIpv6OutputReference <a name="InfrastructureAccessTargetIpIpv6OutputReference" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new InfrastructureAccessTargetIpIpv6OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.ipAddrInput">IpAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.ipAddr">IpAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddrInput`<sup>Optional</sup> <a name="IpAddrInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.ipAddrInput"></a>

```csharp
public string IpAddrInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.ipAddr"></a>

```csharp
public string IpAddr { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### InfrastructureAccessTargetIpOutputReference <a name="InfrastructureAccessTargetIpOutputReference" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new InfrastructureAccessTargetIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv4">PutIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv6">PutIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resetIpv4">ResetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpv4` <a name="PutIpv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv4"></a>

```csharp
private void PutIpv4(InfrastructureAccessTargetIpIpv4 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4">InfrastructureAccessTargetIpIpv4</a>

---

##### `PutIpv6` <a name="PutIpv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv6"></a>

```csharp
private void PutIpv6(InfrastructureAccessTargetIpIpv6 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6">InfrastructureAccessTargetIpIpv6</a>

---

##### `ResetIpv4` <a name="ResetIpv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resetIpv4"></a>

```csharp
private void ResetIpv4()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.resetIpv6"></a>

```csharp
private void ResetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference">InfrastructureAccessTargetIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference">InfrastructureAccessTargetIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv4Input">Ipv4Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv4"></a>

```csharp
public InfrastructureAccessTargetIpIpv4OutputReference Ipv4 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv4OutputReference">InfrastructureAccessTargetIpIpv4OutputReference</a>

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv6"></a>

```csharp
public InfrastructureAccessTargetIpIpv6OutputReference Ipv6 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpIpv6OutputReference">InfrastructureAccessTargetIpIpv6OutputReference</a>

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv4Input"></a>

```csharp
public object Ipv4Input { get; }
```

- *Type:* object

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.ipv6Input"></a>

```csharp
public object Ipv6Input { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.infrastructureAccessTarget.InfrastructureAccessTargetIpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



