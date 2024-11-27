# `zeroTrustAccessGroup` Submodule <a name="`zeroTrustAccessGroup` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessGroup <a name="ZeroTrustAccessGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group cloudflare_zero_trust_access_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroup(Construct Scope, string Id, ZeroTrustAccessGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig">ZeroTrustAccessGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig">ZeroTrustAccessGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putExclude">PutExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putInclude">PutInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putRequire">PutRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetRequire">ResetRequire</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExclude` <a name="PutExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putExclude"></a>

```csharp
private void PutExclude(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putExclude.parameter.value"></a>

- *Type:* object

---

##### `PutInclude` <a name="PutInclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putInclude"></a>

```csharp
private void PutInclude(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putInclude.parameter.value"></a>

- *Type:* object

---

##### `PutRequire` <a name="PutRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putRequire"></a>

```csharp
private void PutRequire(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.putRequire.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRequire` <a name="ResetRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetRequire"></a>

```csharp
private void ResetRequire()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustAccessGroup resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustAccessGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustAccessGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.exclude">Exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList">ZeroTrustAccessGroupExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.include">Include</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList">ZeroTrustAccessGroupIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.require">Require</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList">ZeroTrustAccessGroupRequireList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.excludeInput">ExcludeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.includeInput">IncludeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.requireInput">RequireInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.exclude"></a>

```csharp
public ZeroTrustAccessGroupExcludeList Exclude { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList">ZeroTrustAccessGroupExcludeList</a>

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.include"></a>

```csharp
public ZeroTrustAccessGroupIncludeList Include { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList">ZeroTrustAccessGroupIncludeList</a>

---

##### `Require`<sup>Required</sup> <a name="Require" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.require"></a>

```csharp
public ZeroTrustAccessGroupRequireList Require { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList">ZeroTrustAccessGroupRequireList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.excludeInput"></a>

```csharp
public object ExcludeInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.includeInput"></a>

```csharp
public object IncludeInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequireInput`<sup>Optional</sup> <a name="RequireInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.requireInput"></a>

```csharp
public object RequireInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessGroupConfig <a name="ZeroTrustAccessGroupConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Include,
    string Name,
    string AccountId = null,
    object Exclude = null,
    string Id = null,
    object Require = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.include">Include</a></code> | <code>object</code> | include block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.exclude">Exclude</a></code> | <code>object</code> | exclude block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.require">Require</a></code> | <code>object</code> | require block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.include"></a>

```csharp
public object Include { get; set; }
```

- *Type:* object

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#include ZeroTrustAccessGroup#include}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#account_id ZeroTrustAccessGroup#account_id}

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.exclude"></a>

```csharp
public object Exclude { get; set; }
```

- *Type:* object

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#exclude ZeroTrustAccessGroup#exclude}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Require`<sup>Optional</sup> <a name="Require" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.require"></a>

```csharp
public object Require { get; set; }
```

- *Type:* object

require block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#require ZeroTrustAccessGroup#require}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#zone_id ZeroTrustAccessGroup#zone_id}

---

### ZeroTrustAccessGroupExclude <a name="ZeroTrustAccessGroupExclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExclude {
    object AnyValidServiceToken = null,
    object AuthContext = null,
    string AuthMethod = null,
    object Azure = null,
    object Certificate = null,
    string CommonName = null,
    string[] CommonNames = null,
    string[] DevicePosture = null,
    string[] Email = null,
    string[] EmailDomain = null,
    string[] EmailList = null,
    object Everyone = null,
    object ExternalEvaluation = null,
    string[] Geo = null,
    object Github = null,
    string[] Group = null,
    object Gsuite = null,
    string[] Ip = null,
    string[] IpList = null,
    string[] LoginMethod = null,
    object Okta = null,
    object Saml = null,
    string[] ServiceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authContext">AuthContext</a></code> | <code>object</code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authMethod">AuthMethod</a></code> | <code>string</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.azure">Azure</a></code> | <code>object</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.certificate">Certificate</a></code> | <code>object</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonName">CommonName</a></code> | <code>string</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonNames">CommonNames</a></code> | <code>string[]</code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.email">Email</a></code> | <code>string[]</code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailList">EmailList</a></code> | <code>string[]</code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.everyone">Everyone</a></code> | <code>object</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.externalEvaluation">ExternalEvaluation</a></code> | <code>object</code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.geo">Geo</a></code> | <code>string[]</code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.github">Github</a></code> | <code>object</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.group">Group</a></code> | <code>string[]</code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.gsuite">Gsuite</a></code> | <code>object</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ip">Ip</a></code> | <code>string[]</code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ipList">IpList</a></code> | <code>string[]</code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.okta">Okta</a></code> | <code>object</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.saml">Saml</a></code> | <code>object</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | The ID of an Access service token. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; set; }
```

- *Type:* object

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}

---

##### `AuthContext`<sup>Optional</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authContext"></a>

```csharp
public object AuthContext { get; set; }
```

- *Type:* object

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.azure"></a>

```csharp
public object Azure { get; set; }
```

- *Type:* object

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}

---

##### `CommonNames`<sup>Optional</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.commonNames"></a>

```csharp
public string[] CommonNames { get; set; }
```

- *Type:* string[]

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; set; }
```

- *Type:* string[]

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; set; }
```

- *Type:* string[]

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}

---

##### `EmailList`<sup>Optional</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.emailList"></a>

```csharp
public string[] EmailList { get; set; }
```

- *Type:* string[]

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.everyone"></a>

```csharp
public object Everyone { get; set; }
```

- *Type:* object

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.externalEvaluation"></a>

```csharp
public object ExternalEvaluation { get; set; }
```

- *Type:* object

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.geo"></a>

```csharp
public string[] Geo { get; set; }
```

- *Type:* string[]

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.github"></a>

```csharp
public object Github { get; set; }
```

- *Type:* object

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.group"></a>

```csharp
public string[] Group { get; set; }
```

- *Type:* string[]

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.gsuite"></a>

```csharp
public object Gsuite { get; set; }
```

- *Type:* object

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ip"></a>

```csharp
public string[] Ip { get; set; }
```

- *Type:* string[]

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; set; }
```

- *Type:* string[]

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.okta"></a>

```csharp
public object Okta { get; set; }
```

- *Type:* object

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.saml"></a>

```csharp
public object Saml { get; set; }
```

- *Type:* object

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExclude.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; set; }
```

- *Type:* string[]

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}

---

### ZeroTrustAccessGroupExcludeAuthContext <a name="ZeroTrustAccessGroupExcludeAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeAuthContext {
    string AcId,
    string Id,
    string IdentityProviderId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.acId">AcId</a></code> | <code>string</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.id">Id</a></code> | <code>string</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure identity provider. |

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.acId"></a>

```csharp
public string AcId { get; set; }
```

- *Type:* string

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContext.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupExcludeAzure <a name="ZeroTrustAccessGroupExcludeAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeAzure {
    string[] Id = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.id">Id</a></code> | <code>string[]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure identity provider. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.id"></a>

```csharp
public string[] Id { get; set; }
```

- *Type:* string[]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzure.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupExcludeExternalEvaluation <a name="ZeroTrustAccessGroupExcludeExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeExternalEvaluation {
    string EvaluateUrl = null,
    string KeysUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>string</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; set; }
```

- *Type:* string

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluation.property.keysUrl"></a>

```csharp
public string KeysUrl { get; set; }
```

- *Type:* string

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}

---

### ZeroTrustAccessGroupExcludeGithub <a name="ZeroTrustAccessGroupExcludeGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeGithub {
    string IdentityProviderId = null,
    string Name = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.name">Name</a></code> | <code>string</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.teams">Teams</a></code> | <code>string[]</code> | The teams that should be matched. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithub.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}

---

