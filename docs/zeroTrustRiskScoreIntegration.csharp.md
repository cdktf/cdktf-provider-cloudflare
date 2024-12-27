# `zeroTrustRiskScoreIntegration` Submodule <a name="`zeroTrustRiskScoreIntegration` Submodule" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustRiskScoreIntegration <a name="ZeroTrustRiskScoreIntegration" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_risk_score_integration cloudflare_zero_trust_risk_score_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustRiskScoreIntegration(Construct Scope, string Id, ZeroTrustRiskScoreIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig">ZeroTrustRiskScoreIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig">ZeroTrustRiskScoreIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetReferenceId">ResetReferenceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetReferenceId` <a name="ResetReferenceId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.resetReferenceId"></a>

```csharp
private void ResetReferenceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustRiskScoreIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustRiskScoreIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustRiskScoreIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustRiskScoreIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustRiskScoreIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustRiskScoreIntegration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustRiskScoreIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustRiskScoreIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_risk_score_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustRiskScoreIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.wellKnownUrl">WellKnownUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.integrationTypeInput">IntegrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.referenceIdInput">ReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tenantUrlInput">TenantUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.integrationType">IntegrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.referenceId">ReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tenantUrl">TenantUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WellKnownUrl`<sup>Required</sup> <a name="WellKnownUrl" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.wellKnownUrl"></a>

```csharp
public string WellKnownUrl { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `IntegrationTypeInput`<sup>Optional</sup> <a name="IntegrationTypeInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.integrationTypeInput"></a>

```csharp
public string IntegrationTypeInput { get; }
```

- *Type:* string

---

##### `ReferenceIdInput`<sup>Optional</sup> <a name="ReferenceIdInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.referenceIdInput"></a>

```csharp
public string ReferenceIdInput { get; }
```

- *Type:* string

---

##### `TenantUrlInput`<sup>Optional</sup> <a name="TenantUrlInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tenantUrlInput"></a>

```csharp
public string TenantUrlInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.integrationType"></a>

```csharp
public string IntegrationType { get; }
```

- *Type:* string

---

##### `ReferenceId`<sup>Required</sup> <a name="ReferenceId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.referenceId"></a>

```csharp
public string ReferenceId { get; }
```

- *Type:* string

---

##### `TenantUrl`<sup>Required</sup> <a name="TenantUrl" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tenantUrl"></a>

```csharp
public string TenantUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustRiskScoreIntegrationConfig <a name="ZeroTrustRiskScoreIntegrationConfig" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustRiskScoreIntegrationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string IntegrationType,
    string TenantUrl,
    object Active = null,
    string ReferenceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.integrationType">IntegrationType</a></code> | <code>string</code> | The type of integration, e.g. 'Okta'. Full list of allowed values can be found here: https://developers.cloudflare.com/api/operations/dlp-zt-risk-score-integration-create#request-body. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.tenantUrl">TenantUrl</a></code> | <code>string</code> | The base url of the tenant, e.g. 'https://tenant.okta.com'. Must be your Okta Tenant URL and not your custom domain. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.active">Active</a></code> | <code>object</code> | Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.referenceId">ReferenceId</a></code> | <code>string</code> | A reference id that can be supplied by the client. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_risk_score_integration#account_id ZeroTrustRiskScoreIntegration#account_id}

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.integrationType"></a>

```csharp
public string IntegrationType { get; set; }
```

- *Type:* string

The type of integration, e.g. 'Okta'. Full list of allowed values can be found here: https://developers.cloudflare.com/api/operations/dlp-zt-risk-score-integration-create#request-body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_risk_score_integration#integration_type ZeroTrustRiskScoreIntegration#integration_type}

---

##### `TenantUrl`<sup>Required</sup> <a name="TenantUrl" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.tenantUrl"></a>

```csharp
public string TenantUrl { get; set; }
```

- *Type:* string

The base url of the tenant, e.g. 'https://tenant.okta.com'. Must be your Okta Tenant URL and not your custom domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_risk_score_integration#tenant_url ZeroTrustRiskScoreIntegration#tenant_url}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_risk_score_integration#active ZeroTrustRiskScoreIntegration#active}

---

##### `ReferenceId`<sup>Optional</sup> <a name="ReferenceId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoreIntegration.ZeroTrustRiskScoreIntegrationConfig.property.referenceId"></a>

```csharp
public string ReferenceId { get; set; }
```

- *Type:* string

A reference id that can be supplied by the client.

Currently this should be set to the Access-Okta IDP ID (a UUIDv4). If omitted, a random UUIDv4 is used. https://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.1/docs/resources/zero_trust_risk_score_integration#reference_id ZeroTrustRiskScoreIntegration#reference_id}

---



