# `zeroTrustRiskScoringIntegration` Submodule <a name="`zeroTrustRiskScoringIntegration` Submodule" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustRiskScoringIntegration <a name="ZeroTrustRiskScoringIntegration" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_risk_scoring_integration cloudflare_zero_trust_risk_scoring_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustRiskScoringIntegration(Construct Scope, string Id, ZeroTrustRiskScoringIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig">ZeroTrustRiskScoringIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig">ZeroTrustRiskScoringIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.resetActive">ResetActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.resetReferenceId">ResetReferenceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetActive` <a name="ResetActive" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.resetActive"></a>

```csharp
private void ResetActive()
```

##### `ResetReferenceId` <a name="ResetReferenceId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.resetReferenceId"></a>

```csharp
private void ResetReferenceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustRiskScoringIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustRiskScoringIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustRiskScoringIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustRiskScoringIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustRiskScoringIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustRiskScoringIntegration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustRiskScoringIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustRiskScoringIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_risk_scoring_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustRiskScoringIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.accountTag">AccountTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.wellKnownUrl">WellKnownUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.activeInput">ActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.integrationTypeInput">IntegrationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.referenceIdInput">ReferenceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.tenantUrlInput">TenantUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.active">Active</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.integrationType">IntegrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.referenceId">ReferenceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.tenantUrl">TenantUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountTag`<sup>Required</sup> <a name="AccountTag" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.accountTag"></a>

```csharp
public string AccountTag { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WellKnownUrl`<sup>Required</sup> <a name="WellKnownUrl" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.wellKnownUrl"></a>

```csharp
public string WellKnownUrl { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ActiveInput`<sup>Optional</sup> <a name="ActiveInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.activeInput"></a>

```csharp
public object ActiveInput { get; }
```

- *Type:* object

---

##### `IntegrationTypeInput`<sup>Optional</sup> <a name="IntegrationTypeInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.integrationTypeInput"></a>

```csharp
public string IntegrationTypeInput { get; }
```

- *Type:* string

---

##### `ReferenceIdInput`<sup>Optional</sup> <a name="ReferenceIdInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.referenceIdInput"></a>

```csharp
public string ReferenceIdInput { get; }
```

- *Type:* string

---

##### `TenantUrlInput`<sup>Optional</sup> <a name="TenantUrlInput" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.tenantUrlInput"></a>

```csharp
public string TenantUrlInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.active"></a>

```csharp
public object Active { get; }
```

- *Type:* object

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.integrationType"></a>

```csharp
public string IntegrationType { get; }
```

- *Type:* string

---

##### `ReferenceId`<sup>Required</sup> <a name="ReferenceId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.referenceId"></a>

```csharp
public string ReferenceId { get; }
```

- *Type:* string

---

##### `TenantUrl`<sup>Required</sup> <a name="TenantUrl" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.tenantUrl"></a>

```csharp
public string TenantUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustRiskScoringIntegrationConfig <a name="ZeroTrustRiskScoringIntegrationConfig" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustRiskScoringIntegrationConfig {
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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_risk_scoring_integration#account_id ZeroTrustRiskScoringIntegration#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.integrationType">IntegrationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_risk_scoring_integration#integration_type ZeroTrustRiskScoringIntegration#integration_type}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.tenantUrl">TenantUrl</a></code> | <code>string</code> | The base url of the tenant, e.g. "https://tenant.okta.com". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.active">Active</a></code> | <code>object</code> | Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.referenceId">ReferenceId</a></code> | <code>string</code> | A reference id that can be supplied by the client. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_risk_scoring_integration#account_id ZeroTrustRiskScoringIntegration#account_id}.

---

##### `IntegrationType`<sup>Required</sup> <a name="IntegrationType" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.integrationType"></a>

```csharp
public string IntegrationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_risk_scoring_integration#integration_type ZeroTrustRiskScoringIntegration#integration_type}.

---

##### `TenantUrl`<sup>Required</sup> <a name="TenantUrl" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.tenantUrl"></a>

```csharp
public string TenantUrl { get; set; }
```

- *Type:* string

The base url of the tenant, e.g. "https://tenant.okta.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_risk_scoring_integration#tenant_url ZeroTrustRiskScoringIntegration#tenant_url}

---

##### `Active`<sup>Optional</sup> <a name="Active" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.active"></a>

```csharp
public object Active { get; set; }
```

- *Type:* object

Whether this integration is enabled. If disabled, no risk changes will be exported to the third-party.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_risk_scoring_integration#active ZeroTrustRiskScoringIntegration#active}

---

##### `ReferenceId`<sup>Optional</sup> <a name="ReferenceId" id="@cdktf/provider-cloudflare.zeroTrustRiskScoringIntegration.ZeroTrustRiskScoringIntegrationConfig.property.referenceId"></a>

```csharp
public string ReferenceId { get; set; }
```

- *Type:* string

A reference id that can be supplied by the client.

Currently this should be set to the Access-Okta IDP ID (a UUIDv4).
https://developers.cloudflare.com/api/operations/access-identity-providers-get-an-access-identity-provider

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.1.0/docs/resources/zero_trust_risk_scoring_integration#reference_id ZeroTrustRiskScoringIntegration#reference_id}

---



