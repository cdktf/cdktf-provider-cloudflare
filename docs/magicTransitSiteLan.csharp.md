# `magicTransitSiteLan` Submodule <a name="`magicTransitSiteLan` Submodule" id="@cdktf/provider-cloudflare.magicTransitSiteLan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSiteLan <a name="MagicTransitSiteLan" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan cloudflare_magic_transit_site_lan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLan(Construct Scope, string Id, MagicTransitSiteLanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig">MagicTransitSiteLanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig">MagicTransitSiteLanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putNat">PutNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putRoutedSubnets">PutRoutedSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putStaticAddressing">PutStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetHaLink">ResetHaLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetNat">ResetNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetRoutedSubnets">ResetRoutedSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetStaticAddressing">ResetStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetVlanTag">ResetVlanTag</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNat` <a name="PutNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putNat"></a>

```csharp
private void PutNat(MagicTransitSiteLanNat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putNat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a>

---

##### `PutRoutedSubnets` <a name="PutRoutedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putRoutedSubnets"></a>

```csharp
private void PutRoutedSubnets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putRoutedSubnets.parameter.value"></a>

- *Type:* object

---

##### `PutStaticAddressing` <a name="PutStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putStaticAddressing"></a>

```csharp
private void PutStaticAddressing(MagicTransitSiteLanStaticAddressing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.putStaticAddressing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a>

---

##### `ResetHaLink` <a name="ResetHaLink" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetHaLink"></a>

```csharp
private void ResetHaLink()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNat` <a name="ResetNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetNat"></a>

```csharp
private void ResetNat()
```

##### `ResetRoutedSubnets` <a name="ResetRoutedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetRoutedSubnets"></a>

```csharp
private void ResetRoutedSubnets()
```

##### `ResetStaticAddressing` <a name="ResetStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetStaticAddressing"></a>

```csharp
private void ResetStaticAddressing()
```

##### `ResetVlanTag` <a name="ResetVlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.resetVlanTag"></a>

```csharp
private void ResetVlanTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MagicTransitSiteLan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicTransitSiteLan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicTransitSiteLan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicTransitSiteLan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicTransitSiteLan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MagicTransitSiteLan resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicTransitSiteLan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicTransitSiteLan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MagicTransitSiteLan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nat">Nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference">MagicTransitSiteLanNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnets">RoutedSubnets</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList">MagicTransitSiteLanRoutedSubnetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressing">StaticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference">MagicTransitSiteLanStaticAddressingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLinkInput">HaLinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.natInput">NatInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physportInput">PhysportInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnetsInput">RoutedSubnetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteIdInput">SiteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressingInput">StaticAddressingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTagInput">VlanTagInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLink">HaLink</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physport">Physport</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteId">SiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTag">VlanTag</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Nat`<sup>Required</sup> <a name="Nat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nat"></a>

