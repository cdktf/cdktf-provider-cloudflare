# `zeroTrustDlpProfile` Submodule <a name="`zeroTrustDlpProfile` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpProfile <a name="ZeroTrustDlpProfile" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile cloudflare_zero_trust_dlp_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpProfile(Construct Scope, string Id, ZeroTrustDlpProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig">ZeroTrustDlpProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig">ZeroTrustDlpProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putContextAwareness">PutContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putEntry">PutEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetContextAwareness">ResetContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetOcrEnabled">ResetOcrEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContextAwareness` <a name="PutContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putContextAwareness"></a>

```csharp
private void PutContextAwareness(ZeroTrustDlpProfileContextAwareness Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putContextAwareness.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a>

---

##### `PutEntry` <a name="PutEntry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putEntry"></a>

```csharp
private void PutEntry(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.putEntry.parameter.value"></a>

- *Type:* object

---

##### `ResetContextAwareness` <a name="ResetContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetContextAwareness"></a>

```csharp
private void ResetContextAwareness()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOcrEnabled` <a name="ResetOcrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.resetOcrEnabled"></a>

```csharp
private void ResetOcrEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDlpProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDlpProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDlpProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDlpProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDlpProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustDlpProfile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDlpProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDlpProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.contextAwareness">ContextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference">ZeroTrustDlpProfileContextAwarenessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.entry">Entry</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList">ZeroTrustDlpProfileEntryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.allowedMatchCountInput">AllowedMatchCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.contextAwarenessInput">ContextAwarenessInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.entryInput">EntryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.ocrEnabledInput">OcrEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.allowedMatchCount">AllowedMatchCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.ocrEnabled">OcrEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ContextAwareness`<sup>Required</sup> <a name="ContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.contextAwareness"></a>

```csharp
public ZeroTrustDlpProfileContextAwarenessOutputReference ContextAwareness { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference">ZeroTrustDlpProfileContextAwarenessOutputReference</a>

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.entry"></a>

```csharp
public ZeroTrustDlpProfileEntryList Entry { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList">ZeroTrustDlpProfileEntryList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AllowedMatchCountInput`<sup>Optional</sup> <a name="AllowedMatchCountInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.allowedMatchCountInput"></a>

```csharp
public double AllowedMatchCountInput { get; }
```

- *Type:* double

---

##### `ContextAwarenessInput`<sup>Optional</sup> <a name="ContextAwarenessInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.contextAwarenessInput"></a>

```csharp
public ZeroTrustDlpProfileContextAwareness ContextAwarenessInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EntryInput`<sup>Optional</sup> <a name="EntryInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.entryInput"></a>

```csharp
public object EntryInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OcrEnabledInput`<sup>Optional</sup> <a name="OcrEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.ocrEnabledInput"></a>

```csharp
public object OcrEnabledInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AllowedMatchCount`<sup>Required</sup> <a name="AllowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.allowedMatchCount"></a>

```csharp
public double AllowedMatchCount { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OcrEnabled`<sup>Required</sup> <a name="OcrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.ocrEnabled"></a>

```csharp
public object OcrEnabled { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpProfileConfig <a name="ZeroTrustDlpProfileConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    double AllowedMatchCount,
    object Entry,
    string Name,
    string Type,
    ZeroTrustDlpProfileContextAwareness ContextAwareness = null,
    string Description = null,
    string Id = null,
    object OcrEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.allowedMatchCount">AllowedMatchCount</a></code> | <code>double</code> | Related DLP policies will trigger when the match count exceeds the number set. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.entry">Entry</a></code> | <code>object</code> | entry block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.name">Name</a></code> | <code>string</code> | Name of the profile. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.type">Type</a></code> | <code>string</code> | The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.contextAwareness">ContextAwareness</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a></code> | context_awareness block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.description">Description</a></code> | <code>string</code> | Brief summary of the profile and its intended use. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#id ZeroTrustDlpProfile#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.ocrEnabled">OcrEnabled</a></code> | <code>object</code> | If true, scan images via OCR to determine if any text present matches filters. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#account_id ZeroTrustDlpProfile#account_id}

---

##### `AllowedMatchCount`<sup>Required</sup> <a name="AllowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.allowedMatchCount"></a>

```csharp
public double AllowedMatchCount { get; set; }
```

- *Type:* double

Related DLP policies will trigger when the match count exceeds the number set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#allowed_match_count ZeroTrustDlpProfile#allowed_match_count}

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.entry"></a>

```csharp
public object Entry { get; set; }
```

- *Type:* object

entry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#entry ZeroTrustDlpProfile#entry}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the profile. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#name ZeroTrustDlpProfile#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the profile. Available values: `custom`, `predefined`. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#type ZeroTrustDlpProfile#type}

---

##### `ContextAwareness`<sup>Optional</sup> <a name="ContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.contextAwareness"></a>

```csharp
public ZeroTrustDlpProfileContextAwareness ContextAwareness { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a>

context_awareness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#context_awareness ZeroTrustDlpProfile#context_awareness}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Brief summary of the profile and its intended use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#description ZeroTrustDlpProfile#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#id ZeroTrustDlpProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OcrEnabled`<sup>Optional</sup> <a name="OcrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileConfig.property.ocrEnabled"></a>

```csharp
public object OcrEnabled { get; set; }
```

- *Type:* object

If true, scan images via OCR to determine if any text present matches filters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#ocr_enabled ZeroTrustDlpProfile#ocr_enabled}

---

### ZeroTrustDlpProfileContextAwareness <a name="ZeroTrustDlpProfileContextAwareness" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpProfileContextAwareness {
    object Enabled,
    ZeroTrustDlpProfileContextAwarenessSkip Skip
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.property.enabled">Enabled</a></code> | <code>object</code> | Scan the context of predefined entries to only return matches surrounded by keywords. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.property.skip">Skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a></code> | skip block. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Scan the context of predefined entries to only return matches surrounded by keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#enabled ZeroTrustDlpProfile#enabled}

---

##### `Skip`<sup>Required</sup> <a name="Skip" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness.property.skip"></a>

```csharp
public ZeroTrustDlpProfileContextAwarenessSkip Skip { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a>

skip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#skip ZeroTrustDlpProfile#skip}

---

### ZeroTrustDlpProfileContextAwarenessSkip <a name="ZeroTrustDlpProfileContextAwarenessSkip" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpProfileContextAwarenessSkip {
    object Files
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip.property.files">Files</a></code> | <code>object</code> | Return all matches, regardless of context analysis result, if the data is a file. |

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip.property.files"></a>

```csharp
public object Files { get; set; }
```

- *Type:* object

Return all matches, regardless of context analysis result, if the data is a file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#files ZeroTrustDlpProfile#files}

---

### ZeroTrustDlpProfileEntry <a name="ZeroTrustDlpProfileEntry" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpProfileEntry {
    string Name,
    object Enabled = null,
    string Id = null,
    ZeroTrustDlpProfileEntryPattern Pattern = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.name">Name</a></code> | <code>string</code> | Name of the entry to deploy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.enabled">Enabled</a></code> | <code>object</code> | Whether the entry is active. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.id">Id</a></code> | <code>string</code> | Unique entry identifier. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.pattern">Pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a></code> | pattern block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the entry to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#name ZeroTrustDlpProfile#name}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether the entry is active. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#enabled ZeroTrustDlpProfile#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Unique entry identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#id ZeroTrustDlpProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntry.property.pattern"></a>

```csharp
public ZeroTrustDlpProfileEntryPattern Pattern { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a>

pattern block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#pattern ZeroTrustDlpProfile#pattern}

---

### ZeroTrustDlpProfileEntryPattern <a name="ZeroTrustDlpProfileEntryPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpProfileEntryPattern {
    string Regex,
    string Validation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.property.regex">Regex</a></code> | <code>string</code> | The regex that defines the pattern. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.property.validation">Validation</a></code> | <code>string</code> | The validation algorithm to apply with this pattern. |

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.property.regex"></a>

```csharp
public string Regex { get; set; }
```

- *Type:* string

The regex that defines the pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#regex ZeroTrustDlpProfile#regex}

---

##### `Validation`<sup>Optional</sup> <a name="Validation" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern.property.validation"></a>

```csharp
public string Validation { get; set; }
```

- *Type:* string

The validation algorithm to apply with this pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.49.0/docs/resources/zero_trust_dlp_profile#validation ZeroTrustDlpProfile#validation}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpProfileContextAwarenessOutputReference <a name="ZeroTrustDlpProfileContextAwarenessOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpProfileContextAwarenessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.putSkip">PutSkip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSkip` <a name="PutSkip" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.putSkip"></a>

```csharp
private void PutSkip(ZeroTrustDlpProfileContextAwarenessSkip Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.putSkip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.skip">Skip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference">ZeroTrustDlpProfileContextAwarenessSkipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.skipInput">SkipInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Skip`<sup>Required</sup> <a name="Skip" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.skip"></a>

```csharp
public ZeroTrustDlpProfileContextAwarenessSkipOutputReference Skip { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference">ZeroTrustDlpProfileContextAwarenessSkipOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `SkipInput`<sup>Optional</sup> <a name="SkipInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.skipInput"></a>

```csharp
public ZeroTrustDlpProfileContextAwarenessSkip SkipInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDlpProfileContextAwareness InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwareness">ZeroTrustDlpProfileContextAwareness</a>

---


### ZeroTrustDlpProfileContextAwarenessSkipOutputReference <a name="ZeroTrustDlpProfileContextAwarenessSkipOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpProfileContextAwarenessSkipOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.filesInput">FilesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.files">Files</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilesInput`<sup>Optional</sup> <a name="FilesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.filesInput"></a>

```csharp
public object FilesInput { get; }
```

- *Type:* object

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.files"></a>

```csharp
public object Files { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkipOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDlpProfileContextAwarenessSkip InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileContextAwarenessSkip">ZeroTrustDlpProfileContextAwarenessSkip</a>

---


### ZeroTrustDlpProfileEntryList <a name="ZeroTrustDlpProfileEntryList" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpProfileEntryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.get"></a>

```csharp
private ZeroTrustDlpProfileEntryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDlpProfileEntryOutputReference <a name="ZeroTrustDlpProfileEntryOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpProfileEntryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.putPattern">PutPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPattern` <a name="PutPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.putPattern"></a>

```csharp
private void PutPattern(ZeroTrustDlpProfileEntryPattern Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.putPattern.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.resetPattern"></a>

```csharp
private void ResetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.pattern">Pattern</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference">ZeroTrustDlpProfileEntryPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.patternInput">PatternInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.pattern"></a>

```csharp
public ZeroTrustDlpProfileEntryPatternOutputReference Pattern { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference">ZeroTrustDlpProfileEntryPatternOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.patternInput"></a>

```csharp
public ZeroTrustDlpProfileEntryPattern PatternInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDlpProfileEntryPatternOutputReference <a name="ZeroTrustDlpProfileEntryPatternOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpProfileEntryPatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resetValidation">ResetValidation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValidation` <a name="ResetValidation" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.resetValidation"></a>

```csharp
private void ResetValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.regexInput">RegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.validationInput">ValidationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.validation">Validation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.regexInput"></a>

```csharp
public string RegexInput { get; }
```

- *Type:* string

---

##### `ValidationInput`<sup>Optional</sup> <a name="ValidationInput" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.validationInput"></a>

```csharp
public string ValidationInput { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.validation"></a>

```csharp
public string Validation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPatternOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDlpProfileEntryPattern InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpProfile.ZeroTrustDlpProfileEntryPattern">ZeroTrustDlpProfileEntryPattern</a>

---