### ZeroTrustAccessGroupExcludeGsuite <a name="ZeroTrustAccessGroupExcludeGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeGsuite {
    string[] Email,
    string IdentityProviderId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.email">Email</a></code> | <code>string[]</code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Google Workspace identity provider. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuite.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupExcludeOkta <a name="ZeroTrustAccessGroupExcludeOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeOkta {
    string IdentityProviderId = null,
    string[] Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.name">Name</a></code> | <code>string[]</code> | The name of the Okta Group. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOkta.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

### ZeroTrustAccessGroupExcludeSaml <a name="ZeroTrustAccessGroupExcludeSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeSaml {
    string AttributeName = null,
    string AttributeValue = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeName">AttributeName</a></code> | <code>string</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeValue">AttributeValue</a></code> | <code>string</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your SAML identity provider. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSaml.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupInclude <a name="ZeroTrustAccessGroupInclude" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupInclude {
    object AnyValidServiceToken = null,
    object AuthContext = null,
    string AuthMethod = null,
    object Azure = null,
    object Certificate = null,
    string CommonName = null,
    string[] CommonNames = null,
    string[] DevicePosture = null,
    string[] Email = null,
    string[] EmailDomain = null,
    string[] EmailList = null,
    object Everyone = null,
    object ExternalEvaluation = null,
    string[] Geo = null,
    object Github = null,
    string[] Group = null,
    object Gsuite = null,
    string[] Ip = null,
    string[] IpList = null,
    string[] LoginMethod = null,
    object Okta = null,
    object Saml = null,
    string[] ServiceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authContext">AuthContext</a></code> | <code>object</code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authMethod">AuthMethod</a></code> | <code>string</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.azure">Azure</a></code> | <code>object</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.certificate">Certificate</a></code> | <code>object</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonName">CommonName</a></code> | <code>string</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonNames">CommonNames</a></code> | <code>string[]</code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.email">Email</a></code> | <code>string[]</code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailList">EmailList</a></code> | <code>string[]</code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.everyone">Everyone</a></code> | <code>object</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.externalEvaluation">ExternalEvaluation</a></code> | <code>object</code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.geo">Geo</a></code> | <code>string[]</code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.github">Github</a></code> | <code>object</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.group">Group</a></code> | <code>string[]</code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.gsuite">Gsuite</a></code> | <code>object</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ip">Ip</a></code> | <code>string[]</code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ipList">IpList</a></code> | <code>string[]</code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.okta">Okta</a></code> | <code>object</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.saml">Saml</a></code> | <code>object</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | The ID of an Access service token. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; set; }
```

- *Type:* object

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}

---

##### `AuthContext`<sup>Optional</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authContext"></a>

```csharp
public object AuthContext { get; set; }
```

- *Type:* object

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.azure"></a>

```csharp
public object Azure { get; set; }
```

- *Type:* object

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}

---

##### `CommonNames`<sup>Optional</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.commonNames"></a>

```csharp
public string[] CommonNames { get; set; }
```

- *Type:* string[]

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; set; }
```

- *Type:* string[]

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; set; }
```

- *Type:* string[]

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}

---

##### `EmailList`<sup>Optional</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.emailList"></a>

```csharp
public string[] EmailList { get; set; }
```

- *Type:* string[]

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.everyone"></a>

```csharp
public object Everyone { get; set; }
```

- *Type:* object

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.externalEvaluation"></a>

```csharp
public object ExternalEvaluation { get; set; }
```

- *Type:* object

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.geo"></a>

```csharp
public string[] Geo { get; set; }
```

- *Type:* string[]

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.github"></a>

```csharp
public object Github { get; set; }
```

- *Type:* object

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.group"></a>

```csharp
public string[] Group { get; set; }
```

- *Type:* string[]

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.gsuite"></a>

```csharp
public object Gsuite { get; set; }
```

- *Type:* object

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ip"></a>

```csharp
public string[] Ip { get; set; }
```

- *Type:* string[]

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; set; }
```

- *Type:* string[]

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.okta"></a>

```csharp
public object Okta { get; set; }
```

- *Type:* object

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.saml"></a>

```csharp
public object Saml { get; set; }
```

- *Type:* object

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupInclude.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; set; }
```

- *Type:* string[]

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}

---

### ZeroTrustAccessGroupIncludeAuthContext <a name="ZeroTrustAccessGroupIncludeAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeAuthContext {
    string AcId,
    string Id,
    string IdentityProviderId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.acId">AcId</a></code> | <code>string</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.id">Id</a></code> | <code>string</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure identity provider. |

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.acId"></a>

```csharp
public string AcId { get; set; }
```

- *Type:* string

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContext.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupIncludeAzure <a name="ZeroTrustAccessGroupIncludeAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeAzure {
    string[] Id = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.id">Id</a></code> | <code>string[]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure identity provider. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.id"></a>

```csharp
public string[] Id { get; set; }
```

- *Type:* string[]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzure.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupIncludeExternalEvaluation <a name="ZeroTrustAccessGroupIncludeExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeExternalEvaluation {
    string EvaluateUrl = null,
    string KeysUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>string</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; set; }
```

- *Type:* string

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluation.property.keysUrl"></a>

```csharp
public string KeysUrl { get; set; }
```

- *Type:* string

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}

---

### ZeroTrustAccessGroupIncludeGithub <a name="ZeroTrustAccessGroupIncludeGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeGithub {
    string IdentityProviderId = null,
    string Name = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.name">Name</a></code> | <code>string</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.teams">Teams</a></code> | <code>string[]</code> | The teams that should be matched. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithub.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}

---

