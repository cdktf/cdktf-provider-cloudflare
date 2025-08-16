# `magicTransitSiteWan` Submodule <a name="`magicTransitSiteWan` Submodule" id="@cdktf/provider-cloudflare.magicTransitSiteWan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitSiteWan <a name="MagicTransitSiteWan" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan cloudflare_magic_transit_site_wan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteWan(Construct Scope, string Id, MagicTransitSiteWanConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig">MagicTransitSiteWanConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig">MagicTransitSiteWanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing">PutStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetStaticAddressing">ResetStaticAddressing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetVlanTag">ResetVlanTag</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStaticAddressing` <a name="PutStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing"></a>

```csharp
private void PutStaticAddressing(MagicTransitSiteWanStaticAddressing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.putStaticAddressing.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetStaticAddressing` <a name="ResetStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetStaticAddressing"></a>

```csharp
private void ResetStaticAddressing()
```

##### `ResetVlanTag` <a name="ResetVlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.resetVlanTag"></a>

```csharp
private void ResetVlanTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MagicTransitSiteWan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicTransitSiteWan.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicTransitSiteWan.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicTransitSiteWan.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicTransitSiteWan.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MagicTransitSiteWan resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicTransitSiteWan to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicTransitSiteWan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MagicTransitSiteWan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.healthCheckRate">HealthCheckRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressing">StaticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference">MagicTransitSiteWanStaticAddressingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physportInput">PhysportInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteIdInput">SiteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressingInput">StaticAddressingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTagInput">VlanTagInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physport">Physport</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteId">SiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTag">VlanTag</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `HealthCheckRate`<sup>Required</sup> <a name="HealthCheckRate" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.healthCheckRate"></a>

```csharp
public string HealthCheckRate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StaticAddressing`<sup>Required</sup> <a name="StaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressing"></a>

```csharp
public MagicTransitSiteWanStaticAddressingOutputReference StaticAddressing { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference">MagicTransitSiteWanStaticAddressingOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PhysportInput`<sup>Optional</sup> <a name="PhysportInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physportInput"></a>

```csharp
public double PhysportInput { get; }
```

- *Type:* double

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `SiteIdInput`<sup>Optional</sup> <a name="SiteIdInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteIdInput"></a>

```csharp
public string SiteIdInput { get; }
```

- *Type:* string

---

##### `StaticAddressingInput`<sup>Optional</sup> <a name="StaticAddressingInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.staticAddressingInput"></a>

```csharp
public object StaticAddressingInput { get; }
```

- *Type:* object

---

##### `VlanTagInput`<sup>Optional</sup> <a name="VlanTagInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTagInput"></a>

```csharp
public double VlanTagInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Physport`<sup>Required</sup> <a name="Physport" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.physport"></a>

```csharp
public double Physport { get; }
```

- *Type:* double

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.siteId"></a>

```csharp
public string SiteId { get; }
```

- *Type:* string

---

##### `VlanTag`<sup>Required</sup> <a name="VlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.vlanTag"></a>

```csharp
public double VlanTag { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWan.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitSiteWanConfig <a name="MagicTransitSiteWanConfig" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteWanConfig {
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
    string Name = null,
    double Priority = null,
    MagicTransitSiteWanStaticAddressing StaticAddressing = null,
    double VlanTag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.physport">Physport</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.siteId">SiteId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.priority">Priority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.staticAddressing">StaticAddressing</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a></code> | (optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.vlanTag">VlanTag</a></code> | <code>double</code> | VLAN ID. Use zero for untagged. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#account_id MagicTransitSiteWan#account_id}

---

##### `Physport`<sup>Required</sup> <a name="Physport" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.physport"></a>

```csharp
public double Physport { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#physport MagicTransitSiteWan#physport}.

---

##### `SiteId`<sup>Required</sup> <a name="SiteId" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.siteId"></a>

```csharp
public string SiteId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#site_id MagicTransitSiteWan#site_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#name MagicTransitSiteWan#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#priority MagicTransitSiteWan#priority}.

---

##### `StaticAddressing`<sup>Optional</sup> <a name="StaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.staticAddressing"></a>

```csharp
public MagicTransitSiteWanStaticAddressing StaticAddressing { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing">MagicTransitSiteWanStaticAddressing</a>

(optional) if omitted, use DHCP. Submit secondary_address when site is in high availability mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#static_addressing MagicTransitSiteWan#static_addressing}

---

##### `VlanTag`<sup>Optional</sup> <a name="VlanTag" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanConfig.property.vlanTag"></a>

```csharp
public double VlanTag { get; set; }
```

- *Type:* double

VLAN ID. Use zero for untagged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#vlan_tag MagicTransitSiteWan#vlan_tag}

---

### MagicTransitSiteWanStaticAddressing <a name="MagicTransitSiteWanStaticAddressing" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteWanStaticAddressing {
    string Address,
    string GatewayAddress,
    string SecondaryAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.address">Address</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.gatewayAddress">GatewayAddress</a></code> | <code>string</code> | A valid IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.secondaryAddress">SecondaryAddress</a></code> | <code>string</code> | A valid CIDR notation representing an IP range. |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#address MagicTransitSiteWan#address}

---

##### `GatewayAddress`<sup>Required</sup> <a name="GatewayAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.gatewayAddress"></a>

```csharp
public string GatewayAddress { get; set; }
```

- *Type:* string

A valid IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#gateway_address MagicTransitSiteWan#gateway_address}

---

##### `SecondaryAddress`<sup>Optional</sup> <a name="SecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressing.property.secondaryAddress"></a>

```csharp
public string SecondaryAddress { get; set; }
```

- *Type:* string

A valid CIDR notation representing an IP range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.4/docs/resources/magic_transit_site_wan#secondary_address MagicTransitSiteWan#secondary_address}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitSiteWanStaticAddressingOutputReference <a name="MagicTransitSiteWanStaticAddressingOutputReference" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicTransitSiteWanStaticAddressingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resetSecondaryAddress">ResetSecondaryAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecondaryAddress` <a name="ResetSecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.resetSecondaryAddress"></a>

```csharp
private void ResetSecondaryAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddressInput">GatewayAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddressInput">SecondaryAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddress">GatewayAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddress">SecondaryAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `GatewayAddressInput`<sup>Optional</sup> <a name="GatewayAddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddressInput"></a>

```csharp
public string GatewayAddressInput { get; }
```

- *Type:* string

---

##### `SecondaryAddressInput`<sup>Optional</sup> <a name="SecondaryAddressInput" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddressInput"></a>

```csharp
public string SecondaryAddressInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `GatewayAddress`<sup>Required</sup> <a name="GatewayAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.gatewayAddress"></a>

```csharp
public string GatewayAddress { get; }
```

- *Type:* string

---

##### `SecondaryAddress`<sup>Required</sup> <a name="SecondaryAddress" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.secondaryAddress"></a>

```csharp
public string SecondaryAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicTransitSiteWan.MagicTransitSiteWanStaticAddressingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



