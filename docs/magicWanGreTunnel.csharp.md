# `magicWanGreTunnel` Submodule <a name="`magicWanGreTunnel` Submodule" id="@cdktf/provider-cloudflare.magicWanGreTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanGreTunnel <a name="MagicWanGreTunnel" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel cloudflare_magic_wan_gre_tunnel}.

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
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheckEnabled">ResetHealthCheckEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheckTarget">ResetHealthCheckTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheckType">ResetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetId">ResetId</a></code> | *No description.* |
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
private object HasResourceMove()
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
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.moveTo.parameter.index"></a>

- *Type:* object

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

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHealthCheckEnabled` <a name="ResetHealthCheckEnabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheckEnabled"></a>

```csharp
private void ResetHealthCheckEnabled()
```

##### `ResetHealthCheckTarget` <a name="ResetHealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheckTarget"></a>

```csharp
private void ResetHealthCheckTarget()
```

##### `ResetHealthCheckType` <a name="ResetHealthCheckType" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetHealthCheckType"></a>

```csharp
private void ResetHealthCheckType()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.resetId"></a>

```csharp
private void ResetId()
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

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpointInput">CloudflareGreEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpointInput">CustomerGreEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckEnabledInput">HealthCheckEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckTargetInput">HealthCheckTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckTypeInput">HealthCheckTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddressInput">InterfaceAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.ttlInput">TtlInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.cloudflareGreEndpoint">CloudflareGreEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.customerGreEndpoint">CustomerGreEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckEnabled">HealthCheckEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckTarget">HealthCheckTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress">InterfaceAddress</a></code> | <code>string</code> | *No description.* |
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
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

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
public object[] Provisioners { get; }
```

- *Type:* object[]

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

##### `HealthCheckEnabledInput`<sup>Optional</sup> <a name="HealthCheckEnabledInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckEnabledInput"></a>

```csharp
public object HealthCheckEnabledInput { get; }
```

- *Type:* object

---

##### `HealthCheckTargetInput`<sup>Optional</sup> <a name="HealthCheckTargetInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckTargetInput"></a>

```csharp
public string HealthCheckTargetInput { get; }
```

- *Type:* string

---

##### `HealthCheckTypeInput`<sup>Optional</sup> <a name="HealthCheckTypeInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckTypeInput"></a>

```csharp
public string HealthCheckTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.idInput"></a>

```csharp
public string IdInput { get; }
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

##### `HealthCheckEnabled`<sup>Required</sup> <a name="HealthCheckEnabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckEnabled"></a>

```csharp
public object HealthCheckEnabled { get; }
```

- *Type:* object

---

##### `HealthCheckTarget`<sup>Required</sup> <a name="HealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckTarget"></a>

```csharp
public string HealthCheckTarget { get; }
```

- *Type:* string

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnel.property.interfaceAddress"></a>

```csharp
public string InterfaceAddress { get; }
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
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CloudflareGreEndpoint,
    string CustomerGreEndpoint,
    string InterfaceAddress,
    string Name,
    string AccountId = null,
    string Description = null,
    object HealthCheckEnabled = null,
    string HealthCheckTarget = null,
    string HealthCheckType = null,
    string Id = null,
    double Mtu = null,
    double Ttl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.cloudflareGreEndpoint">CloudflareGreEndpoint</a></code> | <code>string</code> | The IP address assigned to the Cloudflare side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.customerGreEndpoint">CustomerGreEndpoint</a></code> | <code>string</code> | The IP address assigned to the customer side of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress">InterfaceAddress</a></code> | <code>string</code> | 31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.name">Name</a></code> | <code>string</code> | Name of the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.description">Description</a></code> | <code>string</code> | Description of the GRE tunnel intent. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheckEnabled">HealthCheckEnabled</a></code> | <code>object</code> | Specifies if ICMP tunnel health checks are enabled. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheckTarget">HealthCheckTarget</a></code> | <code>string</code> | The IP address of the customer endpoint that will receive tunnel health checks. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | Specifies the ICMP echo type for the health check. Available values: `request`, `reply`. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#id MagicWanGreTunnel#id}. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.mtu">Mtu</a></code> | <code>double</code> | Maximum Transmission Unit (MTU) in bytes for the GRE tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.ttl">Ttl</a></code> | <code>double</code> | Time To Live (TTL) in number of hops of the GRE tunnel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

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
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloudflareGreEndpoint`<sup>Required</sup> <a name="CloudflareGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.cloudflareGreEndpoint"></a>

```csharp
public string CloudflareGreEndpoint { get; set; }
```

- *Type:* string

The IP address assigned to the Cloudflare side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#cloudflare_gre_endpoint MagicWanGreTunnel#cloudflare_gre_endpoint}

---

##### `CustomerGreEndpoint`<sup>Required</sup> <a name="CustomerGreEndpoint" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.customerGreEndpoint"></a>

```csharp
public string CustomerGreEndpoint { get; set; }
```

- *Type:* string

The IP address assigned to the customer side of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#customer_gre_endpoint MagicWanGreTunnel#customer_gre_endpoint}

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.interfaceAddress"></a>

```csharp
public string InterfaceAddress { get; set; }
```

- *Type:* string

31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#interface_address MagicWanGreTunnel#interface_address}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#name MagicWanGreTunnel#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#account_id MagicWanGreTunnel#account_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the GRE tunnel intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#description MagicWanGreTunnel#description}

---

##### `HealthCheckEnabled`<sup>Optional</sup> <a name="HealthCheckEnabled" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheckEnabled"></a>

```csharp
public object HealthCheckEnabled { get; set; }
```

- *Type:* object

Specifies if ICMP tunnel health checks are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#health_check_enabled MagicWanGreTunnel#health_check_enabled}

---

##### `HealthCheckTarget`<sup>Optional</sup> <a name="HealthCheckTarget" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheckTarget"></a>

```csharp
public string HealthCheckTarget { get; set; }
```

- *Type:* string

The IP address of the customer endpoint that will receive tunnel health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#health_check_target MagicWanGreTunnel#health_check_target}

---

##### `HealthCheckType`<sup>Optional</sup> <a name="HealthCheckType" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; set; }
```

- *Type:* string

Specifies the ICMP echo type for the health check. Available values: `request`, `reply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#health_check_type MagicWanGreTunnel#health_check_type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#id MagicWanGreTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

Maximum Transmission Unit (MTU) in bytes for the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#mtu MagicWanGreTunnel#mtu}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-cloudflare.magicWanGreTunnel.MagicWanGreTunnelConfig.property.ttl"></a>

```csharp
public double Ttl { get; set; }
```

- *Type:* double

Time To Live (TTL) in number of hops of the GRE tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.42.0/docs/resources/magic_wan_gre_tunnel#ttl MagicWanGreTunnel#ttl}

---