### ZeroTrustAccessGroupIncludeGsuite <a name="ZeroTrustAccessGroupIncludeGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeGsuite {
    string[] Email,
    string IdentityProviderId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.email">Email</a></code> | <code>string[]</code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Google Workspace identity provider. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuite.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupIncludeOkta <a name="ZeroTrustAccessGroupIncludeOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeOkta {
    string IdentityProviderId = null,
    string[] Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.name">Name</a></code> | <code>string[]</code> | The name of the Okta Group. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOkta.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

### ZeroTrustAccessGroupIncludeSaml <a name="ZeroTrustAccessGroupIncludeSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeSaml {
    string AttributeName = null,
    string AttributeValue = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeName">AttributeName</a></code> | <code>string</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeValue">AttributeValue</a></code> | <code>string</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your SAML identity provider. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSaml.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequire <a name="ZeroTrustAccessGroupRequire" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequire {
    object AnyValidServiceToken = null,
    object AuthContext = null,
    string AuthMethod = null,
    object Azure = null,
    object Certificate = null,
    string CommonName = null,
    string[] CommonNames = null,
    string[] DevicePosture = null,
    string[] Email = null,
    string[] EmailDomain = null,
    string[] EmailList = null,
    object Everyone = null,
    object ExternalEvaluation = null,
    string[] Geo = null,
    object Github = null,
    string[] Group = null,
    object Gsuite = null,
    string[] Ip = null,
    string[] IpList = null,
    string[] LoginMethod = null,
    object Okta = null,
    object Saml = null,
    string[] ServiceToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | Matches any valid Access service token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authContext">AuthContext</a></code> | <code>object</code> | auth_context block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authMethod">AuthMethod</a></code> | <code>string</code> | The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.azure">Azure</a></code> | <code>object</code> | azure block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.certificate">Certificate</a></code> | <code>object</code> | Matches any valid client certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonName">CommonName</a></code> | <code>string</code> | Matches a valid client certificate common name. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonNames">CommonNames</a></code> | <code>string[]</code> | Overflow field if you need to have multiple common_name rules in a single policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | The ID of a device posture integration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.email">Email</a></code> | <code>string[]</code> | The email of the user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | The email domain to match. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailList">EmailList</a></code> | <code>string[]</code> | The ID of a previously created email list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.everyone">Everyone</a></code> | <code>object</code> | Matches everyone. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.externalEvaluation">ExternalEvaluation</a></code> | <code>object</code> | external_evaluation block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.geo">Geo</a></code> | <code>string[]</code> | Matches a specific country. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.github">Github</a></code> | <code>object</code> | github block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.group">Group</a></code> | <code>string[]</code> | The ID of a previously created Access group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.gsuite">Gsuite</a></code> | <code>object</code> | gsuite block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ip">Ip</a></code> | <code>string[]</code> | An IPv4 or IPv6 CIDR block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ipList">IpList</a></code> | <code>string[]</code> | The ID of a previously created IP list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | The ID of a configured identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.okta">Okta</a></code> | <code>object</code> | okta block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.saml">Saml</a></code> | <code>object</code> | saml block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | The ID of an Access service token. |

---

##### `AnyValidServiceToken`<sup>Optional</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; set; }
```

- *Type:* object

Matches any valid Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#any_valid_service_token ZeroTrustAccessGroup#any_valid_service_token}

---

##### `AuthContext`<sup>Optional</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authContext"></a>

```csharp
public object AuthContext { get; set; }
```

- *Type:* object

auth_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#auth_context ZeroTrustAccessGroup#auth_context}

---

##### `AuthMethod`<sup>Optional</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.authMethod"></a>

```csharp
public string AuthMethod { get; set; }
```

- *Type:* string

The type of authentication method. Refer to https://datatracker.ietf.org/doc/html/rfc8176#section-2 for possible types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#auth_method ZeroTrustAccessGroup#auth_method}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.azure"></a>

```csharp
public object Azure { get; set; }
```

- *Type:* object

azure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#azure ZeroTrustAccessGroup#azure}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.certificate"></a>

```csharp
public object Certificate { get; set; }
```

- *Type:* object

Matches any valid client certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#certificate ZeroTrustAccessGroup#certificate}

---

##### `CommonName`<sup>Optional</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonName"></a>

```csharp
public string CommonName { get; set; }
```

- *Type:* string

Matches a valid client certificate common name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#common_name ZeroTrustAccessGroup#common_name}

---

##### `CommonNames`<sup>Optional</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.commonNames"></a>

```csharp
public string[] CommonNames { get; set; }
```

- *Type:* string[]

Overflow field if you need to have multiple common_name rules in a single policy.

Use in place of the singular common_name field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#common_names ZeroTrustAccessGroup#common_names}

---

##### `DevicePosture`<sup>Optional</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; set; }
```

- *Type:* string[]

The ID of a device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#device_posture ZeroTrustAccessGroup#device_posture}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

The email of the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `EmailDomain`<sup>Optional</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; set; }
```

- *Type:* string[]

The email domain to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#email_domain ZeroTrustAccessGroup#email_domain}

---

##### `EmailList`<sup>Optional</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.emailList"></a>

```csharp
public string[] EmailList { get; set; }
```

- *Type:* string[]

The ID of a previously created email list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#email_list ZeroTrustAccessGroup#email_list}

---

##### `Everyone`<sup>Optional</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.everyone"></a>

```csharp
public object Everyone { get; set; }
```

- *Type:* object

Matches everyone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#everyone ZeroTrustAccessGroup#everyone}

---

##### `ExternalEvaluation`<sup>Optional</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.externalEvaluation"></a>

```csharp
public object ExternalEvaluation { get; set; }
```

- *Type:* object

external_evaluation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#external_evaluation ZeroTrustAccessGroup#external_evaluation}

---

##### `Geo`<sup>Optional</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.geo"></a>

```csharp
public string[] Geo { get; set; }
```

- *Type:* string[]

Matches a specific country.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#geo ZeroTrustAccessGroup#geo}

---

##### `Github`<sup>Optional</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.github"></a>

```csharp
public object Github { get; set; }
```

- *Type:* object

github block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#github ZeroTrustAccessGroup#github}

---

##### `Group`<sup>Optional</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.group"></a>

```csharp
public string[] Group { get; set; }
```

- *Type:* string[]

The ID of a previously created Access group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#group ZeroTrustAccessGroup#group}

---

##### `Gsuite`<sup>Optional</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.gsuite"></a>

```csharp
public object Gsuite { get; set; }
```

- *Type:* object

gsuite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#gsuite ZeroTrustAccessGroup#gsuite}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ip"></a>

```csharp
public string[] Ip { get; set; }
```

- *Type:* string[]

An IPv4 or IPv6 CIDR block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#ip ZeroTrustAccessGroup#ip}

---

##### `IpList`<sup>Optional</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.ipList"></a>

```csharp
public string[] IpList { get; set; }
```

- *Type:* string[]

The ID of a previously created IP list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#ip_list ZeroTrustAccessGroup#ip_list}

---

##### `LoginMethod`<sup>Optional</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; set; }
```

- *Type:* string[]

The ID of a configured identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#login_method ZeroTrustAccessGroup#login_method}

---

##### `Okta`<sup>Optional</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.okta"></a>

```csharp
public object Okta { get; set; }
```

- *Type:* object

okta block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#okta ZeroTrustAccessGroup#okta}

---

##### `Saml`<sup>Optional</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.saml"></a>

```csharp
public object Saml { get; set; }
```

- *Type:* object

saml block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#saml ZeroTrustAccessGroup#saml}

---

##### `ServiceToken`<sup>Optional</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequire.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; set; }
```

- *Type:* string[]

The ID of an Access service token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#service_token ZeroTrustAccessGroup#service_token}

---

### ZeroTrustAccessGroupRequireAuthContext <a name="ZeroTrustAccessGroupRequireAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireAuthContext {
    string AcId,
    string Id,
    string IdentityProviderId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.acId">AcId</a></code> | <code>string</code> | The ACID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.id">Id</a></code> | <code>string</code> | The ID of the Authentication Context. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure identity provider. |

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.acId"></a>

```csharp
public string AcId { get; set; }
```

- *Type:* string

The ACID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#ac_id ZeroTrustAccessGroup#ac_id}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The ID of the Authentication Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContext.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequireAzure <a name="ZeroTrustAccessGroupRequireAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireAzure {
    string[] Id = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.id">Id</a></code> | <code>string[]</code> | The ID of the Azure group or user. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of the Azure identity provider. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.id"></a>

```csharp
public string[] Id { get; set; }
```

- *Type:* string[]

The ID of the Azure group or user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#id ZeroTrustAccessGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzure.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of the Azure identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequireExternalEvaluation <a name="ZeroTrustAccessGroupRequireExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireExternalEvaluation {
    string EvaluateUrl = null,
    string KeysUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | The API endpoint containing your business logic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.keysUrl">KeysUrl</a></code> | <code>string</code> | The API endpoint containing the key that Access uses to verify that the response came from your API. |

---

##### `EvaluateUrl`<sup>Optional</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; set; }
```

- *Type:* string

The API endpoint containing your business logic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#evaluate_url ZeroTrustAccessGroup#evaluate_url}

---

##### `KeysUrl`<sup>Optional</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluation.property.keysUrl"></a>

```csharp
public string KeysUrl { get; set; }
```

- *Type:* string

The API endpoint containing the key that Access uses to verify that the response came from your API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#keys_url ZeroTrustAccessGroup#keys_url}

---

### ZeroTrustAccessGroupRequireGithub <a name="ZeroTrustAccessGroupRequireGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireGithub {
    string IdentityProviderId = null,
    string Name = null,
    string[] Teams = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Github identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.name">Name</a></code> | <code>string</code> | The name of the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.teams">Teams</a></code> | <code>string[]</code> | The teams that should be matched. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Github identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithub.property.teams"></a>

```csharp
public string[] Teams { get; set; }
```

- *Type:* string[]

The teams that should be matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#teams ZeroTrustAccessGroup#teams}

---

### ZeroTrustAccessGroupRequireGsuite <a name="ZeroTrustAccessGroupRequireGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireGsuite {
    string[] Email,
    string IdentityProviderId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.email">Email</a></code> | <code>string[]</code> | The email of the Google Workspace group. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Google Workspace identity provider. |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.email"></a>

```csharp
public string[] Email { get; set; }
```

- *Type:* string[]

The email of the Google Workspace group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#email ZeroTrustAccessGroup#email}

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuite.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Google Workspace identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

### ZeroTrustAccessGroupRequireOkta <a name="ZeroTrustAccessGroupRequireOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireOkta {
    string IdentityProviderId = null,
    string[] Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your Okta identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.name">Name</a></code> | <code>string[]</code> | The name of the Okta Group. |

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your Okta identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOkta.property.name"></a>

```csharp
public string[] Name { get; set; }
```

- *Type:* string[]

The name of the Okta Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#name ZeroTrustAccessGroup#name}

---

### ZeroTrustAccessGroupRequireSaml <a name="ZeroTrustAccessGroupRequireSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireSaml {
    string AttributeName = null,
    string AttributeValue = null,
    string IdentityProviderId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeName">AttributeName</a></code> | <code>string</code> | The name of the SAML attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeValue">AttributeValue</a></code> | <code>string</code> | The SAML attribute value to look for. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | The ID of your SAML identity provider. |

---

##### `AttributeName`<sup>Optional</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeName"></a>

```csharp
public string AttributeName { get; set; }
```

- *Type:* string

The name of the SAML attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#attribute_name ZeroTrustAccessGroup#attribute_name}

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.attributeValue"></a>

```csharp
public string AttributeValue { get; set; }
```

- *Type:* string

The SAML attribute value to look for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#attribute_value ZeroTrustAccessGroup#attribute_value}

---

##### `IdentityProviderId`<sup>Optional</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSaml.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; set; }
```

- *Type:* string

The ID of your SAML identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.47.0/docs/resources/zero_trust_access_group#identity_provider_id ZeroTrustAccessGroup#identity_provider_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessGroupExcludeAuthContextList <a name="ZeroTrustAccessGroupExcludeAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeAuthContextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.get"></a>

```csharp
private ZeroTrustAccessGroupExcludeAuthContextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeAuthContextOutputReference <a name="ZeroTrustAccessGroupExcludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeAuthContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acIdInput">AcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acId">AcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcIdInput`<sup>Optional</sup> <a name="AcIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acIdInput"></a>

```csharp
public string AcIdInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.acId"></a>

```csharp
public string AcId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeAzureList <a name="ZeroTrustAccessGroupExcludeAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeAzureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.get"></a>

```csharp
private ZeroTrustAccessGroupExcludeAzureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeAzureOutputReference <a name="ZeroTrustAccessGroupExcludeAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.idInput">IdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.id">Id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.idInput"></a>

```csharp
public string[] IdInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.id"></a>

```csharp
public string[] Id { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeExternalEvaluationList <a name="ZeroTrustAccessGroupExcludeExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeExternalEvaluationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.get"></a>

```csharp
private ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference <a name="ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```csharp
private void ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```csharp
private void ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```csharp
public string EvaluateUrlInput { get; }
```

- *Type:* string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```csharp
public string KeysUrlInput { get; }
```

- *Type:* string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; }
```

- *Type:* string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.keysUrl"></a>

```csharp
public string KeysUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeGithubList <a name="ZeroTrustAccessGroupExcludeGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.get"></a>

```csharp
private ZeroTrustAccessGroupExcludeGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeGithubOutputReference <a name="ZeroTrustAccessGroupExcludeGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeGsuiteList <a name="ZeroTrustAccessGroupExcludeGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeGsuiteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.get"></a>

```csharp
private ZeroTrustAccessGroupExcludeGsuiteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeGsuiteOutputReference <a name="ZeroTrustAccessGroupExcludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeGsuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeList <a name="ZeroTrustAccessGroupExcludeList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.get"></a>

```csharp
private ZeroTrustAccessGroupExcludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeOktaList <a name="ZeroTrustAccessGroupExcludeOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeOktaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.get"></a>

```csharp
private ZeroTrustAccessGroupExcludeOktaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeOktaOutputReference <a name="ZeroTrustAccessGroupExcludeOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeOktaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeOutputReference <a name="ZeroTrustAccessGroupExcludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAuthContext">PutAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthContext">ResetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonNames">ResetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailList">ResetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthContext` <a name="PutAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAuthContext"></a>

```csharp
private void PutAuthContext(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* object

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAzure"></a>

```csharp
private void PutAzure(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putAzure.parameter.value"></a>

- *Type:* object

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putExternalEvaluation"></a>

```csharp
private void PutExternalEvaluation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* object

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGithub"></a>

```csharp
private void PutGithub(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGithub.parameter.value"></a>

- *Type:* object

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGsuite"></a>

```csharp
private void PutGsuite(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* object

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putOkta"></a>

```csharp
private void PutOkta(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putOkta.parameter.value"></a>

- *Type:* object

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putSaml"></a>

```csharp
private void PutSaml(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.putSaml.parameter.value"></a>

- *Type:* object

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAnyValidServiceToken"></a>

```csharp
private void ResetAnyValidServiceToken()
```

##### `ResetAuthContext` <a name="ResetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthContext"></a>

```csharp
private void ResetAuthContext()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetCommonNames` <a name="ResetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetCommonNames"></a>

```csharp
private void ResetCommonNames()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetDevicePosture"></a>

```csharp
private void ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailDomain"></a>

```csharp
private void ResetEmailDomain()
```

##### `ResetEmailList` <a name="ResetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEmailList"></a>

```csharp
private void ResetEmailList()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetEveryone"></a>

```csharp
private void ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetExternalEvaluation"></a>

```csharp
private void ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetGsuite"></a>

```csharp
private void ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetIpList"></a>

```csharp
private void ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetLoginMethod"></a>

```csharp
private void ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetOkta"></a>

```csharp
private void ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.resetServiceToken"></a>

```csharp
private void ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContext">AuthContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList">ZeroTrustAccessGroupExcludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList">ZeroTrustAccessGroupExcludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList">ZeroTrustAccessGroupExcludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList">ZeroTrustAccessGroupExcludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList">ZeroTrustAccessGroupExcludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList">ZeroTrustAccessGroupExcludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList">ZeroTrustAccessGroupExcludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContextInput">AuthContextInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azureInput">AzureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNamesInput">CommonNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailListInput">EmailListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geoInput">GeoInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.githubInput">GithubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.groupInput">GroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipInput">IpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.oktaInput">OktaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.samlInput">SamlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificate">Certificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNames">CommonNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailList">EmailList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyone">Everyone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geo">Geo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.group">Group</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ip">Ip</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthContext`<sup>Required</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContext"></a>

```csharp
public ZeroTrustAccessGroupExcludeAuthContextList AuthContext { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAuthContextList">ZeroTrustAccessGroupExcludeAuthContextList</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azure"></a>

```csharp
public ZeroTrustAccessGroupExcludeAzureList Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeAzureList">ZeroTrustAccessGroupExcludeAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluation"></a>

```csharp
public ZeroTrustAccessGroupExcludeExternalEvaluationList ExternalEvaluation { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeExternalEvaluationList">ZeroTrustAccessGroupExcludeExternalEvaluationList</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.github"></a>

```csharp
public ZeroTrustAccessGroupExcludeGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGithubList">ZeroTrustAccessGroupExcludeGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuite"></a>

```csharp
public ZeroTrustAccessGroupExcludeGsuiteList Gsuite { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeGsuiteList">ZeroTrustAccessGroupExcludeGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.okta"></a>

```csharp
public ZeroTrustAccessGroupExcludeOktaList Okta { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOktaList">ZeroTrustAccessGroupExcludeOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.saml"></a>

```csharp
public ZeroTrustAccessGroupExcludeSamlList Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList">ZeroTrustAccessGroupExcludeSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceTokenInput"></a>

```csharp
public object AnyValidServiceTokenInput { get; }
```

- *Type:* object

---

##### `AuthContextInput`<sup>Optional</sup> <a name="AuthContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authContextInput"></a>

```csharp
public object AuthContextInput { get; }
```

- *Type:* object

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.azureInput"></a>

```csharp
public object AzureInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `CommonNamesInput`<sup>Optional</sup> <a name="CommonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNamesInput"></a>

```csharp
public string[] CommonNamesInput { get; }
```

- *Type:* string[]

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePostureInput"></a>

```csharp
public string[] DevicePostureInput { get; }
```

- *Type:* string[]

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomainInput"></a>

```csharp
public string[] EmailDomainInput { get; }
```

- *Type:* string[]

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `EmailListInput`<sup>Optional</sup> <a name="EmailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailListInput"></a>

```csharp
public string[] EmailListInput { get; }
```

- *Type:* string[]

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyoneInput"></a>

```csharp
public object EveryoneInput { get; }
```

- *Type:* object

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.externalEvaluationInput"></a>

```csharp
public object ExternalEvaluationInput { get; }
```

- *Type:* object

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geoInput"></a>

```csharp
public string[] GeoInput { get; }
```

- *Type:* string[]

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.githubInput"></a>

```csharp
public object GithubInput { get; }
```

- *Type:* object

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.groupInput"></a>

```csharp
public string[] GroupInput { get; }
```

- *Type:* string[]

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.gsuiteInput"></a>

```csharp
public object GsuiteInput { get; }
```

- *Type:* object

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipInput"></a>

```csharp
public string[] IpInput { get; }
```

- *Type:* string[]

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethodInput"></a>

```csharp
public string[] LoginMethodInput { get; }
```

- *Type:* string[]

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.oktaInput"></a>

```csharp
public object OktaInput { get; }
```

- *Type:* object

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.samlInput"></a>

```csharp
public object SamlInput { get; }
```

- *Type:* object

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceTokenInput"></a>

```csharp
public string[] ServiceTokenInput { get; }
```

- *Type:* string[]

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; }
```

- *Type:* object

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.certificate"></a>

```csharp
public object Certificate { get; }
```

- *Type:* object

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `CommonNames`<sup>Required</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.commonNames"></a>

```csharp
public string[] CommonNames { get; }
```

- *Type:* string[]

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; }
```

- *Type:* string[]

---

##### `EmailList`<sup>Required</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.emailList"></a>

```csharp
public string[] EmailList { get; }
```

- *Type:* string[]

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.everyone"></a>

```csharp
public object Everyone { get; }
```

- *Type:* object

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.geo"></a>

```csharp
public string[] Geo { get; }
```

- *Type:* string[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.group"></a>

```csharp
public string[] Group { get; }
```

- *Type:* string[]

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ip"></a>

```csharp
public string[] Ip { get; }
```

- *Type:* string[]

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; }
```

- *Type:* string[]

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeSamlList <a name="ZeroTrustAccessGroupExcludeSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeSamlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.get"></a>

```csharp
private ZeroTrustAccessGroupExcludeSamlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupExcludeSamlOutputReference <a name="ZeroTrustAccessGroupExcludeSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupExcludeSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupExcludeSamlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeAuthContextList <a name="ZeroTrustAccessGroupIncludeAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeAuthContextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.get"></a>

```csharp
private ZeroTrustAccessGroupIncludeAuthContextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeAuthContextOutputReference <a name="ZeroTrustAccessGroupIncludeAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeAuthContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acIdInput">AcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acId">AcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcIdInput`<sup>Optional</sup> <a name="AcIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acIdInput"></a>

```csharp
public string AcIdInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.acId"></a>

```csharp
public string AcId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeAzureList <a name="ZeroTrustAccessGroupIncludeAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeAzureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.get"></a>

```csharp
private ZeroTrustAccessGroupIncludeAzureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeAzureOutputReference <a name="ZeroTrustAccessGroupIncludeAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.idInput">IdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.id">Id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.idInput"></a>

```csharp
public string[] IdInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.id"></a>

```csharp
public string[] Id { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeExternalEvaluationList <a name="ZeroTrustAccessGroupIncludeExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeExternalEvaluationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.get"></a>

```csharp
private ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference <a name="ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```csharp
private void ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.resetKeysUrl"></a>

```csharp
private void ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```csharp
public string EvaluateUrlInput { get; }
```

- *Type:* string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrlInput"></a>

```csharp
public string KeysUrlInput { get; }
```

- *Type:* string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; }
```

- *Type:* string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.keysUrl"></a>

```csharp
public string KeysUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeGithubList <a name="ZeroTrustAccessGroupIncludeGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.get"></a>

```csharp
private ZeroTrustAccessGroupIncludeGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeGithubOutputReference <a name="ZeroTrustAccessGroupIncludeGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeGsuiteList <a name="ZeroTrustAccessGroupIncludeGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeGsuiteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.get"></a>

```csharp
private ZeroTrustAccessGroupIncludeGsuiteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeGsuiteOutputReference <a name="ZeroTrustAccessGroupIncludeGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeGsuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeList <a name="ZeroTrustAccessGroupIncludeList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.get"></a>

```csharp
private ZeroTrustAccessGroupIncludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeOktaList <a name="ZeroTrustAccessGroupIncludeOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeOktaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.get"></a>

```csharp
private ZeroTrustAccessGroupIncludeOktaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeOktaOutputReference <a name="ZeroTrustAccessGroupIncludeOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeOktaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeOutputReference <a name="ZeroTrustAccessGroupIncludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAuthContext">PutAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthContext">ResetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonNames">ResetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailList">ResetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthContext` <a name="PutAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAuthContext"></a>

```csharp
private void PutAuthContext(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAuthContext.parameter.value"></a>

- *Type:* object

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAzure"></a>

```csharp
private void PutAzure(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putAzure.parameter.value"></a>

- *Type:* object

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putExternalEvaluation"></a>

```csharp
private void PutExternalEvaluation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* object

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGithub"></a>

```csharp
private void PutGithub(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGithub.parameter.value"></a>

- *Type:* object

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGsuite"></a>

```csharp
private void PutGsuite(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putGsuite.parameter.value"></a>

- *Type:* object

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putOkta"></a>

```csharp
private void PutOkta(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putOkta.parameter.value"></a>

- *Type:* object

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putSaml"></a>

```csharp
private void PutSaml(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.putSaml.parameter.value"></a>

- *Type:* object

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAnyValidServiceToken"></a>

```csharp
private void ResetAnyValidServiceToken()
```

##### `ResetAuthContext` <a name="ResetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthContext"></a>

```csharp
private void ResetAuthContext()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetCommonNames` <a name="ResetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetCommonNames"></a>

```csharp
private void ResetCommonNames()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetDevicePosture"></a>

```csharp
private void ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailDomain"></a>

```csharp
private void ResetEmailDomain()
```

##### `ResetEmailList` <a name="ResetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEmailList"></a>

```csharp
private void ResetEmailList()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetEveryone"></a>

```csharp
private void ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetExternalEvaluation"></a>

```csharp
private void ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetGsuite"></a>

```csharp
private void ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetIpList"></a>

```csharp
private void ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetLoginMethod"></a>

```csharp
private void ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetOkta"></a>

```csharp
private void ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.resetServiceToken"></a>

```csharp
private void ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContext">AuthContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList">ZeroTrustAccessGroupIncludeAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList">ZeroTrustAccessGroupIncludeAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList">ZeroTrustAccessGroupIncludeExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList">ZeroTrustAccessGroupIncludeGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList">ZeroTrustAccessGroupIncludeGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList">ZeroTrustAccessGroupIncludeOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList">ZeroTrustAccessGroupIncludeSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContextInput">AuthContextInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azureInput">AzureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNamesInput">CommonNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailListInput">EmailListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geoInput">GeoInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.githubInput">GithubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.groupInput">GroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipInput">IpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.oktaInput">OktaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.samlInput">SamlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificate">Certificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNames">CommonNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailList">EmailList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyone">Everyone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geo">Geo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.group">Group</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ip">Ip</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthContext`<sup>Required</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContext"></a>

```csharp
public ZeroTrustAccessGroupIncludeAuthContextList AuthContext { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAuthContextList">ZeroTrustAccessGroupIncludeAuthContextList</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azure"></a>

```csharp
public ZeroTrustAccessGroupIncludeAzureList Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeAzureList">ZeroTrustAccessGroupIncludeAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluation"></a>

```csharp
public ZeroTrustAccessGroupIncludeExternalEvaluationList ExternalEvaluation { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeExternalEvaluationList">ZeroTrustAccessGroupIncludeExternalEvaluationList</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.github"></a>

```csharp
public ZeroTrustAccessGroupIncludeGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGithubList">ZeroTrustAccessGroupIncludeGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuite"></a>

```csharp
public ZeroTrustAccessGroupIncludeGsuiteList Gsuite { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeGsuiteList">ZeroTrustAccessGroupIncludeGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.okta"></a>

```csharp
public ZeroTrustAccessGroupIncludeOktaList Okta { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOktaList">ZeroTrustAccessGroupIncludeOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.saml"></a>

```csharp
public ZeroTrustAccessGroupIncludeSamlList Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList">ZeroTrustAccessGroupIncludeSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceTokenInput"></a>

```csharp
public object AnyValidServiceTokenInput { get; }
```

- *Type:* object

---

##### `AuthContextInput`<sup>Optional</sup> <a name="AuthContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authContextInput"></a>

```csharp
public object AuthContextInput { get; }
```

- *Type:* object

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.azureInput"></a>

```csharp
public object AzureInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `CommonNamesInput`<sup>Optional</sup> <a name="CommonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNamesInput"></a>

```csharp
public string[] CommonNamesInput { get; }
```

- *Type:* string[]

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePostureInput"></a>

```csharp
public string[] DevicePostureInput { get; }
```

- *Type:* string[]

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomainInput"></a>

```csharp
public string[] EmailDomainInput { get; }
```

- *Type:* string[]

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `EmailListInput`<sup>Optional</sup> <a name="EmailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailListInput"></a>

```csharp
public string[] EmailListInput { get; }
```

- *Type:* string[]

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyoneInput"></a>

```csharp
public object EveryoneInput { get; }
```

- *Type:* object

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.externalEvaluationInput"></a>

```csharp
public object ExternalEvaluationInput { get; }
```

- *Type:* object

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geoInput"></a>

```csharp
public string[] GeoInput { get; }
```

- *Type:* string[]

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.githubInput"></a>

```csharp
public object GithubInput { get; }
```

- *Type:* object

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.groupInput"></a>

```csharp
public string[] GroupInput { get; }
```

- *Type:* string[]

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.gsuiteInput"></a>

```csharp
public object GsuiteInput { get; }
```

- *Type:* object

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipInput"></a>

```csharp
public string[] IpInput { get; }
```

- *Type:* string[]

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethodInput"></a>

```csharp
public string[] LoginMethodInput { get; }
```

- *Type:* string[]

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.oktaInput"></a>

```csharp
public object OktaInput { get; }
```

- *Type:* object

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.samlInput"></a>

```csharp
public object SamlInput { get; }
```

- *Type:* object

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceTokenInput"></a>

```csharp
public string[] ServiceTokenInput { get; }
```

- *Type:* string[]

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; }
```

- *Type:* object

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.certificate"></a>

```csharp
public object Certificate { get; }
```

- *Type:* object

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `CommonNames`<sup>Required</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.commonNames"></a>

```csharp
public string[] CommonNames { get; }
```

- *Type:* string[]

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; }
```

- *Type:* string[]

---

##### `EmailList`<sup>Required</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.emailList"></a>

```csharp
public string[] EmailList { get; }
```

- *Type:* string[]

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.everyone"></a>

```csharp
public object Everyone { get; }
```

- *Type:* object

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.geo"></a>

```csharp
public string[] Geo { get; }
```

- *Type:* string[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.group"></a>

```csharp
public string[] Group { get; }
```

- *Type:* string[]

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ip"></a>

```csharp
public string[] Ip { get; }
```

- *Type:* string[]

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; }
```

- *Type:* string[]

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeSamlList <a name="ZeroTrustAccessGroupIncludeSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeSamlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.get"></a>

```csharp
private ZeroTrustAccessGroupIncludeSamlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupIncludeSamlOutputReference <a name="ZeroTrustAccessGroupIncludeSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupIncludeSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupIncludeSamlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireAuthContextList <a name="ZeroTrustAccessGroupRequireAuthContextList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireAuthContextList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.get"></a>

```csharp
private ZeroTrustAccessGroupRequireAuthContextOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireAuthContextOutputReference <a name="ZeroTrustAccessGroupRequireAuthContextOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireAuthContextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acIdInput">AcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acId">AcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AcIdInput`<sup>Optional</sup> <a name="AcIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acIdInput"></a>

```csharp
public string AcIdInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `AcId`<sup>Required</sup> <a name="AcId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.acId"></a>

```csharp
public string AcId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireAzureList <a name="ZeroTrustAccessGroupRequireAzureList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireAzureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.get"></a>

```csharp
private ZeroTrustAccessGroupRequireAzureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireAzureOutputReference <a name="ZeroTrustAccessGroupRequireAzureOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireAzureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.idInput">IdInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.id">Id</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.idInput"></a>

```csharp
public string[] IdInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.id"></a>

```csharp
public string[] Id { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireExternalEvaluationList <a name="ZeroTrustAccessGroupRequireExternalEvaluationList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireExternalEvaluationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.get"></a>

```csharp
private ZeroTrustAccessGroupRequireExternalEvaluationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireExternalEvaluationOutputReference <a name="ZeroTrustAccessGroupRequireExternalEvaluationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireExternalEvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetEvaluateUrl">ResetEvaluateUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetKeysUrl">ResetKeysUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvaluateUrl` <a name="ResetEvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetEvaluateUrl"></a>

```csharp
private void ResetEvaluateUrl()
```

##### `ResetKeysUrl` <a name="ResetKeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.resetKeysUrl"></a>

```csharp
private void ResetKeysUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrlInput">EvaluateUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrlInput">KeysUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrl">EvaluateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrl">KeysUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EvaluateUrlInput`<sup>Optional</sup> <a name="EvaluateUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrlInput"></a>

```csharp
public string EvaluateUrlInput { get; }
```

- *Type:* string

---

##### `KeysUrlInput`<sup>Optional</sup> <a name="KeysUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrlInput"></a>

```csharp
public string KeysUrlInput { get; }
```

- *Type:* string

---

##### `EvaluateUrl`<sup>Required</sup> <a name="EvaluateUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.evaluateUrl"></a>

```csharp
public string EvaluateUrl { get; }
```

- *Type:* string

---

##### `KeysUrl`<sup>Required</sup> <a name="KeysUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.keysUrl"></a>

```csharp
public string KeysUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireGithubList <a name="ZeroTrustAccessGroupRequireGithubList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireGithubList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.get"></a>

```csharp
private ZeroTrustAccessGroupRequireGithubOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireGithubOutputReference <a name="ZeroTrustAccessGroupRequireGithubOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireGithubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.resetTeams"></a>

```csharp
private void ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teamsInput">TeamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teams">Teams</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teamsInput"></a>

```csharp
public string[] TeamsInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.teams"></a>

```csharp
public string[] Teams { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireGsuiteList <a name="ZeroTrustAccessGroupRequireGsuiteList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireGsuiteList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.get"></a>

```csharp
private ZeroTrustAccessGroupRequireGsuiteOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireGsuiteOutputReference <a name="ZeroTrustAccessGroupRequireGsuiteOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireGsuiteOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireList <a name="ZeroTrustAccessGroupRequireList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.get"></a>

```csharp
private ZeroTrustAccessGroupRequireOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireOktaList <a name="ZeroTrustAccessGroupRequireOktaList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireOktaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.get"></a>

```csharp
private ZeroTrustAccessGroupRequireOktaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireOktaOutputReference <a name="ZeroTrustAccessGroupRequireOktaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireOktaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.nameInput">NameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.name">Name</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.nameInput"></a>

```csharp
public string[] NameInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.name"></a>

```csharp
public string[] Name { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireOutputReference <a name="ZeroTrustAccessGroupRequireOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAuthContext">PutAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putExternalEvaluation">PutExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGithub">PutGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGsuite">PutGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putOkta">PutOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putSaml">PutSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAnyValidServiceToken">ResetAnyValidServiceToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthContext">ResetAuthContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthMethod">ResetAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonName">ResetCommonName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonNames">ResetCommonNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetDevicePosture">ResetDevicePosture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailDomain">ResetEmailDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailList">ResetEmailList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEveryone">ResetEveryone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetExternalEvaluation">ResetExternalEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGeo">ResetGeo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGithub">ResetGithub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGroup">ResetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGsuite">ResetGsuite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIpList">ResetIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetLoginMethod">ResetLoginMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetOkta">ResetOkta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetSaml">ResetSaml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetServiceToken">ResetServiceToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthContext` <a name="PutAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAuthContext"></a>

```csharp
private void PutAuthContext(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAuthContext.parameter.value"></a>

- *Type:* object

---

##### `PutAzure` <a name="PutAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAzure"></a>

```csharp
private void PutAzure(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putAzure.parameter.value"></a>

- *Type:* object

---

##### `PutExternalEvaluation` <a name="PutExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putExternalEvaluation"></a>

```csharp
private void PutExternalEvaluation(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putExternalEvaluation.parameter.value"></a>

- *Type:* object

---

##### `PutGithub` <a name="PutGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGithub"></a>

```csharp
private void PutGithub(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGithub.parameter.value"></a>

- *Type:* object

---

##### `PutGsuite` <a name="PutGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGsuite"></a>

```csharp
private void PutGsuite(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putGsuite.parameter.value"></a>

- *Type:* object

---

##### `PutOkta` <a name="PutOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putOkta"></a>

```csharp
private void PutOkta(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putOkta.parameter.value"></a>

- *Type:* object

---

##### `PutSaml` <a name="PutSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putSaml"></a>

```csharp
private void PutSaml(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.putSaml.parameter.value"></a>

- *Type:* object

---

##### `ResetAnyValidServiceToken` <a name="ResetAnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAnyValidServiceToken"></a>

```csharp
private void ResetAnyValidServiceToken()
```

##### `ResetAuthContext` <a name="ResetAuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthContext"></a>

```csharp
private void ResetAuthContext()
```

##### `ResetAuthMethod` <a name="ResetAuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAuthMethod"></a>

```csharp
private void ResetAuthMethod()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetAzure"></a>

```csharp
private void ResetAzure()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCommonName` <a name="ResetCommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonName"></a>

```csharp
private void ResetCommonName()
```

##### `ResetCommonNames` <a name="ResetCommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetCommonNames"></a>

```csharp
private void ResetCommonNames()
```

##### `ResetDevicePosture` <a name="ResetDevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetDevicePosture"></a>

```csharp
private void ResetDevicePosture()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetEmailDomain` <a name="ResetEmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailDomain"></a>

```csharp
private void ResetEmailDomain()
```

##### `ResetEmailList` <a name="ResetEmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEmailList"></a>

```csharp
private void ResetEmailList()
```

##### `ResetEveryone` <a name="ResetEveryone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetEveryone"></a>

```csharp
private void ResetEveryone()
```

##### `ResetExternalEvaluation` <a name="ResetExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetExternalEvaluation"></a>

```csharp
private void ResetExternalEvaluation()
```

##### `ResetGeo` <a name="ResetGeo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGeo"></a>

```csharp
private void ResetGeo()
```

##### `ResetGithub` <a name="ResetGithub" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGithub"></a>

```csharp
private void ResetGithub()
```

##### `ResetGroup` <a name="ResetGroup" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGroup"></a>

```csharp
private void ResetGroup()
```

##### `ResetGsuite` <a name="ResetGsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetGsuite"></a>

```csharp
private void ResetGsuite()
```

##### `ResetIp` <a name="ResetIp" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetIpList` <a name="ResetIpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetIpList"></a>

```csharp
private void ResetIpList()
```

##### `ResetLoginMethod` <a name="ResetLoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetLoginMethod"></a>

```csharp
private void ResetLoginMethod()
```

##### `ResetOkta` <a name="ResetOkta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetOkta"></a>

```csharp
private void ResetOkta()
```

##### `ResetSaml` <a name="ResetSaml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetSaml"></a>

```csharp
private void ResetSaml()
```

##### `ResetServiceToken` <a name="ResetServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.resetServiceToken"></a>

```csharp
private void ResetServiceToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContext">AuthContext</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList">ZeroTrustAccessGroupRequireAuthContextList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList">ZeroTrustAccessGroupRequireAzureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluation">ExternalEvaluation</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList">ZeroTrustAccessGroupRequireExternalEvaluationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList">ZeroTrustAccessGroupRequireGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuite">Gsuite</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList">ZeroTrustAccessGroupRequireGsuiteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.okta">Okta</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList">ZeroTrustAccessGroupRequireOktaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.saml">Saml</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList">ZeroTrustAccessGroupRequireSamlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceTokenInput">AnyValidServiceTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContextInput">AuthContextInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethodInput">AuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azureInput">AzureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificateInput">CertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNameInput">CommonNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNamesInput">CommonNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePostureInput">DevicePostureInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomainInput">EmailDomainInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailInput">EmailInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailListInput">EmailListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyoneInput">EveryoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluationInput">ExternalEvaluationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geoInput">GeoInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.githubInput">GithubInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.groupInput">GroupInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuiteInput">GsuiteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipInput">IpInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipListInput">IpListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethodInput">LoginMethodInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.oktaInput">OktaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.samlInput">SamlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceTokenInput">ServiceTokenInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceToken">AnyValidServiceToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethod">AuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificate">Certificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonName">CommonName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNames">CommonNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePosture">DevicePosture</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.email">Email</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomain">EmailDomain</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailList">EmailList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyone">Everyone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geo">Geo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.group">Group</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ip">Ip</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipList">IpList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethod">LoginMethod</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceToken">ServiceToken</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthContext`<sup>Required</sup> <a name="AuthContext" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContext"></a>

```csharp
public ZeroTrustAccessGroupRequireAuthContextList AuthContext { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAuthContextList">ZeroTrustAccessGroupRequireAuthContextList</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azure"></a>

```csharp
public ZeroTrustAccessGroupRequireAzureList Azure { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireAzureList">ZeroTrustAccessGroupRequireAzureList</a>

---

##### `ExternalEvaluation`<sup>Required</sup> <a name="ExternalEvaluation" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluation"></a>

```csharp
public ZeroTrustAccessGroupRequireExternalEvaluationList ExternalEvaluation { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireExternalEvaluationList">ZeroTrustAccessGroupRequireExternalEvaluationList</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.github"></a>

```csharp
public ZeroTrustAccessGroupRequireGithubList Github { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGithubList">ZeroTrustAccessGroupRequireGithubList</a>

---

##### `Gsuite`<sup>Required</sup> <a name="Gsuite" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuite"></a>

```csharp
public ZeroTrustAccessGroupRequireGsuiteList Gsuite { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireGsuiteList">ZeroTrustAccessGroupRequireGsuiteList</a>

---

##### `Okta`<sup>Required</sup> <a name="Okta" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.okta"></a>

```csharp
public ZeroTrustAccessGroupRequireOktaList Okta { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOktaList">ZeroTrustAccessGroupRequireOktaList</a>

---

##### `Saml`<sup>Required</sup> <a name="Saml" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.saml"></a>

```csharp
public ZeroTrustAccessGroupRequireSamlList Saml { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList">ZeroTrustAccessGroupRequireSamlList</a>

---

##### `AnyValidServiceTokenInput`<sup>Optional</sup> <a name="AnyValidServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceTokenInput"></a>

```csharp
public object AnyValidServiceTokenInput { get; }
```

- *Type:* object

---

##### `AuthContextInput`<sup>Optional</sup> <a name="AuthContextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authContextInput"></a>

```csharp
public object AuthContextInput { get; }
```

- *Type:* object

---

##### `AuthMethodInput`<sup>Optional</sup> <a name="AuthMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethodInput"></a>

```csharp
public string AuthMethodInput { get; }
```

- *Type:* string

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.azureInput"></a>

```csharp
public object AzureInput { get; }
```

- *Type:* object

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificateInput"></a>

```csharp
public object CertificateInput { get; }
```

- *Type:* object

---

##### `CommonNameInput`<sup>Optional</sup> <a name="CommonNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNameInput"></a>

```csharp
public string CommonNameInput { get; }
```

- *Type:* string

---

##### `CommonNamesInput`<sup>Optional</sup> <a name="CommonNamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNamesInput"></a>

```csharp
public string[] CommonNamesInput { get; }
```

- *Type:* string[]

---

##### `DevicePostureInput`<sup>Optional</sup> <a name="DevicePostureInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePostureInput"></a>

```csharp
public string[] DevicePostureInput { get; }
```

- *Type:* string[]

---

##### `EmailDomainInput`<sup>Optional</sup> <a name="EmailDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomainInput"></a>

```csharp
public string[] EmailDomainInput { get; }
```

- *Type:* string[]

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailInput"></a>

```csharp
public string[] EmailInput { get; }
```

- *Type:* string[]

---

##### `EmailListInput`<sup>Optional</sup> <a name="EmailListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailListInput"></a>

```csharp
public string[] EmailListInput { get; }
```

- *Type:* string[]

---

##### `EveryoneInput`<sup>Optional</sup> <a name="EveryoneInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyoneInput"></a>

```csharp
public object EveryoneInput { get; }
```

- *Type:* object

---

##### `ExternalEvaluationInput`<sup>Optional</sup> <a name="ExternalEvaluationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.externalEvaluationInput"></a>

```csharp
public object ExternalEvaluationInput { get; }
```

- *Type:* object

---

##### `GeoInput`<sup>Optional</sup> <a name="GeoInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geoInput"></a>

```csharp
public string[] GeoInput { get; }
```

- *Type:* string[]

---

##### `GithubInput`<sup>Optional</sup> <a name="GithubInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.githubInput"></a>

```csharp
public object GithubInput { get; }
```

- *Type:* object

---

##### `GroupInput`<sup>Optional</sup> <a name="GroupInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.groupInput"></a>

```csharp
public string[] GroupInput { get; }
```

- *Type:* string[]

---

##### `GsuiteInput`<sup>Optional</sup> <a name="GsuiteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.gsuiteInput"></a>

```csharp
public object GsuiteInput { get; }
```

- *Type:* object

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipInput"></a>

```csharp
public string[] IpInput { get; }
```

- *Type:* string[]

---

##### `IpListInput`<sup>Optional</sup> <a name="IpListInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipListInput"></a>

```csharp
public string[] IpListInput { get; }
```

- *Type:* string[]

---

##### `LoginMethodInput`<sup>Optional</sup> <a name="LoginMethodInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethodInput"></a>

```csharp
public string[] LoginMethodInput { get; }
```

- *Type:* string[]

---

##### `OktaInput`<sup>Optional</sup> <a name="OktaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.oktaInput"></a>

```csharp
public object OktaInput { get; }
```

- *Type:* object

---

##### `SamlInput`<sup>Optional</sup> <a name="SamlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.samlInput"></a>

```csharp
public object SamlInput { get; }
```

- *Type:* object

---

##### `ServiceTokenInput`<sup>Optional</sup> <a name="ServiceTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceTokenInput"></a>

```csharp
public string[] ServiceTokenInput { get; }
```

- *Type:* string[]

---

##### `AnyValidServiceToken`<sup>Required</sup> <a name="AnyValidServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.anyValidServiceToken"></a>

```csharp
public object AnyValidServiceToken { get; }
```

- *Type:* object

---

##### `AuthMethod`<sup>Required</sup> <a name="AuthMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.authMethod"></a>

```csharp
public string AuthMethod { get; }
```

- *Type:* string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.certificate"></a>

```csharp
public object Certificate { get; }
```

- *Type:* object

---

##### `CommonName`<sup>Required</sup> <a name="CommonName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonName"></a>

```csharp
public string CommonName { get; }
```

- *Type:* string

---

##### `CommonNames`<sup>Required</sup> <a name="CommonNames" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.commonNames"></a>

```csharp
public string[] CommonNames { get; }
```

- *Type:* string[]

---

##### `DevicePosture`<sup>Required</sup> <a name="DevicePosture" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.devicePosture"></a>

```csharp
public string[] DevicePosture { get; }
```

- *Type:* string[]

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.email"></a>

```csharp
public string[] Email { get; }
```

- *Type:* string[]

---

##### `EmailDomain`<sup>Required</sup> <a name="EmailDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailDomain"></a>

```csharp
public string[] EmailDomain { get; }
```

- *Type:* string[]

---

##### `EmailList`<sup>Required</sup> <a name="EmailList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.emailList"></a>

```csharp
public string[] EmailList { get; }
```

- *Type:* string[]

---

##### `Everyone`<sup>Required</sup> <a name="Everyone" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.everyone"></a>

```csharp
public object Everyone { get; }
```

- *Type:* object

---

##### `Geo`<sup>Required</sup> <a name="Geo" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.geo"></a>

```csharp
public string[] Geo { get; }
```

- *Type:* string[]

---

##### `Group`<sup>Required</sup> <a name="Group" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.group"></a>

```csharp
public string[] Group { get; }
```

- *Type:* string[]

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ip"></a>

```csharp
public string[] Ip { get; }
```

- *Type:* string[]

---

##### `IpList`<sup>Required</sup> <a name="IpList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.ipList"></a>

```csharp
public string[] IpList { get; }
```

- *Type:* string[]

---

##### `LoginMethod`<sup>Required</sup> <a name="LoginMethod" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.loginMethod"></a>

```csharp
public string[] LoginMethod { get; }
```

- *Type:* string[]

---

##### `ServiceToken`<sup>Required</sup> <a name="ServiceToken" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.serviceToken"></a>

```csharp
public string[] ServiceToken { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireSamlList <a name="ZeroTrustAccessGroupRequireSamlList" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireSamlList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.get"></a>

```csharp
private ZeroTrustAccessGroupRequireSamlOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessGroupRequireSamlOutputReference <a name="ZeroTrustAccessGroupRequireSamlOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessGroupRequireSamlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeName">ResetAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetIdentityProviderId">ResetIdentityProviderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeName` <a name="ResetAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeName"></a>

```csharp
private void ResetAttributeName()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetAttributeValue"></a>

```csharp
private void ResetAttributeValue()
```

##### `ResetIdentityProviderId` <a name="ResetIdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.resetIdentityProviderId"></a>

```csharp
private void ResetIdentityProviderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeNameInput">AttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderIdInput">IdentityProviderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderId">IdentityProviderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeNameInput`<sup>Optional</sup> <a name="AttributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeNameInput"></a>

```csharp
public string AttributeNameInput { get; }
```

- *Type:* string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValueInput"></a>

```csharp
public string AttributeValueInput { get; }
```

- *Type:* string

---

##### `IdentityProviderIdInput`<sup>Optional</sup> <a name="IdentityProviderIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderIdInput"></a>

```csharp
public string IdentityProviderIdInput { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `IdentityProviderId`<sup>Required</sup> <a name="IdentityProviderId" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.identityProviderId"></a>

```csharp
public string IdentityProviderId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessGroup.ZeroTrustAccessGroupRequireSamlOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



