# `zeroTrustTunnelWarpConnector` Submodule <a name="`zeroTrustTunnelWarpConnector` Submodule" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustTunnelWarpConnector <a name="ZeroTrustTunnelWarpConnector" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector cloudflare_zero_trust_tunnel_warp_connector}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnector(Construct Scope, string Id, ZeroTrustTunnelWarpConnectorConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig">ZeroTrustTunnelWarpConnectorConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig">ZeroTrustTunnelWarpConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetTunnelSecret">ResetTunnelSecret</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetTunnelSecret` <a name="ResetTunnelSecret" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.resetTunnelSecret"></a>

```csharp
private void ResetTunnelSecret()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustTunnelWarpConnector resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustTunnelWarpConnector.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustTunnelWarpConnector.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustTunnelWarpConnector.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustTunnelWarpConnector.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustTunnelWarpConnector resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustTunnelWarpConnector to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustTunnelWarpConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustTunnelWarpConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountTag">AccountTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList">ZeroTrustTunnelWarpConnectorConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsActiveAt">ConnsActiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsInactiveAt">ConnsInactiveAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.deletedAt">DeletedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.remoteConfig">RemoteConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunType">TunType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecretInput">TunnelSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecret">TunnelSecret</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountTag`<sup>Required</sup> <a name="AccountTag" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountTag"></a>

```csharp
public string AccountTag { get; }
```

- *Type:* string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connections"></a>

```csharp
public ZeroTrustTunnelWarpConnectorConnectionsList Connections { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList">ZeroTrustTunnelWarpConnectorConnectionsList</a>

---

##### `ConnsActiveAt`<sup>Required</sup> <a name="ConnsActiveAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsActiveAt"></a>

```csharp
public string ConnsActiveAt { get; }
```

- *Type:* string

---

##### `ConnsInactiveAt`<sup>Required</sup> <a name="ConnsInactiveAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.connsInactiveAt"></a>

```csharp
public string ConnsInactiveAt { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DeletedAt`<sup>Required</sup> <a name="DeletedAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.deletedAt"></a>

```csharp
public string DeletedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `RemoteConfig`<sup>Required</sup> <a name="RemoteConfig" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.remoteConfig"></a>

```csharp
public IResolvable RemoteConfig { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TunType`<sup>Required</sup> <a name="TunType" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunType"></a>

```csharp
public string TunType { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TunnelSecretInput`<sup>Optional</sup> <a name="TunnelSecretInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecretInput"></a>

```csharp
public string TunnelSecretInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TunnelSecret`<sup>Required</sup> <a name="TunnelSecret" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tunnelSecret"></a>

```csharp
public string TunnelSecret { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnector.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustTunnelWarpConnectorConfig <a name="ZeroTrustTunnelWarpConnectorConfig" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Name,
    string TunnelSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.name">Name</a></code> | <code>string</code> | A user-friendly name for a tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.tunnelSecret">TunnelSecret</a></code> | <code>string</code> | Sets the password required to run a locally-managed tunnel. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#account_id ZeroTrustTunnelWarpConnector#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-friendly name for a tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#name ZeroTrustTunnelWarpConnector#name}

---

##### `TunnelSecret`<sup>Optional</sup> <a name="TunnelSecret" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConfig.property.tunnelSecret"></a>

```csharp
public string TunnelSecret { get; set; }
```

- *Type:* string

Sets the password required to run a locally-managed tunnel.

Must be at least 32 bytes and encoded as a base64 string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.7.0/docs/resources/zero_trust_tunnel_warp_connector#tunnel_secret ZeroTrustTunnelWarpConnector#tunnel_secret}

---

### ZeroTrustTunnelWarpConnectorConnections <a name="ZeroTrustTunnelWarpConnectorConnections" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConnections {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustTunnelWarpConnectorConnectionsList <a name="ZeroTrustTunnelWarpConnectorConnectionsList" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.get"></a>

```csharp
private ZeroTrustTunnelWarpConnectorConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ZeroTrustTunnelWarpConnectorConnectionsOutputReference <a name="ZeroTrustTunnelWarpConnectorConnectionsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientVersion">ClientVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.coloName">ColoName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.isPendingReconnect">IsPendingReconnect</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.openedAt">OpenedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.originIp">OriginIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections">ZeroTrustTunnelWarpConnectorConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientVersion`<sup>Required</sup> <a name="ClientVersion" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.clientVersion"></a>

```csharp
public string ClientVersion { get; }
```

- *Type:* string

---

##### `ColoName`<sup>Required</sup> <a name="ColoName" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.coloName"></a>

```csharp
public string ColoName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsPendingReconnect`<sup>Required</sup> <a name="IsPendingReconnect" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.isPendingReconnect"></a>

```csharp
public IResolvable IsPendingReconnect { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OpenedAt`<sup>Required</sup> <a name="OpenedAt" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.openedAt"></a>

```csharp
public string OpenedAt { get; }
```

- *Type:* string

---

##### `OriginIp`<sup>Required</sup> <a name="OriginIp" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.originIp"></a>

```csharp
public string OriginIp { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnectionsOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustTunnelWarpConnectorConnections InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustTunnelWarpConnector.ZeroTrustTunnelWarpConnectorConnections">ZeroTrustTunnelWarpConnectorConnections</a>

---



