# `magicWanGreTunnel` Submodule <a name="`magicWanGreTunnel` Submodule" id="@cdktf/provider-cloudflare.magicWanGreTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanGreTunnel <a name="MagicWanGreTunnel" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicWanGreTunnel(Construct Scope, string Id, MagicWanGreTunnelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig">MagicWanGreTunnelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig">MagicWanGreTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetInterfaceAddress6">ResetInterfaceAddress6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck"></a>

```csharp
private void PutHealthCheck(MagicWanGreTunnelHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheck"></a>

```csharp
private void ResetHealthCheck()
```

##### `ResetInterfaceAddress6` <a name="ResetInterfaceAddress6" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetInterfaceAddress6"></a>

```csharp
private void ResetInterfaceAddress6()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetTtl"></a>

```csharp
private void ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MagicWanGreTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicWanGreTunnel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicWanGreTunnel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicWanGreTunnel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

MagicWanGreTunnel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a MagicWanGreTunnel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicWanGreTunnel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicWanGreTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the MagicWanGreTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference">MagicWanGreTunnelHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpointInput">CloudflareGreEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpointInput">CustomerGreEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckInput">HealthCheckInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress6Input">InterfaceAddress6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddressInput">InterfaceAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpoint">CloudflareGreEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpoint">CustomerGreEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress">InterfaceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress6">InterfaceAddress6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttl">Ttl</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheck"></a>

```csharp
public MagicWanGreTunnelHealthCheckOutputReference HealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference">MagicWanGreTunnelHealthCheckOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `CloudflareGreEndpointInput`<sup>Optional</sup> <a name="CloudflareGreEndpointInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpointInput"></a>

```csharp
public string CloudflareGreEndpointInput { get; }
```

- *Type:* string

---

##### `CustomerGreEndpointInput`<sup>Optional</sup> <a name="CustomerGreEndpointInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpointInput"></a>

```csharp
public string CustomerGreEndpointInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckInput"></a>

```csharp
public IResolvable|MagicWanGreTunnelHealthCheck HealthCheckInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

---

##### `InterfaceAddress6Input`<sup>Optional</sup> <a name="InterfaceAddress6Input" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress6Input"></a>

```csharp
public string InterfaceAddress6Input { get; }
```

- *Type:* string

---

##### `InterfaceAddressInput`<sup>Optional</sup> <a name="InterfaceAddressInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddressInput"></a>

```csharp
public string InterfaceAddressInput { get; }
```

- *Type:* string

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttlInput"></a>

