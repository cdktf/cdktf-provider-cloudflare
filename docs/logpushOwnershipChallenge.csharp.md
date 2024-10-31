# `logpushOwnershipChallenge` Submodule <a name="`logpushOwnershipChallenge` Submodule" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogpushOwnershipChallenge <a name="LogpushOwnershipChallenge" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/logpush_ownership_challenge cloudflare_logpush_ownership_challenge}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LogpushOwnershipChallenge(Construct Scope, string Id, LogpushOwnershipChallengeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig">LogpushOwnershipChallengeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig">LogpushOwnershipChallengeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogpushOwnershipChallenge resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LogpushOwnershipChallenge.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LogpushOwnershipChallenge.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LogpushOwnershipChallenge.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

LogpushOwnershipChallenge.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LogpushOwnershipChallenge resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LogpushOwnershipChallenge to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LogpushOwnershipChallenge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/logpush_ownership_challenge#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LogpushOwnershipChallenge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.ownershipChallengeFilename">OwnershipChallengeFilename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.destinationConfInput">DestinationConfInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.destinationConf">DestinationConf</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `OwnershipChallengeFilename`<sup>Required</sup> <a name="OwnershipChallengeFilename" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.ownershipChallengeFilename"></a>

```csharp
public string OwnershipChallengeFilename { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DestinationConfInput`<sup>Optional</sup> <a name="DestinationConfInput" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.destinationConfInput"></a>

```csharp
public string DestinationConfInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `DestinationConf`<sup>Required</sup> <a name="DestinationConf" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.destinationConf"></a>

```csharp
public string DestinationConf { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallenge.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LogpushOwnershipChallengeConfig <a name="LogpushOwnershipChallengeConfig" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new LogpushOwnershipChallengeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DestinationConf,
    string AccountId = null,
    string Id = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.destinationConf">DestinationConf</a></code> | <code>string</code> | Uniquely identifies a resource (such as an s3 bucket) where data will be pushed. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/logpush_ownership_challenge#id LogpushOwnershipChallenge#id}. |
| <code><a href="#@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DestinationConf`<sup>Required</sup> <a name="DestinationConf" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.destinationConf"></a>

```csharp
public string DestinationConf { get; set; }
```

- *Type:* string

Uniquely identifies a resource (such as an s3 bucket) where data will be pushed.

Additional configuration parameters supported by the destination may be included. See [Logpush destination documentation](https://developers.cloudflare.com/logs/logpush/logpush-configuration-api/understanding-logpush-api/#destination). **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/logpush_ownership_challenge#destination_conf LogpushOwnershipChallenge#destination_conf}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/logpush_ownership_challenge#account_id LogpushOwnershipChallenge#account_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/logpush_ownership_challenge#id LogpushOwnershipChallenge#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.logpushOwnershipChallenge.LogpushOwnershipChallengeConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. Must provide only one of `account_id`, `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/logpush_ownership_challenge#zone_id LogpushOwnershipChallenge#zone_id}

---



