# `zeroTrustTunnelRoute` Submodule <a name="`zeroTrustTunnelRoute` Submodule" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustTunnelRoute <a name="ZeroTrustTunnelRoute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_tunnel_route cloudflare_zero_trust_tunnel_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustTunnelRoute(Construct Scope, string Id, ZeroTrustTunnelRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig">ZeroTrustTunnelRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig">ZeroTrustTunnelRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.resetVirtualNetworkId">ResetVirtualNetworkId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetVirtualNetworkId` <a name="ResetVirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.resetVirtualNetworkId"></a>

```csharp
private void ResetVirtualNetworkId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustTunnelRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustTunnelRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustTunnelRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustTunnelRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustTunnelRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustTunnelRoute resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustTunnelRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustTunnelRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_tunnel_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustTunnelRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.tunnelIdInput">TunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.tunnelIdInput"></a>

```csharp
public string TunnelIdInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustTunnelRouteConfig <a name="ZeroTrustTunnelRouteConfig" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustTunnelRouteConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Network,
    string TunnelId,
    string Comment = null,
    string Id = null,
    string VirtualNetworkId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.network">Network</a></code> | <code>string</code> | The IPv4 or IPv6 network that should use this tunnel route, in CIDR notation. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.tunnelId">TunnelId</a></code> | <code>string</code> | The ID of the tunnel that will service the tunnel route. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.comment">Comment</a></code> | <code>string</code> | Description of the tunnel route. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_tunnel_route#id ZeroTrustTunnelRoute#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | The ID of the virtual network for which this route is being added; |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_tunnel_route#account_id ZeroTrustTunnelRoute#account_id}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The IPv4 or IPv6 network that should use this tunnel route, in CIDR notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_tunnel_route#network ZeroTrustTunnelRoute#network}

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.tunnelId"></a>

```csharp
public string TunnelId { get; set; }
```

- *Type:* string

The ID of the tunnel that will service the tunnel route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_tunnel_route#tunnel_id ZeroTrustTunnelRoute#tunnel_id}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Description of the tunnel route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_tunnel_route#comment ZeroTrustTunnelRoute#comment}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_tunnel_route#id ZeroTrustTunnelRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `VirtualNetworkId`<sup>Optional</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustTunnelRoute.ZeroTrustTunnelRouteConfig.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

The ID of the virtual network for which this route is being added;

uses the default virtual network of the account if none is provided. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_tunnel_route#virtual_network_id ZeroTrustTunnelRoute#virtual_network_id}

---