```csharp
public double TtlInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `CloudflareGreEndpoint`<sup>Required</sup> <a name="CloudflareGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpoint"></a>

```csharp
public string CloudflareGreEndpoint { get; }
```

- *Type:* string

---

##### `CustomerGreEndpoint`<sup>Required</sup> <a name="CustomerGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpoint"></a>

```csharp
public string CustomerGreEndpoint { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress"></a>

```csharp
public string InterfaceAddress { get; }
```

- *Type:* string

---

##### `InterfaceAddress6`<sup>Required</sup> <a name="InterfaceAddress6" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress6"></a>

```csharp
public string InterfaceAddress6 { get; }
```

- *Type:* string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttl"></a>

```csharp
public double Ttl { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanGreTunnelConfig <a name="MagicWanGreTunnelConfig" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicWanGreTunnelConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string CloudflareGreEndpoint,
    string CustomerGreEndpoint,
    string InterfaceAddress,
    string Name,
    string Description = null,
    MagicWanGreTunnelHealthCheck HealthCheck = null,
    string InterfaceAddress6 = null,
    double Mtu = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.cloudflareGreEndpoint">CloudflareGreEndpoint</a></code> | <code>string</code> | The IP address assigned to the Cloudflare side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.customerGreEndpoint">CustomerGreEndpoint</a></code> | <code>string</code> | The IP address assigned to the customer side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress">InterfaceAddress</a></code> | <code>string</code> | A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.name">Name</a></code> | <code>string</code> | The name of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.description">Description</a></code> | <code>string</code> | An optional description of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress6">InterfaceAddress6</a></code> | <code>string</code> | A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.mtu">Mtu</a></code> | <code>double</code> | Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.ttl">Ttl</a></code> | <code>double</code> | Time To Live (TTL) in number of hops of the GRE tunnel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#account_id MagicWanGreTunnel#account_id}

---

##### `CloudflareGreEndpoint`<sup>Required</sup> <a name="CloudflareGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.cloudflareGreEndpoint"></a>

```csharp
public string CloudflareGreEndpoint { get; set; }
```

- *Type:* string

The IP address assigned to the Cloudflare side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#cloudflare_gre_endpoint MagicWanGreTunnel#cloudflare_gre_endpoint}

---

##### `CustomerGreEndpoint`<sup>Required</sup> <a name="CustomerGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.customerGreEndpoint"></a>

```csharp
public string CustomerGreEndpoint { get; set; }
```

- *Type:* string

The IP address assigned to the customer side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#customer_gre_endpoint MagicWanGreTunnel#customer_gre_endpoint}

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress"></a>

```csharp
public string InterfaceAddress { get; set; }
```

- *Type:* string

A 31-bit prefix (/31 in CIDR notation) supporting two hosts, one for each side of the tunnel.

Select the subnet from the following private IP space: 10.0.0.0–10.255.255.255, 172.16.0.0–172.31.255.255, 192.168.0.0–192.168.255.255.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#interface_address MagicWanGreTunnel#interface_address}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the tunnel.

The name cannot contain spaces or special characters, must be 15 characters or less, and cannot share a name with another GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#name MagicWanGreTunnel#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#description MagicWanGreTunnel#description}

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheck"></a>

```csharp
public MagicWanGreTunnelHealthCheck HealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#health_check MagicWanGreTunnel#health_check}.

---

##### `InterfaceAddress6`<sup>Optional</sup> <a name="InterfaceAddress6" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress6"></a>

```csharp
public string InterfaceAddress6 { get; set; }
```

- *Type:* string

A 127 bit IPV6 prefix from within the virtual_subnet6 prefix space with the address being the first IP of the subnet and not same as the address of virtual_subnet6.

Eg if virtual_subnet6 is 2606:54c1:7:0:a9fe:12d2::/127 , interface_address6 could be 2606:54c1:7:0:a9fe:12d2:1:200/127

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#interface_address6 MagicWanGreTunnel#interface_address6}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. The minimum value is 576.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#mtu MagicWanGreTunnel#mtu}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Time To Live (TTL) in number of hops of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#ttl MagicWanGreTunnel#ttl}

---

### MagicWanGreTunnelHealthCheck <a name="MagicWanGreTunnelHealthCheck" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicWanGreTunnelHealthCheck {
    string Direction = null,
    bool|IResolvable Enabled = null,
    string Rate = null,
    MagicWanGreTunnelHealthCheckTarget Target = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.direction">Direction</a></code> | <code>string</code> | The direction of the flow of the healthcheck. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Determines whether to run healthchecks for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.rate">Rate</a></code> | <code>string</code> | How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high". |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.target">Target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a></code> | The destination address in a request type health check. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.type">Type</a></code> | <code>string</code> | The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request". |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The direction of the flow of the healthcheck.

Either unidirectional, where the probe comes to you via the tunnel and the result comes back to Cloudflare via the open Internet, or bidirectional where both the probe and result come and go via the tunnel.
Available values: "unidirectional", "bidirectional".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#direction MagicWanGreTunnel#direction}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Determines whether to run healthchecks for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#enabled MagicWanGreTunnel#enabled}

---

##### `Rate`<sup>Optional</sup> <a name="Rate" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.rate"></a>

```csharp
public string Rate { get; set; }
```

- *Type:* string

How frequent the health check is run. The default value is `mid`. Available values: "low", "mid", "high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#rate MagicWanGreTunnel#rate}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.target"></a>

```csharp
public MagicWanGreTunnelHealthCheckTarget Target { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

The destination address in a request type health check.

After the healthcheck is decapsulated at the customer end of the tunnel, the ICMP echo will be forwarded to this address. This field defaults to `customer_gre_endpoint address`. This field is ignored for bidirectional healthchecks as the interface_address (not assigned to the Cloudflare side of the tunnel) is used as the target. Must be in object form if the x-magic-new-hc-target header is set to true and string form if x-magic-new-hc-target is absent or set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#target MagicWanGreTunnel#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of healthcheck to run, reply or request. The default value is `reply`. Available values: "reply", "request".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#type MagicWanGreTunnel#type}

---

### MagicWanGreTunnelHealthCheckTarget <a name="MagicWanGreTunnelHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicWanGreTunnelHealthCheckTarget {
    string Saved = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget.property.saved">Saved</a></code> | <code>string</code> | The saved health check target. |

---

##### `Saved`<sup>Optional</sup> <a name="Saved" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget.property.saved"></a>

```csharp
public string Saved { get; set; }
```

- *Type:* string

The saved health check target.

Setting the value to the empty string indicates that the calculated default value will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/magic_wan_gre_tunnel#saved MagicWanGreTunnel#saved}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicWanGreTunnelHealthCheckOutputReference <a name="MagicWanGreTunnelHealthCheckOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicWanGreTunnelHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.putTarget">PutTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetRate">ResetRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTarget` <a name="PutTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.putTarget"></a>

```csharp
private void PutTarget(MagicWanGreTunnelHealthCheckTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

---

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetDirection"></a>

```csharp
private void ResetDirection()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetRate` <a name="ResetRate" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetRate"></a>

```csharp
private void ResetRate()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.target">Target</a></code> | <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference">MagicWanGreTunnelHealthCheckTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rateInput">RateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.targetInput">TargetInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rate">Rate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.target"></a>

```csharp
public MagicWanGreTunnelHealthCheckTargetOutputReference Target { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference">MagicWanGreTunnelHealthCheckTargetOutputReference</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RateInput`<sup>Optional</sup> <a name="RateInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rateInput"></a>

```csharp
public string RateInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.targetInput"></a>

```csharp
public IResolvable|MagicWanGreTunnelHealthCheckTarget TargetInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Rate`<sup>Required</sup> <a name="Rate" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.rate"></a>

```csharp
public string Rate { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MagicWanGreTunnelHealthCheck InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheck">MagicWanGreTunnelHealthCheck</a>

---


### MagicWanGreTunnelHealthCheckTargetOutputReference <a name="MagicWanGreTunnelHealthCheckTargetOutputReference" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new MagicWanGreTunnelHealthCheckTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resetSaved">ResetSaved</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSaved` <a name="ResetSaved" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.resetSaved"></a>

```csharp
private void ResetSaved()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.effective">Effective</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.savedInput">SavedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.saved">Saved</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Effective`<sup>Required</sup> <a name="Effective" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.effective"></a>

```csharp
public string Effective { get; }
```

- *Type:* string

---

##### `SavedInput`<sup>Optional</sup> <a name="SavedInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.savedInput"></a>

```csharp
public string SavedInput { get; }
```

- *Type:* string

---

##### `Saved`<sup>Required</sup> <a name="Saved" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.saved"></a>

```csharp
public string Saved { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTargetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MagicWanGreTunnelHealthCheckTarget InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelHealthCheckTarget">MagicWanGreTunnelHealthCheckTarget</a>

---



