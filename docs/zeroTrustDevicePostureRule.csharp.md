# `zeroTrustDevicePostureRule` Submodule <a name="`zeroTrustDevicePostureRule` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDevicePostureRule <a name="ZeroTrustDevicePostureRule" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule cloudflare_zero_trust_device_posture_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDevicePostureRule(Construct Scope, string Id, ZeroTrustDevicePostureRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig">ZeroTrustDevicePostureRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig">ZeroTrustDevicePostureRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInput` <a name="PutInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.putInput"></a>

```csharp
private void PutInput(ZeroTrustDevicePostureRuleInput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.putInput.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.putMatch"></a>

```csharp
private void PutMatch(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.putMatch.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpiration` <a name="ResetExpiration" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetExpiration"></a>

```csharp
private void ResetExpiration()
```

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetMatch"></a>

```csharp
private void ResetMatch()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDevicePostureRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDevicePostureRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDevicePostureRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDevicePostureRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustDevicePostureRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDevicePostureRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDevicePostureRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDevicePostureRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.input">Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference">ZeroTrustDevicePostureRuleInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList">ZeroTrustDevicePostureRuleMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.expirationInput">ExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.inputInput">InputInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.matchInput">MatchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.expiration">Expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.input"></a>

```csharp
public ZeroTrustDevicePostureRuleInputOutputReference Input { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference">ZeroTrustDevicePostureRuleInputOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.match"></a>

```csharp
public ZeroTrustDevicePostureRuleMatchList Match { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList">ZeroTrustDevicePostureRuleMatchList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.expirationInput"></a>

```csharp
public string ExpirationInput { get; }
```

- *Type:* string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.inputInput"></a>

```csharp
public object InputInput { get; }
```

- *Type:* object

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.matchInput"></a>

```csharp
public object MatchInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.expiration"></a>

```csharp
public string Expiration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDevicePostureRuleConfig <a name="ZeroTrustDevicePostureRuleConfig" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDevicePostureRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Name,
    string Type,
    string Description = null,
    string Expiration = null,
    ZeroTrustDevicePostureRuleInput Input = null,
    object Match = null,
    string Schedule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#account_id ZeroTrustDevicePostureRule#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the device posture rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.type">Type</a></code> | <code>string</code> | The type of device posture rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.description">Description</a></code> | <code>string</code> | The description of the device posture rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.expiration">Expiration</a></code> | <code>string</code> | Sets the expiration time for a posture check result. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.input">Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a></code> | The value to be checked against. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.match">Match</a></code> | <code>object</code> | The conditions that the client must match to run the rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.schedule">Schedule</a></code> | <code>string</code> | Polling frequency for the WARP client posture check. Default: `5m` (poll every five minutes). Minimum: `1m`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#account_id ZeroTrustDevicePostureRule#account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the device posture rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#name ZeroTrustDevicePostureRule#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of device posture rule.

Available values: "file", "application", "tanium", "gateway", "warp", "disk_encryption", "serial_number", "sentinelone", "carbonblack", "firewall", "os_version", "domain_joined", "client_certificate", "client_certificate_v2", "unique_client_id", "kolide", "tanium_s2s", "crowdstrike_s2s", "intune", "workspace_one", "sentinelone_s2s", "custom_s2s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#type ZeroTrustDevicePostureRule#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the device posture rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#description ZeroTrustDevicePostureRule#description}

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.expiration"></a>

```csharp
public string Expiration { get; set; }
```

- *Type:* string

Sets the expiration time for a posture check result.

If empty, the result remains valid until it is overwritten by new data from the WARP client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#expiration ZeroTrustDevicePostureRule#expiration}

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.input"></a>

```csharp
public ZeroTrustDevicePostureRuleInput Input { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput">ZeroTrustDevicePostureRuleInput</a>

The value to be checked against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#input ZeroTrustDevicePostureRule#input}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.match"></a>

```csharp
public object Match { get; set; }
```

- *Type:* object

The conditions that the client must match to run the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#match ZeroTrustDevicePostureRule#match}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleConfig.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Polling frequency for the WARP client posture check. Default: `5m` (poll every five minutes). Minimum: `1m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#schedule ZeroTrustDevicePostureRule#schedule}

---

### ZeroTrustDevicePostureRuleInput <a name="ZeroTrustDevicePostureRuleInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDevicePostureRuleInput {
    double ActiveThreats = null,
    string CertificateId = null,
    string[] CheckDisks = null,
    object CheckPrivateKey = null,
    string Cn = null,
    string ComplianceStatus = null,
    string ConnectionId = null,
    string CountOperator = null,
    string Domain = null,
    string EidLastSeen = null,
    object Enabled = null,
    object Exists = null,
    string[] ExtendedKeyUsage = null,
    string Id = null,
    object Infected = null,
    object IsActive = null,
    string IssueCount = null,
    string LastSeen = null,
    ZeroTrustDevicePostureRuleInputLocations Locations = null,
    string NetworkStatus = null,
    string OperatingSystem = null,
    string OperationalState = null,
    string Operator = null,
    string Os = null,
    string OsDistroName = null,
    string OsDistroRevision = null,
    string OsVersionExtra = null,
    string Overall = null,
    string Path = null,
    object RequireAll = null,
    string RiskLevel = null,
    double Score = null,
    string ScoreOperator = null,
    string SensorConfig = null,
    string Sha256 = null,
    string State = null,
    string[] SubjectAlternativeNames = null,
    string Thumbprint = null,
    double TotalScore = null,
    string Version = null,
    string VersionOperator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.activeThreats">ActiveThreats</a></code> | <code>double</code> | The Number of active threats. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.certificateId">CertificateId</a></code> | <code>string</code> | UUID of Cloudflare managed certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.checkDisks">CheckDisks</a></code> | <code>string[]</code> | List of volume names to be checked for encryption. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.checkPrivateKey">CheckPrivateKey</a></code> | <code>object</code> | Confirm the certificate was not imported from another device. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.cn">Cn</a></code> | <code>string</code> | Common Name that is protected by the certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.complianceStatus">ComplianceStatus</a></code> | <code>string</code> | Compliance Status. Available values: "compliant", "noncompliant", "unknown", "notapplicable", "ingraceperiod", "error". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.connectionId">ConnectionId</a></code> | <code>string</code> | Posture Integration ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.countOperator">CountOperator</a></code> | <code>string</code> | Count Operator. Available values: "<", "<=", ">", ">=", "==". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.domain">Domain</a></code> | <code>string</code> | Domain. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.eidLastSeen">EidLastSeen</a></code> | <code>string</code> | For more details on eid last seen, refer to the Tanium documentation. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.enabled">Enabled</a></code> | <code>object</code> | Enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.exists">Exists</a></code> | <code>object</code> | Whether or not file exists. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code>string[]</code> | List of values indicating purposes for which the certificate public key can be used. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.id">Id</a></code> | <code>string</code> | List ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.infected">Infected</a></code> | <code>object</code> | Whether device is infected. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.isActive">IsActive</a></code> | <code>object</code> | Whether device is active. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.issueCount">IssueCount</a></code> | <code>string</code> | The Number of Issues. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.lastSeen">LastSeen</a></code> | <code>string</code> | For more details on last seen, please refer to the Crowdstrike documentation. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations">ZeroTrustDevicePostureRuleInputLocations</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#locations ZeroTrustDevicePostureRule#locations}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.networkStatus">NetworkStatus</a></code> | <code>string</code> | Network status of device. Available values: "connected", "disconnected", "disconnecting", "connecting". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | Operating system. Available values: "windows", "linux", "mac", "android", "ios", "chromeos". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.operationalState">OperationalState</a></code> | <code>string</code> | Agent operational state. Available values: "na", "partially_disabled", "auto_fully_disabled", "fully_disabled", "auto_partially_disabled", "disabled_error", "db_corruption". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.operator">Operator</a></code> | <code>string</code> | Operator. Available values: "<", "<=", ">", ">=", "==". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.os">Os</a></code> | <code>string</code> | Os Version. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.osDistroName">OsDistroName</a></code> | <code>string</code> | Operating System Distribution Name (linux only). |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.osDistroRevision">OsDistroRevision</a></code> | <code>string</code> | Version of OS Distribution (linux only). |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.osVersionExtra">OsVersionExtra</a></code> | <code>string</code> | Additional version data. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.overall">Overall</a></code> | <code>string</code> | Overall. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.path">Path</a></code> | <code>string</code> | File path. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.requireAll">RequireAll</a></code> | <code>object</code> | Whether to check all disks for encryption. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.riskLevel">RiskLevel</a></code> | <code>string</code> | For more details on risk level, refer to the Tanium documentation. Available values: "low", "medium", "high", "critical". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.score">Score</a></code> | <code>double</code> | A value between 0-100 assigned to devices set by the 3rd party posture provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.scoreOperator">ScoreOperator</a></code> | <code>string</code> | Score Operator. Available values: "<", "<=", ">", ">=", "==". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.sensorConfig">SensorConfig</a></code> | <code>string</code> | SensorConfig. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.sha256">Sha256</a></code> | <code>string</code> | SHA-256. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.state">State</a></code> | <code>string</code> | For more details on state, please refer to the Crowdstrike documentation. Available values: "online", "offline", "unknown". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>string[]</code> | List of certificate Subject Alternative Names. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.thumbprint">Thumbprint</a></code> | <code>string</code> | Signing certificate thumbprint. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.totalScore">TotalScore</a></code> | <code>double</code> | For more details on total score, refer to the Tanium documentation. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.version">Version</a></code> | <code>string</code> | Version of OS. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.versionOperator">VersionOperator</a></code> | <code>string</code> | Version Operator. Available values: "<", "<=", ">", ">=", "==". |

---

##### `ActiveThreats`<sup>Optional</sup> <a name="ActiveThreats" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.activeThreats"></a>

```csharp
public double ActiveThreats { get; set; }
```

- *Type:* double

The Number of active threats.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#active_threats ZeroTrustDevicePostureRule#active_threats}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.certificateId"></a>

```csharp
public string CertificateId { get; set; }
```

- *Type:* string

UUID of Cloudflare managed certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#certificate_id ZeroTrustDevicePostureRule#certificate_id}

---

##### `CheckDisks`<sup>Optional</sup> <a name="CheckDisks" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.checkDisks"></a>

```csharp
public string[] CheckDisks { get; set; }
```

- *Type:* string[]

List of volume names to be checked for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#check_disks ZeroTrustDevicePostureRule#check_disks}

---

##### `CheckPrivateKey`<sup>Optional</sup> <a name="CheckPrivateKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.checkPrivateKey"></a>

```csharp
public object CheckPrivateKey { get; set; }
```

- *Type:* object

Confirm the certificate was not imported from another device.

We recommend keeping this enabled unless the certificate was deployed without a private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#check_private_key ZeroTrustDevicePostureRule#check_private_key}

---

##### `Cn`<sup>Optional</sup> <a name="Cn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.cn"></a>

```csharp
public string Cn { get; set; }
```

- *Type:* string

Common Name that is protected by the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#cn ZeroTrustDevicePostureRule#cn}

---

##### `ComplianceStatus`<sup>Optional</sup> <a name="ComplianceStatus" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.complianceStatus"></a>

```csharp
public string ComplianceStatus { get; set; }
```

- *Type:* string

Compliance Status. Available values: "compliant", "noncompliant", "unknown", "notapplicable", "ingraceperiod", "error".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#compliance_status ZeroTrustDevicePostureRule#compliance_status}

---

##### `ConnectionId`<sup>Optional</sup> <a name="ConnectionId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

Posture Integration ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#connection_id ZeroTrustDevicePostureRule#connection_id}

---

##### `CountOperator`<sup>Optional</sup> <a name="CountOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.countOperator"></a>

```csharp
public string CountOperator { get; set; }
```

- *Type:* string

Count Operator. Available values: "<", "<=", ">", ">=", "==".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#count_operator ZeroTrustDevicePostureRule#count_operator}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#domain ZeroTrustDevicePostureRule#domain}

---

##### `EidLastSeen`<sup>Optional</sup> <a name="EidLastSeen" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.eidLastSeen"></a>

```csharp
public string EidLastSeen { get; set; }
```

- *Type:* string

For more details on eid last seen, refer to the Tanium documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#eid_last_seen ZeroTrustDevicePostureRule#eid_last_seen}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#enabled ZeroTrustDevicePostureRule#enabled}

---

##### `Exists`<sup>Optional</sup> <a name="Exists" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.exists"></a>

```csharp
public object Exists { get; set; }
```

- *Type:* object

Whether or not file exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#exists ZeroTrustDevicePostureRule#exists}

---

##### `ExtendedKeyUsage`<sup>Optional</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.extendedKeyUsage"></a>

```csharp
public string[] ExtendedKeyUsage { get; set; }
```

- *Type:* string[]

List of values indicating purposes for which the certificate public key can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#extended_key_usage ZeroTrustDevicePostureRule#extended_key_usage}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

List ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#id ZeroTrustDevicePostureRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Infected`<sup>Optional</sup> <a name="Infected" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.infected"></a>

```csharp
public object Infected { get; set; }
```

- *Type:* object

Whether device is infected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#infected ZeroTrustDevicePostureRule#infected}

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.isActive"></a>

```csharp
public object IsActive { get; set; }
```

- *Type:* object

Whether device is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#is_active ZeroTrustDevicePostureRule#is_active}

---

##### `IssueCount`<sup>Optional</sup> <a name="IssueCount" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.issueCount"></a>

```csharp
public string IssueCount { get; set; }
```

- *Type:* string

The Number of Issues.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#issue_count ZeroTrustDevicePostureRule#issue_count}

---

##### `LastSeen`<sup>Optional</sup> <a name="LastSeen" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.lastSeen"></a>

```csharp
public string LastSeen { get; set; }
```

- *Type:* string

For more details on last seen, please refer to the Crowdstrike documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#last_seen ZeroTrustDevicePostureRule#last_seen}

---

##### `Locations`<sup>Optional</sup> <a name="Locations" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.locations"></a>

```csharp
public ZeroTrustDevicePostureRuleInputLocations Locations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations">ZeroTrustDevicePostureRuleInputLocations</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#locations ZeroTrustDevicePostureRule#locations}.

---

##### `NetworkStatus`<sup>Optional</sup> <a name="NetworkStatus" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.networkStatus"></a>

```csharp
public string NetworkStatus { get; set; }
```

- *Type:* string

Network status of device. Available values: "connected", "disconnected", "disconnecting", "connecting".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#network_status ZeroTrustDevicePostureRule#network_status}

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; set; }
```

- *Type:* string

Operating system. Available values: "windows", "linux", "mac", "android", "ios", "chromeos".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#operating_system ZeroTrustDevicePostureRule#operating_system}

---

##### `OperationalState`<sup>Optional</sup> <a name="OperationalState" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.operationalState"></a>

```csharp
public string OperationalState { get; set; }
```

- *Type:* string

Agent operational state. Available values: "na", "partially_disabled", "auto_fully_disabled", "fully_disabled", "auto_partially_disabled", "disabled_error", "db_corruption".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#operational_state ZeroTrustDevicePostureRule#operational_state}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Operator. Available values: "<", "<=", ">", ">=", "==".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#operator ZeroTrustDevicePostureRule#operator}

---

##### `Os`<sup>Optional</sup> <a name="Os" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.os"></a>

```csharp
public string Os { get; set; }
```

- *Type:* string

Os Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#os ZeroTrustDevicePostureRule#os}

---

##### `OsDistroName`<sup>Optional</sup> <a name="OsDistroName" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.osDistroName"></a>

```csharp
public string OsDistroName { get; set; }
```

- *Type:* string

Operating System Distribution Name (linux only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#os_distro_name ZeroTrustDevicePostureRule#os_distro_name}

---

##### `OsDistroRevision`<sup>Optional</sup> <a name="OsDistroRevision" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.osDistroRevision"></a>

```csharp
public string OsDistroRevision { get; set; }
```

- *Type:* string

Version of OS Distribution (linux only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#os_distro_revision ZeroTrustDevicePostureRule#os_distro_revision}

---

##### `OsVersionExtra`<sup>Optional</sup> <a name="OsVersionExtra" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.osVersionExtra"></a>

```csharp
public string OsVersionExtra { get; set; }
```

- *Type:* string

Additional version data.

For Mac or iOS, the Product Version Extra. For Linux, the kernel release version. (Mac, iOS, and Linux only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#os_version_extra ZeroTrustDevicePostureRule#os_version_extra}

---

##### `Overall`<sup>Optional</sup> <a name="Overall" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.overall"></a>

```csharp
public string Overall { get; set; }
```

- *Type:* string

Overall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#overall ZeroTrustDevicePostureRule#overall}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

File path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#path ZeroTrustDevicePostureRule#path}

---

##### `RequireAll`<sup>Optional</sup> <a name="RequireAll" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.requireAll"></a>

```csharp
public object RequireAll { get; set; }
```

- *Type:* object

Whether to check all disks for encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#require_all ZeroTrustDevicePostureRule#require_all}

---

##### `RiskLevel`<sup>Optional</sup> <a name="RiskLevel" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.riskLevel"></a>

```csharp
public string RiskLevel { get; set; }
```

- *Type:* string

For more details on risk level, refer to the Tanium documentation. Available values: "low", "medium", "high", "critical".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#risk_level ZeroTrustDevicePostureRule#risk_level}

---

##### `Score`<sup>Optional</sup> <a name="Score" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.score"></a>

```csharp
public double Score { get; set; }
```

- *Type:* double

A value between 0-100 assigned to devices set by the 3rd party posture provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#score ZeroTrustDevicePostureRule#score}

---

##### `ScoreOperator`<sup>Optional</sup> <a name="ScoreOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.scoreOperator"></a>

```csharp
public string ScoreOperator { get; set; }
```

- *Type:* string

Score Operator. Available values: "<", "<=", ">", ">=", "==".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#score_operator ZeroTrustDevicePostureRule#score_operator}

---

##### `SensorConfig`<sup>Optional</sup> <a name="SensorConfig" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.sensorConfig"></a>

```csharp
public string SensorConfig { get; set; }
```

- *Type:* string

SensorConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#sensor_config ZeroTrustDevicePostureRule#sensor_config}

---

##### `Sha256`<sup>Optional</sup> <a name="Sha256" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.sha256"></a>

```csharp
public string Sha256 { get; set; }
```

- *Type:* string

SHA-256.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#sha256 ZeroTrustDevicePostureRule#sha256}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

For more details on state, please refer to the Crowdstrike documentation. Available values: "online", "offline", "unknown".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#state ZeroTrustDevicePostureRule#state}

---

##### `SubjectAlternativeNames`<sup>Optional</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.subjectAlternativeNames"></a>

```csharp
public string[] SubjectAlternativeNames { get; set; }
```

- *Type:* string[]

List of certificate Subject Alternative Names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#subject_alternative_names ZeroTrustDevicePostureRule#subject_alternative_names}

---

##### `Thumbprint`<sup>Optional</sup> <a name="Thumbprint" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.thumbprint"></a>

```csharp
public string Thumbprint { get; set; }
```

- *Type:* string

Signing certificate thumbprint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#thumbprint ZeroTrustDevicePostureRule#thumbprint}

---

##### `TotalScore`<sup>Optional</sup> <a name="TotalScore" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.totalScore"></a>

```csharp
public double TotalScore { get; set; }
```

- *Type:* double

For more details on total score, refer to the Tanium documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#total_score ZeroTrustDevicePostureRule#total_score}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Version of OS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#version ZeroTrustDevicePostureRule#version}

---

##### `VersionOperator`<sup>Optional</sup> <a name="VersionOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInput.property.versionOperator"></a>

```csharp
public string VersionOperator { get; set; }
```

- *Type:* string

Version Operator. Available values: "<", "<=", ">", ">=", "==".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#version_operator ZeroTrustDevicePostureRule#version_operator}

---

### ZeroTrustDevicePostureRuleInputLocations <a name="ZeroTrustDevicePostureRuleInputLocations" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDevicePostureRuleInputLocations {
    string[] Paths = null,
    string[] TrustStores = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations.property.paths">Paths</a></code> | <code>string[]</code> | List of paths to check for client certificate on linux. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations.property.trustStores">TrustStores</a></code> | <code>string[]</code> | List of trust stores to check for client certificate. |

---

##### `Paths`<sup>Optional</sup> <a name="Paths" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations.property.paths"></a>

```csharp
public string[] Paths { get; set; }
```

- *Type:* string[]

List of paths to check for client certificate on linux.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#paths ZeroTrustDevicePostureRule#paths}

---

##### `TrustStores`<sup>Optional</sup> <a name="TrustStores" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations.property.trustStores"></a>

```csharp
public string[] TrustStores { get; set; }
```

- *Type:* string[]

List of trust stores to check for client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#trust_stores ZeroTrustDevicePostureRule#trust_stores}

---

### ZeroTrustDevicePostureRuleMatch <a name="ZeroTrustDevicePostureRuleMatch" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDevicePostureRuleMatch {
    string Platform = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch.property.platform">Platform</a></code> | <code>string</code> | Available values: "windows", "mac", "linux", "android", "ios", "chromeos". |

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatch.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

Available values: "windows", "mac", "linux", "android", "ios", "chromeos".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/zero_trust_device_posture_rule#platform ZeroTrustDevicePostureRule#platform}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDevicePostureRuleInputLocationsOutputReference <a name="ZeroTrustDevicePostureRuleInputLocationsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDevicePostureRuleInputLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resetPaths">ResetPaths</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resetTrustStores">ResetTrustStores</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPaths` <a name="ResetPaths" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resetPaths"></a>

```csharp
private void ResetPaths()
```

##### `ResetTrustStores` <a name="ResetTrustStores" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.resetTrustStores"></a>

```csharp
private void ResetTrustStores()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.pathsInput">PathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStoresInput">TrustStoresInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.paths">Paths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStores">TrustStores</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PathsInput`<sup>Optional</sup> <a name="PathsInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.pathsInput"></a>

```csharp
public string[] PathsInput { get; }
```

- *Type:* string[]

---

##### `TrustStoresInput`<sup>Optional</sup> <a name="TrustStoresInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStoresInput"></a>

```csharp
public string[] TrustStoresInput { get; }
```

- *Type:* string[]

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.paths"></a>

```csharp
public string[] Paths { get; }
```

- *Type:* string[]

---

##### `TrustStores`<sup>Required</sup> <a name="TrustStores" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.trustStores"></a>

```csharp
public string[] TrustStores { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDevicePostureRuleInputOutputReference <a name="ZeroTrustDevicePostureRuleInputOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDevicePostureRuleInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.putLocations">PutLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetActiveThreats">ResetActiveThreats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCheckDisks">ResetCheckDisks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCheckPrivateKey">ResetCheckPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCn">ResetCn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetComplianceStatus">ResetComplianceStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetConnectionId">ResetConnectionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCountOperator">ResetCountOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetEidLastSeen">ResetEidLastSeen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetExists">ResetExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetExtendedKeyUsage">ResetExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetInfected">ResetInfected</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetIsActive">ResetIsActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetIssueCount">ResetIssueCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetLastSeen">ResetLastSeen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetLocations">ResetLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetNetworkStatus">ResetNetworkStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOperationalState">ResetOperationalState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOs">ResetOs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOsDistroName">ResetOsDistroName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOsDistroRevision">ResetOsDistroRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOsVersionExtra">ResetOsVersionExtra</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOverall">ResetOverall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetRequireAll">ResetRequireAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetRiskLevel">ResetRiskLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetScore">ResetScore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetScoreOperator">ResetScoreOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetSensorConfig">ResetSensorConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetSha256">ResetSha256</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetSubjectAlternativeNames">ResetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetThumbprint">ResetThumbprint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetTotalScore">ResetTotalScore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetVersionOperator">ResetVersionOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocations` <a name="PutLocations" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.putLocations"></a>

```csharp
private void PutLocations(ZeroTrustDevicePostureRuleInputLocations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.putLocations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocations">ZeroTrustDevicePostureRuleInputLocations</a>

---

##### `ResetActiveThreats` <a name="ResetActiveThreats" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetActiveThreats"></a>

```csharp
private void ResetActiveThreats()
```

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCertificateId"></a>

```csharp
private void ResetCertificateId()
```

##### `ResetCheckDisks` <a name="ResetCheckDisks" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCheckDisks"></a>

```csharp
private void ResetCheckDisks()
```

##### `ResetCheckPrivateKey` <a name="ResetCheckPrivateKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCheckPrivateKey"></a>

```csharp
private void ResetCheckPrivateKey()
```

##### `ResetCn` <a name="ResetCn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCn"></a>

```csharp
private void ResetCn()
```

##### `ResetComplianceStatus` <a name="ResetComplianceStatus" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetComplianceStatus"></a>

```csharp
private void ResetComplianceStatus()
```

##### `ResetConnectionId` <a name="ResetConnectionId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetConnectionId"></a>

```csharp
private void ResetConnectionId()
```

##### `ResetCountOperator` <a name="ResetCountOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetCountOperator"></a>

```csharp
private void ResetCountOperator()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetEidLastSeen` <a name="ResetEidLastSeen" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetEidLastSeen"></a>

```csharp
private void ResetEidLastSeen()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetExists` <a name="ResetExists" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetExists"></a>

```csharp
private void ResetExists()
```

##### `ResetExtendedKeyUsage` <a name="ResetExtendedKeyUsage" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetExtendedKeyUsage"></a>

```csharp
private void ResetExtendedKeyUsage()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInfected` <a name="ResetInfected" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetInfected"></a>

```csharp
private void ResetInfected()
```

##### `ResetIsActive` <a name="ResetIsActive" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetIsActive"></a>

```csharp
private void ResetIsActive()
```

##### `ResetIssueCount` <a name="ResetIssueCount" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetIssueCount"></a>

```csharp
private void ResetIssueCount()
```

##### `ResetLastSeen` <a name="ResetLastSeen" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetLastSeen"></a>

```csharp
private void ResetLastSeen()
```

##### `ResetLocations` <a name="ResetLocations" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetLocations"></a>

```csharp
private void ResetLocations()
```

##### `ResetNetworkStatus` <a name="ResetNetworkStatus" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetNetworkStatus"></a>

```csharp
private void ResetNetworkStatus()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOperatingSystem"></a>

```csharp
private void ResetOperatingSystem()
```

##### `ResetOperationalState` <a name="ResetOperationalState" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOperationalState"></a>

```csharp
private void ResetOperationalState()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetOs` <a name="ResetOs" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOs"></a>

```csharp
private void ResetOs()
```

##### `ResetOsDistroName` <a name="ResetOsDistroName" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOsDistroName"></a>

```csharp
private void ResetOsDistroName()
```

##### `ResetOsDistroRevision` <a name="ResetOsDistroRevision" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOsDistroRevision"></a>

```csharp
private void ResetOsDistroRevision()
```

##### `ResetOsVersionExtra` <a name="ResetOsVersionExtra" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOsVersionExtra"></a>

```csharp
private void ResetOsVersionExtra()
```

##### `ResetOverall` <a name="ResetOverall" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetOverall"></a>

```csharp
private void ResetOverall()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRequireAll` <a name="ResetRequireAll" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetRequireAll"></a>

```csharp
private void ResetRequireAll()
```

##### `ResetRiskLevel` <a name="ResetRiskLevel" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetRiskLevel"></a>

```csharp
private void ResetRiskLevel()
```

##### `ResetScore` <a name="ResetScore" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetScore"></a>

```csharp
private void ResetScore()
```

##### `ResetScoreOperator` <a name="ResetScoreOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetScoreOperator"></a>

```csharp
private void ResetScoreOperator()
```

##### `ResetSensorConfig` <a name="ResetSensorConfig" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetSensorConfig"></a>

```csharp
private void ResetSensorConfig()
```

##### `ResetSha256` <a name="ResetSha256" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetSha256"></a>

```csharp
private void ResetSha256()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetSubjectAlternativeNames` <a name="ResetSubjectAlternativeNames" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetSubjectAlternativeNames"></a>

```csharp
private void ResetSubjectAlternativeNames()
```

##### `ResetThumbprint` <a name="ResetThumbprint" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetThumbprint"></a>

```csharp
private void ResetThumbprint()
```

##### `ResetTotalScore` <a name="ResetTotalScore" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetTotalScore"></a>

```csharp
private void ResetTotalScore()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```

##### `ResetVersionOperator` <a name="ResetVersionOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.resetVersionOperator"></a>

```csharp
private void ResetVersionOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.locations">Locations</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference">ZeroTrustDevicePostureRuleInputLocationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.activeThreatsInput">ActiveThreatsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkDisksInput">CheckDisksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKeyInput">CheckPrivateKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.cnInput">CnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatusInput">ComplianceStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.countOperatorInput">CountOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeenInput">EidLastSeenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.existsInput">ExistsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsageInput">ExtendedKeyUsageInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.infectedInput">InfectedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.isActiveInput">IsActiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.issueCountInput">IssueCountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.lastSeenInput">LastSeenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.locationsInput">LocationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.networkStatusInput">NetworkStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operationalStateInput">OperationalStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroNameInput">OsDistroNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevisionInput">OsDistroRevisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osInput">OsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtraInput">OsVersionExtraInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.overallInput">OverallInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.requireAllInput">RequireAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.riskLevelInput">RiskLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.scoreInput">ScoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.scoreOperatorInput">ScoreOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfigInput">SensorConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sha256Input">Sha256Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.subjectAlternativeNamesInput">SubjectAlternativeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.thumbprintInput">ThumbprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.totalScoreInput">TotalScoreInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.versionOperatorInput">VersionOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.activeThreats">ActiveThreats</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkDisks">CheckDisks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKey">CheckPrivateKey</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.cn">Cn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatus">ComplianceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.countOperator">CountOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeen">EidLastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.exists">Exists</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.infected">Infected</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.isActive">IsActive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.issueCount">IssueCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.lastSeen">LastSeen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.networkStatus">NetworkStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operationalState">OperationalState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.os">Os</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroName">OsDistroName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevision">OsDistroRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtra">OsVersionExtra</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.overall">Overall</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.requireAll">RequireAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.riskLevel">RiskLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.score">Score</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.scoreOperator">ScoreOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfig">SensorConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.subjectAlternativeNames">SubjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.thumbprint">Thumbprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.totalScore">TotalScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.versionOperator">VersionOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.locations"></a>

```csharp
public ZeroTrustDevicePostureRuleInputLocationsOutputReference Locations { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputLocationsOutputReference">ZeroTrustDevicePostureRuleInputLocationsOutputReference</a>

---

##### `ActiveThreatsInput`<sup>Optional</sup> <a name="ActiveThreatsInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.activeThreatsInput"></a>

```csharp
public double ActiveThreatsInput { get; }
```

- *Type:* double

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.certificateIdInput"></a>

```csharp
public string CertificateIdInput { get; }
```

- *Type:* string

---

##### `CheckDisksInput`<sup>Optional</sup> <a name="CheckDisksInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkDisksInput"></a>

```csharp
public string[] CheckDisksInput { get; }
```

- *Type:* string[]

---

##### `CheckPrivateKeyInput`<sup>Optional</sup> <a name="CheckPrivateKeyInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKeyInput"></a>

```csharp
public object CheckPrivateKeyInput { get; }
```

- *Type:* object

---

##### `CnInput`<sup>Optional</sup> <a name="CnInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.cnInput"></a>

```csharp
public string CnInput { get; }
```

- *Type:* string

---

##### `ComplianceStatusInput`<sup>Optional</sup> <a name="ComplianceStatusInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatusInput"></a>

```csharp
public string ComplianceStatusInput { get; }
```

- *Type:* string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `CountOperatorInput`<sup>Optional</sup> <a name="CountOperatorInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.countOperatorInput"></a>

```csharp
public string CountOperatorInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `EidLastSeenInput`<sup>Optional</sup> <a name="EidLastSeenInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeenInput"></a>

```csharp
public string EidLastSeenInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExistsInput`<sup>Optional</sup> <a name="ExistsInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.existsInput"></a>

```csharp
public object ExistsInput { get; }
```

- *Type:* object

---

##### `ExtendedKeyUsageInput`<sup>Optional</sup> <a name="ExtendedKeyUsageInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsageInput"></a>

```csharp
public string[] ExtendedKeyUsageInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InfectedInput`<sup>Optional</sup> <a name="InfectedInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.infectedInput"></a>

```csharp
public object InfectedInput { get; }
```

- *Type:* object

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.isActiveInput"></a>

```csharp
public object IsActiveInput { get; }
```

- *Type:* object

---

##### `IssueCountInput`<sup>Optional</sup> <a name="IssueCountInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.issueCountInput"></a>

```csharp
public string IssueCountInput { get; }
```

- *Type:* string

---

##### `LastSeenInput`<sup>Optional</sup> <a name="LastSeenInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.lastSeenInput"></a>

```csharp
public string LastSeenInput { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.locationsInput"></a>

```csharp
public object LocationsInput { get; }
```

- *Type:* object

---

##### `NetworkStatusInput`<sup>Optional</sup> <a name="NetworkStatusInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.networkStatusInput"></a>

```csharp
public string NetworkStatusInput { get; }
```

- *Type:* string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operatingSystemInput"></a>

```csharp
public string OperatingSystemInput { get; }
```

- *Type:* string

---

##### `OperationalStateInput`<sup>Optional</sup> <a name="OperationalStateInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operationalStateInput"></a>

```csharp
public string OperationalStateInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `OsDistroNameInput`<sup>Optional</sup> <a name="OsDistroNameInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroNameInput"></a>

```csharp
public string OsDistroNameInput { get; }
```

- *Type:* string

---

##### `OsDistroRevisionInput`<sup>Optional</sup> <a name="OsDistroRevisionInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevisionInput"></a>

```csharp
public string OsDistroRevisionInput { get; }
```

- *Type:* string

---

##### `OsInput`<sup>Optional</sup> <a name="OsInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osInput"></a>

```csharp
public string OsInput { get; }
```

- *Type:* string

---

##### `OsVersionExtraInput`<sup>Optional</sup> <a name="OsVersionExtraInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtraInput"></a>

```csharp
public string OsVersionExtraInput { get; }
```

- *Type:* string

---

##### `OverallInput`<sup>Optional</sup> <a name="OverallInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.overallInput"></a>

```csharp
public string OverallInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RequireAllInput`<sup>Optional</sup> <a name="RequireAllInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.requireAllInput"></a>

```csharp
public object RequireAllInput { get; }
```

- *Type:* object

---

##### `RiskLevelInput`<sup>Optional</sup> <a name="RiskLevelInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.riskLevelInput"></a>

```csharp
public string RiskLevelInput { get; }
```

- *Type:* string

---

##### `ScoreInput`<sup>Optional</sup> <a name="ScoreInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.scoreInput"></a>

```csharp
public double ScoreInput { get; }
```

- *Type:* double

---

##### `ScoreOperatorInput`<sup>Optional</sup> <a name="ScoreOperatorInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.scoreOperatorInput"></a>

```csharp
public string ScoreOperatorInput { get; }
```

- *Type:* string

---

##### `SensorConfigInput`<sup>Optional</sup> <a name="SensorConfigInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfigInput"></a>

```csharp
public string SensorConfigInput { get; }
```

- *Type:* string

---

##### `Sha256Input`<sup>Optional</sup> <a name="Sha256Input" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sha256Input"></a>

```csharp
public string Sha256Input { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNamesInput`<sup>Optional</sup> <a name="SubjectAlternativeNamesInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.subjectAlternativeNamesInput"></a>

```csharp
public string[] SubjectAlternativeNamesInput { get; }
```

- *Type:* string[]

---

##### `ThumbprintInput`<sup>Optional</sup> <a name="ThumbprintInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.thumbprintInput"></a>

```csharp
public string ThumbprintInput { get; }
```

- *Type:* string

---

##### `TotalScoreInput`<sup>Optional</sup> <a name="TotalScoreInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.totalScoreInput"></a>

```csharp
public double TotalScoreInput { get; }
```

- *Type:* double

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `VersionOperatorInput`<sup>Optional</sup> <a name="VersionOperatorInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.versionOperatorInput"></a>

```csharp
public string VersionOperatorInput { get; }
```

- *Type:* string

---

##### `ActiveThreats`<sup>Required</sup> <a name="ActiveThreats" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.activeThreats"></a>

```csharp
public double ActiveThreats { get; }
```

- *Type:* double

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `CheckDisks`<sup>Required</sup> <a name="CheckDisks" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkDisks"></a>

```csharp
public string[] CheckDisks { get; }
```

- *Type:* string[]

---

##### `CheckPrivateKey`<sup>Required</sup> <a name="CheckPrivateKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.checkPrivateKey"></a>

```csharp
public object CheckPrivateKey { get; }
```

- *Type:* object

---

##### `Cn`<sup>Required</sup> <a name="Cn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.cn"></a>

```csharp
public string Cn { get; }
```

- *Type:* string

---

##### `ComplianceStatus`<sup>Required</sup> <a name="ComplianceStatus" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.complianceStatus"></a>

```csharp
public string ComplianceStatus { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `CountOperator`<sup>Required</sup> <a name="CountOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.countOperator"></a>

```csharp
public string CountOperator { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `EidLastSeen`<sup>Required</sup> <a name="EidLastSeen" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.eidLastSeen"></a>

```csharp
public string EidLastSeen { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Exists`<sup>Required</sup> <a name="Exists" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.exists"></a>

```csharp
public object Exists { get; }
```

- *Type:* object

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.extendedKeyUsage"></a>

```csharp
public string[] ExtendedKeyUsage { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Infected`<sup>Required</sup> <a name="Infected" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.infected"></a>

```csharp
public object Infected { get; }
```

- *Type:* object

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.isActive"></a>

```csharp
public object IsActive { get; }
```

- *Type:* object

---

##### `IssueCount`<sup>Required</sup> <a name="IssueCount" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.issueCount"></a>

```csharp
public string IssueCount { get; }
```

- *Type:* string

---

##### `LastSeen`<sup>Required</sup> <a name="LastSeen" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.lastSeen"></a>

```csharp
public string LastSeen { get; }
```

- *Type:* string

---

##### `NetworkStatus`<sup>Required</sup> <a name="NetworkStatus" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.networkStatus"></a>

```csharp
public string NetworkStatus { get; }
```

- *Type:* string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `OperationalState`<sup>Required</sup> <a name="OperationalState" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operationalState"></a>

```csharp
public string OperationalState { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.os"></a>

```csharp
public string Os { get; }
```

- *Type:* string

---

##### `OsDistroName`<sup>Required</sup> <a name="OsDistroName" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroName"></a>

```csharp
public string OsDistroName { get; }
```

- *Type:* string

---

##### `OsDistroRevision`<sup>Required</sup> <a name="OsDistroRevision" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osDistroRevision"></a>

```csharp
public string OsDistroRevision { get; }
```

- *Type:* string

---

##### `OsVersionExtra`<sup>Required</sup> <a name="OsVersionExtra" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.osVersionExtra"></a>

```csharp
public string OsVersionExtra { get; }
```

- *Type:* string

---

##### `Overall`<sup>Required</sup> <a name="Overall" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.overall"></a>

```csharp
public string Overall { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `RequireAll`<sup>Required</sup> <a name="RequireAll" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.requireAll"></a>

```csharp
public object RequireAll { get; }
```

- *Type:* object

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.riskLevel"></a>

```csharp
public string RiskLevel { get; }
```

- *Type:* string

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.score"></a>

```csharp
public double Score { get; }
```

- *Type:* double

---

##### `ScoreOperator`<sup>Required</sup> <a name="ScoreOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.scoreOperator"></a>

```csharp
public string ScoreOperator { get; }
```

- *Type:* string

---

##### `SensorConfig`<sup>Required</sup> <a name="SensorConfig" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sensorConfig"></a>

```csharp
public string SensorConfig { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubjectAlternativeNames`<sup>Required</sup> <a name="SubjectAlternativeNames" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.subjectAlternativeNames"></a>

```csharp
public string[] SubjectAlternativeNames { get; }
```

- *Type:* string[]

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.thumbprint"></a>

```csharp
public string Thumbprint { get; }
```

- *Type:* string

---

##### `TotalScore`<sup>Required</sup> <a name="TotalScore" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.totalScore"></a>

```csharp
public double TotalScore { get; }
```

- *Type:* double

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `VersionOperator`<sup>Required</sup> <a name="VersionOperator" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.versionOperator"></a>

```csharp
public string VersionOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleInputOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDevicePostureRuleMatchList <a name="ZeroTrustDevicePostureRuleMatchList" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDevicePostureRuleMatchList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.get"></a>

```csharp
private ZeroTrustDevicePostureRuleMatchOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDevicePostureRuleMatchOutputReference <a name="ZeroTrustDevicePostureRuleMatchOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDevicePostureRuleMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.resetPlatform">ResetPlatform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.resetPlatform"></a>

```csharp
private void ResetPlatform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDevicePostureRule.ZeroTrustDevicePostureRuleMatchOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