```csharp
public MagicTransitSiteLanNatOutputReference Nat { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference">MagicTransitSiteLanNatOutputReference</a>

---

##### `RoutedSubnets`<sup>Required</sup> <a name="RoutedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnets"></a>

```csharp
public MagicTransitSiteLanRoutedSubnetsList RoutedSubnets { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList">MagicTransitSiteLanRoutedSubnetsList</a>

---

##### `StaticAddressing`<sup>Required</sup> <a name="StaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressing"></a>

```csharp
public MagicTransitSiteLanStaticAddressingOutputReference StaticAddressing { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference">MagicTransitSiteLanStaticAddressingOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `HaLinkInput`<sup>Optional</sup> <a name="HaLinkInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLinkInput"></a>

```csharp
public object HaLinkInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NatInput`<sup>Optional</sup> <a name="NatInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.natInput"></a>

```csharp
public object NatInput { get; }
```

- *Type:* object

---

##### `PhysportInput`<sup>Optional</sup> <a name="PhysportInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physportInput"></a>

```csharp
public double PhysportInput { get; }
```

- *Type:* double

---

##### `RoutedSubnetsInput`<sup>Optional</sup> <a name="RoutedSubnetsInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.routedSubnetsInput"></a>

```csharp
public object RoutedSubnetsInput { get; }
```

- *Type:* object

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteIdInput"></a>

```csharp
public string SiteIdInput { get; }
```

- *Type:* string

---

##### `StaticAddressingInput`<sup>Optional</sup> <a name="StaticAddressingInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.staticAddressingInput"></a>

```csharp
public object StaticAddressingInput { get; }
```

- *Type:* object

---

##### `VlanTagInput`<sup>Optional</sup> <a name="VlanTagInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTagInput"></a>

```csharp
public double VlanTagInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `HaLink`<sup>Required</sup> <a name="HaLink" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.haLink"></a>

```csharp
public object HaLink { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Physport`<sup>Required</sup> <a name="Physport" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.physport"></a>

```csharp
public double Physport { get; }
```

- *Type:* double

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.siteId"></a>

```csharp
public string SiteId { get; }
```

- *Type:* string

---

##### `VlanTag`<sup>Required</sup> <a name="VlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.vlanTag"></a>

```csharp
public double VlanTag { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteLanConfig <a name="MagicTransitSiteLanConfig" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    double Physport,
    string SiteId,
    object HaLink = null,
    string Name = null,
    MagicTransitSiteLanNat Nat = null,
    object RoutedSubnets = null,
    MagicTransitSiteLanStaticAddressing StaticAddressing = null,
    double VlanTag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.physport">Physport</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#physport MagicTransitSiteLan#physport}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.siteId">SiteId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.haLink">HaLink</a></code> | <code>object</code> | mark true to use this LAN for HA probing. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#name MagicTransitSiteLan#name}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.nat">Nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.routedSubnets">RoutedSubnets</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#routed_subnets MagicTransitSiteLan#routed_subnets}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.staticAddressing">StaticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a></code> | If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP). |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.vlanTag">VlanTag</a></code> | <code>double</code> | VLAN ID. Use zero for untagged. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#account_id MagicTransitSiteLan#account_id}

---

##### `Physport`<sup>Required</sup> <a name="Physport" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.physport"></a>

```csharp
public double Physport { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#physport MagicTransitSiteLan#physport}.

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.siteId"></a>

```csharp
public string SiteId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#site_id MagicTransitSiteLan#site_id}

---

##### `HaLink`<sup>Optional</sup> <a name="HaLink" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.haLink"></a>

```csharp
public object HaLink { get; set; }
```

- *Type:* object

mark true to use this LAN for HA probing.

only works for site with HA turned on. only one LAN can be set as the ha_link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#ha_link MagicTransitSiteLan#ha_link}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#name MagicTransitSiteLan#name}.

---

##### `Nat`<sup>Optional</sup> <a name="Nat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.nat"></a>

```csharp
public MagicTransitSiteLanNat Nat { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat">MagicTransitSiteLanNat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}.

---

##### `RoutedSubnets`<sup>Optional</sup> <a name="RoutedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.routedSubnets"></a>

```csharp
public object RoutedSubnets { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#routed_subnets MagicTransitSiteLan#routed_subnets}.

---

##### `StaticAddressing`<sup>Optional</sup> <a name="StaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.staticAddressing"></a>

```csharp
public MagicTransitSiteLanStaticAddressing StaticAddressing { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing">MagicTransitSiteLanStaticAddressing</a>

If the site is not configured in high availability mode, this configuration is optional (if omitted, use DHCP).

However, if in high availability mode, static_address is required along with secondary and virtual address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#static_addressing MagicTransitSiteLan#static_addressing}

---

##### `VlanTag`<sup>Optional</sup> <a name="VlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanConfig.property.vlanTag"></a>

```csharp
public double VlanTag { get; set; }
```

- *Type:* double

VLAN ID. Use zero for untagged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#vlan_tag MagicTransitSiteLan#vlan_tag}

---

### MagicTransitSiteLanNat <a name="MagicTransitSiteLanNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanNat {
    string StaticPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat.property.staticPrefix">StaticPrefix</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |

---

##### `StaticPrefix`<sup>Optional</sup> <a name="StaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNat.property.staticPrefix"></a>

```csharp
public string StaticPrefix { get; set; }
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#static_prefix MagicTransitSiteLan#static_prefix}

---

### MagicTransitSiteLanRoutedSubnets <a name="MagicTransitSiteLanRoutedSubnets" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanRoutedSubnets {
    string NextHop,
    string Prefix,
    MagicTransitSiteLanRoutedSubnetsNat Nat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nextHop">NextHop</a></code> | <code>string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.prefix">Prefix</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nat">Nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}. |

---

##### `NextHop`<sup>Required</sup> <a name="NextHop" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nextHop"></a>

```csharp
public string NextHop { get; set; }
```

- *Type:* string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#next_hop MagicTransitSiteLan#next_hop}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#prefix MagicTransitSiteLan#prefix}

---

##### `Nat`<sup>Optional</sup> <a name="Nat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnets.property.nat"></a>

```csharp
public MagicTransitSiteLanRoutedSubnetsNat Nat { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#nat MagicTransitSiteLan#nat}.

---

### MagicTransitSiteLanRoutedSubnetsNat <a name="MagicTransitSiteLanRoutedSubnetsNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanRoutedSubnetsNat {
    string StaticPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat.property.staticPrefix">StaticPrefix</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |

---

##### `StaticPrefix`<sup>Optional</sup> <a name="StaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat.property.staticPrefix"></a>

```csharp
public string StaticPrefix { get; set; }
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#static_prefix MagicTransitSiteLan#static_prefix}

---

### MagicTransitSiteLanStaticAddressing <a name="MagicTransitSiteLanStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanStaticAddressing {
    string Address,
    MagicTransitSiteLanStaticAddressingDhcpRelay DhcpRelay = null,
    MagicTransitSiteLanStaticAddressingDhcpServer DhcpServer = null,
    string SecondaryAddress = null,
    string VirtualAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.address">Address</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpRelay">DhcpRelay</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#dhcp_relay MagicTransitSiteLan#dhcp_relay}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpServer">DhcpServer</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#dhcp_server MagicTransitSiteLan#dhcp_server}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.secondaryAddress">SecondaryAddress</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.virtualAddress">VirtualAddress</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#address MagicTransitSiteLan#address}

---

##### `DhcpRelay`<sup>Optional</sup> <a name="DhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpRelay"></a>

```csharp
public MagicTransitSiteLanStaticAddressingDhcpRelay DhcpRelay { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#dhcp_relay MagicTransitSiteLan#dhcp_relay}.

---

##### `DhcpServer`<sup>Optional</sup> <a name="DhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.dhcpServer"></a>

```csharp
public MagicTransitSiteLanStaticAddressingDhcpServer DhcpServer { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#dhcp_server MagicTransitSiteLan#dhcp_server}.

---

##### `SecondaryAddress`<sup>Optional</sup> <a name="SecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.secondaryAddress"></a>

```csharp
public string SecondaryAddress { get; set; }
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#secondary_address MagicTransitSiteLan#secondary_address}

---

##### `VirtualAddress`<sup>Optional</sup> <a name="VirtualAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressing.property.virtualAddress"></a>

```csharp
public string VirtualAddress { get; set; }
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#virtual_address MagicTransitSiteLan#virtual_address}

---

### MagicTransitSiteLanStaticAddressingDhcpRelay <a name="MagicTransitSiteLanStaticAddressingDhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanStaticAddressingDhcpRelay {
    string[] ServerAddresses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay.property.serverAddresses">ServerAddresses</a></code> | <code>string[]</code> | List of DHCP server IPs. |

---

##### `ServerAddresses`<sup>Optional</sup> <a name="ServerAddresses" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay.property.serverAddresses"></a>

```csharp
public string[] ServerAddresses { get; set; }
```

- *Type:* string[]

List of DHCP server IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#server_addresses MagicTransitSiteLan#server_addresses}

---

### MagicTransitSiteLanStaticAddressingDhcpServer <a name="MagicTransitSiteLanStaticAddressingDhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanStaticAddressingDhcpServer {
    string DhcpPoolEnd = null,
    string DhcpPoolStart = null,
    string DnsServer = null,
    string[] DnsServers = null,
    System.Collections.Generic.IDictionary<string, string> Reservations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolEnd">DhcpPoolEnd</a></code> | <code>string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolStart">DhcpPoolStart</a></code> | <code>string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServer">DnsServer</a></code> | <code>string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#dns_servers MagicTransitSiteLan#dns_servers}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.reservations">Reservations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Mapping of MAC addresses to IP addresses. |

---

##### `DhcpPoolEnd`<sup>Optional</sup> <a name="DhcpPoolEnd" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolEnd"></a>

```csharp
public string DhcpPoolEnd { get; set; }
```

- *Type:* string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#dhcp_pool_end MagicTransitSiteLan#dhcp_pool_end}

---

##### `DhcpPoolStart`<sup>Optional</sup> <a name="DhcpPoolStart" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dhcpPoolStart"></a>

```csharp
public string DhcpPoolStart { get; set; }
```

- *Type:* string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#dhcp_pool_start MagicTransitSiteLan#dhcp_pool_start}

---

##### `DnsServer`<sup>Optional</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServer"></a>

```csharp
public string DnsServer { get; set; }
```

- *Type:* string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#dns_server MagicTransitSiteLan#dns_server}

---

##### `DnsServers`<sup>Optional</sup> <a name="DnsServers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#dns_servers MagicTransitSiteLan#dns_servers}.

---

##### `Reservations`<sup>Optional</sup> <a name="Reservations" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer.property.reservations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Reservations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Mapping of MAC addresses to IP addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.10.1/docs/resources/magic_transit_site_lan#reservations MagicTransitSiteLan#reservations}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteLanNatOutputReference <a name="MagicTransitSiteLanNatOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanNatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resetStaticPrefix">ResetStaticPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStaticPrefix` <a name="ResetStaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.resetStaticPrefix"></a>

```csharp
private void ResetStaticPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefixInput">StaticPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefix">StaticPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StaticPrefixInput`<sup>Optional</sup> <a name="StaticPrefixInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefixInput"></a>

```csharp
public string StaticPrefixInput { get; }
```

- *Type:* string

---

##### `StaticPrefix`<sup>Required</sup> <a name="StaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.staticPrefix"></a>

```csharp
public string StaticPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanNatOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MagicTransitSiteLanRoutedSubnetsList <a name="MagicTransitSiteLanRoutedSubnetsList" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanRoutedSubnetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.get"></a>

```csharp
private MagicTransitSiteLanRoutedSubnetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MagicTransitSiteLanRoutedSubnetsNatOutputReference <a name="MagicTransitSiteLanRoutedSubnetsNatOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanRoutedSubnetsNatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resetStaticPrefix">ResetStaticPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStaticPrefix` <a name="ResetStaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.resetStaticPrefix"></a>

```csharp
private void ResetStaticPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefixInput">StaticPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefix">StaticPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StaticPrefixInput`<sup>Optional</sup> <a name="StaticPrefixInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefixInput"></a>

```csharp
public string StaticPrefixInput { get; }
```

- *Type:* string

---

##### `StaticPrefix`<sup>Required</sup> <a name="StaticPrefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.staticPrefix"></a>

```csharp
public string StaticPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MagicTransitSiteLanRoutedSubnetsOutputReference <a name="MagicTransitSiteLanRoutedSubnetsOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanRoutedSubnetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.putNat">PutNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resetNat">ResetNat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNat` <a name="PutNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.putNat"></a>

```csharp
private void PutNat(MagicTransitSiteLanRoutedSubnetsNat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.putNat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNat">MagicTransitSiteLanRoutedSubnetsNat</a>

---

##### `ResetNat` <a name="ResetNat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.resetNat"></a>

```csharp
private void ResetNat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nat">Nat</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference">MagicTransitSiteLanRoutedSubnetsNatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.natInput">NatInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHopInput">NextHopInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHop">NextHop</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Nat`<sup>Required</sup> <a name="Nat" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nat"></a>

```csharp
public MagicTransitSiteLanRoutedSubnetsNatOutputReference Nat { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsNatOutputReference">MagicTransitSiteLanRoutedSubnetsNatOutputReference</a>

---

##### `NatInput`<sup>Optional</sup> <a name="NatInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.natInput"></a>

```csharp
public object NatInput { get; }
```

- *Type:* object

---

##### `NextHopInput`<sup>Optional</sup> <a name="NextHopInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHopInput"></a>

```csharp
public string NextHopInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `NextHop`<sup>Required</sup> <a name="NextHop" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.nextHop"></a>

```csharp
public string NextHop { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanRoutedSubnetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference <a name="MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resetServerAddresses">ResetServerAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServerAddresses` <a name="ResetServerAddresses" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.resetServerAddresses"></a>

```csharp
private void ResetServerAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddressesInput">ServerAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddresses">ServerAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServerAddressesInput`<sup>Optional</sup> <a name="ServerAddressesInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddressesInput"></a>

```csharp
public string[] ServerAddressesInput { get; }
```

- *Type:* string[]

---

##### `ServerAddresses`<sup>Required</sup> <a name="ServerAddresses" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.serverAddresses"></a>

```csharp
public string[] ServerAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MagicTransitSiteLanStaticAddressingDhcpServerOutputReference <a name="MagicTransitSiteLanStaticAddressingDhcpServerOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanStaticAddressingDhcpServerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolEnd">ResetDhcpPoolEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolStart">ResetDhcpPoolStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServer">ResetDnsServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServers">ResetDnsServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetReservations">ResetReservations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDhcpPoolEnd` <a name="ResetDhcpPoolEnd" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolEnd"></a>

```csharp
private void ResetDhcpPoolEnd()
```

##### `ResetDhcpPoolStart` <a name="ResetDhcpPoolStart" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDhcpPoolStart"></a>

```csharp
private void ResetDhcpPoolStart()
```

##### `ResetDnsServer` <a name="ResetDnsServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServer"></a>

```csharp
private void ResetDnsServer()
```

##### `ResetDnsServers` <a name="ResetDnsServers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetDnsServers"></a>

```csharp
private void ResetDnsServers()
```

##### `ResetReservations` <a name="ResetReservations" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.resetReservations"></a>

```csharp
private void ResetReservations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEndInput">DhcpPoolEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStartInput">DhcpPoolStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServerInput">DnsServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServersInput">DnsServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservationsInput">ReservationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd">DhcpPoolEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart">DhcpPoolStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServer">DnsServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServers">DnsServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservations">Reservations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DhcpPoolEndInput`<sup>Optional</sup> <a name="DhcpPoolEndInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEndInput"></a>

```csharp
public string DhcpPoolEndInput { get; }
```

- *Type:* string

---

##### `DhcpPoolStartInput`<sup>Optional</sup> <a name="DhcpPoolStartInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStartInput"></a>

```csharp
public string DhcpPoolStartInput { get; }
```

- *Type:* string

---

##### `DnsServerInput`<sup>Optional</sup> <a name="DnsServerInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServerInput"></a>

```csharp
public string DnsServerInput { get; }
```

- *Type:* string

---

##### `DnsServersInput`<sup>Optional</sup> <a name="DnsServersInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServersInput"></a>

```csharp
public string[] DnsServersInput { get; }
```

- *Type:* string[]

---

##### `ReservationsInput`<sup>Optional</sup> <a name="ReservationsInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ReservationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DhcpPoolEnd`<sup>Required</sup> <a name="DhcpPoolEnd" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolEnd"></a>

```csharp
public string DhcpPoolEnd { get; }
```

- *Type:* string

---

##### `DhcpPoolStart`<sup>Required</sup> <a name="DhcpPoolStart" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dhcpPoolStart"></a>

```csharp
public string DhcpPoolStart { get; }
```

- *Type:* string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServer"></a>

```csharp
public string DnsServer { get; }
```

- *Type:* string

---

##### `DnsServers`<sup>Required</sup> <a name="DnsServers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.dnsServers"></a>

```csharp
public string[] DnsServers { get; }
```

- *Type:* string[]

---

##### `Reservations`<sup>Required</sup> <a name="Reservations" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.reservations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Reservations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### MagicTransitSiteLanStaticAddressingOutputReference <a name="MagicTransitSiteLanStaticAddressingOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteLanStaticAddressingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpRelay">PutDhcpRelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpServer">PutDhcpServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpRelay">ResetDhcpRelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpServer">ResetDhcpServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetSecondaryAddress">ResetSecondaryAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetVirtualAddress">ResetVirtualAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDhcpRelay` <a name="PutDhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpRelay"></a>

```csharp
private void PutDhcpRelay(MagicTransitSiteLanStaticAddressingDhcpRelay Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpRelay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelay">MagicTransitSiteLanStaticAddressingDhcpRelay</a>

---

##### `PutDhcpServer` <a name="PutDhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpServer"></a>

```csharp
private void PutDhcpServer(MagicTransitSiteLanStaticAddressingDhcpServer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.putDhcpServer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServer">MagicTransitSiteLanStaticAddressingDhcpServer</a>

---

##### `ResetDhcpRelay` <a name="ResetDhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpRelay"></a>

```csharp
private void ResetDhcpRelay()
```

##### `ResetDhcpServer` <a name="ResetDhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetDhcpServer"></a>

```csharp
private void ResetDhcpServer()
```

##### `ResetSecondaryAddress` <a name="ResetSecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetSecondaryAddress"></a>

```csharp
private void ResetSecondaryAddress()
```

##### `ResetVirtualAddress` <a name="ResetVirtualAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.resetVirtualAddress"></a>

```csharp
private void ResetVirtualAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelay">DhcpRelay</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference">MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServer">DhcpServer</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference">MagicTransitSiteLanStaticAddressingDhcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelayInput">DhcpRelayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServerInput">DhcpServerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddressInput">SecondaryAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddressInput">VirtualAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddress">SecondaryAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddress">VirtualAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DhcpRelay`<sup>Required</sup> <a name="DhcpRelay" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelay"></a>

```csharp
public MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference DhcpRelay { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference">MagicTransitSiteLanStaticAddressingDhcpRelayOutputReference</a>

---

##### `DhcpServer`<sup>Required</sup> <a name="DhcpServer" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServer"></a>

```csharp
public MagicTransitSiteLanStaticAddressingDhcpServerOutputReference DhcpServer { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingDhcpServerOutputReference">MagicTransitSiteLanStaticAddressingDhcpServerOutputReference</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `DhcpRelayInput`<sup>Optional</sup> <a name="DhcpRelayInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpRelayInput"></a>

```csharp
public object DhcpRelayInput { get; }
```

- *Type:* object

---

##### `DhcpServerInput`<sup>Optional</sup> <a name="DhcpServerInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.dhcpServerInput"></a>

```csharp
public object DhcpServerInput { get; }
```

- *Type:* object

---

##### `SecondaryAddressInput`<sup>Optional</sup> <a name="SecondaryAddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddressInput"></a>

```csharp
public string SecondaryAddressInput { get; }
```

- *Type:* string

---

##### `VirtualAddressInput`<sup>Optional</sup> <a name="VirtualAddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddressInput"></a>

```csharp
public string VirtualAddressInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `SecondaryAddress`<sup>Required</sup> <a name="SecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.secondaryAddress"></a>

```csharp
public string SecondaryAddress { get; }
```

- *Type:* string

---

##### `VirtualAddress`<sup>Required</sup> <a name="VirtualAddress" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.virtualAddress"></a>

```csharp
public string VirtualAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteLan.MagicTransitSiteLanStaticAddressingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



