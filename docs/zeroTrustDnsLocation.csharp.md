# `zeroTrustDnsLocation` Submodule <a name="`zeroTrustDnsLocation` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDnsLocation <a name="ZeroTrustDnsLocation" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location cloudflare_zero_trust_dns_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocation(Construct Scope, string Id, ZeroTrustDnsLocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig">ZeroTrustDnsLocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig">ZeroTrustDnsLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putEndpoints">PutEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetClientDefault">ResetClientDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetDnsDestinationIpsId">ResetDnsDestinationIpsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetDnsDestinationIpv6BlockId">ResetDnsDestinationIpv6BlockId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetEcsSupport">ResetEcsSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetEndpoints">ResetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoints` <a name="PutEndpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putEndpoints"></a>

```csharp
private void PutEndpoints(ZeroTrustDnsLocationEndpoints Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putEndpoints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a>

---

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putNetworks"></a>

```csharp
private void PutNetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.putNetworks.parameter.value"></a>

- *Type:* object

---

##### `ResetClientDefault` <a name="ResetClientDefault" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetClientDefault"></a>

```csharp
private void ResetClientDefault()
```

##### `ResetDnsDestinationIpsId` <a name="ResetDnsDestinationIpsId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetDnsDestinationIpsId"></a>

```csharp
private void ResetDnsDestinationIpsId()
```

##### `ResetDnsDestinationIpv6BlockId` <a name="ResetDnsDestinationIpv6BlockId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetDnsDestinationIpv6BlockId"></a>

```csharp
private void ResetDnsDestinationIpv6BlockId()
```

##### `ResetEcsSupport` <a name="ResetEcsSupport" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetEcsSupport"></a>

```csharp
private void ResetEcsSupport()
```

##### `ResetEndpoints` <a name="ResetEndpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetEndpoints"></a>

```csharp
private void ResetEndpoints()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.resetNetworks"></a>

```csharp
private void ResetNetworks()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDnsLocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDnsLocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDnsLocation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDnsLocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustDnsLocation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDnsLocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDnsLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDnsLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.anonymizedLogsEnabled">AnonymizedLogsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dohSubdomain">DohSubdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference">ZeroTrustDnsLocationEndpointsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ipv4Destination">Ipv4Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ipv4DestinationBackup">Ipv4DestinationBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList">ZeroTrustDnsLocationNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.clientDefaultInput">ClientDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpsIdInput">DnsDestinationIpsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpv6BlockIdInput">DnsDestinationIpv6BlockIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ecsSupportInput">EcsSupportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.endpointsInput">EndpointsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.networksInput">NetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.clientDefault">ClientDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpsId">DnsDestinationIpsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpv6BlockId">DnsDestinationIpv6BlockId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ecsSupport">EcsSupport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AnonymizedLogsEnabled`<sup>Required</sup> <a name="AnonymizedLogsEnabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.anonymizedLogsEnabled"></a>

```csharp
public IResolvable AnonymizedLogsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DohSubdomain`<sup>Required</sup> <a name="DohSubdomain" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dohSubdomain"></a>

```csharp
public string DohSubdomain { get; }
```

- *Type:* string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.endpoints"></a>

```csharp
public ZeroTrustDnsLocationEndpointsOutputReference Endpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference">ZeroTrustDnsLocationEndpointsOutputReference</a>

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Ipv4Destination`<sup>Required</sup> <a name="Ipv4Destination" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ipv4Destination"></a>

```csharp
public string Ipv4Destination { get; }
```

- *Type:* string

---

##### `Ipv4DestinationBackup`<sup>Required</sup> <a name="Ipv4DestinationBackup" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ipv4DestinationBackup"></a>

```csharp
public string Ipv4DestinationBackup { get; }
```

- *Type:* string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.networks"></a>

```csharp
public ZeroTrustDnsLocationNetworksList Networks { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList">ZeroTrustDnsLocationNetworksList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ClientDefaultInput`<sup>Optional</sup> <a name="ClientDefaultInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.clientDefaultInput"></a>

```csharp
public object ClientDefaultInput { get; }
```

- *Type:* object

---

##### `DnsDestinationIpsIdInput`<sup>Optional</sup> <a name="DnsDestinationIpsIdInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpsIdInput"></a>

```csharp
public string DnsDestinationIpsIdInput { get; }
```

- *Type:* string

---

##### `DnsDestinationIpv6BlockIdInput`<sup>Optional</sup> <a name="DnsDestinationIpv6BlockIdInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpv6BlockIdInput"></a>

```csharp
public string DnsDestinationIpv6BlockIdInput { get; }
```

- *Type:* string

---

##### `EcsSupportInput`<sup>Optional</sup> <a name="EcsSupportInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ecsSupportInput"></a>

```csharp
public object EcsSupportInput { get; }
```

- *Type:* object

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.endpointsInput"></a>

```csharp
public ZeroTrustDnsLocationEndpoints EndpointsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.networksInput"></a>

```csharp
public object NetworksInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ClientDefault`<sup>Required</sup> <a name="ClientDefault" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.clientDefault"></a>

```csharp
public object ClientDefault { get; }
```

- *Type:* object

---

##### `DnsDestinationIpsId`<sup>Required</sup> <a name="DnsDestinationIpsId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpsId"></a>

```csharp
public string DnsDestinationIpsId { get; }
```

- *Type:* string

---

##### `DnsDestinationIpv6BlockId`<sup>Required</sup> <a name="DnsDestinationIpv6BlockId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.dnsDestinationIpv6BlockId"></a>

```csharp
public string DnsDestinationIpv6BlockId { get; }
```

- *Type:* string

---

##### `EcsSupport`<sup>Required</sup> <a name="EcsSupport" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.ecsSupport"></a>

```csharp
public object EcsSupport { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDnsLocationConfig <a name="ZeroTrustDnsLocationConfig" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Name,
    object ClientDefault = null,
    string DnsDestinationIpsId = null,
    string DnsDestinationIpv6BlockId = null,
    object EcsSupport = null,
    ZeroTrustDnsLocationEndpoints Endpoints = null,
    string Id = null,
    object Networks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.name">Name</a></code> | <code>string</code> | Name of the teams location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.clientDefault">ClientDefault</a></code> | <code>object</code> | Indicator that this is the default location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dnsDestinationIpsId">DnsDestinationIpsId</a></code> | <code>string</code> | IPv4 binding assigned to this location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dnsDestinationIpv6BlockId">DnsDestinationIpv6BlockId</a></code> | <code>string</code> | IPv6 block binding assigned to this location. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.ecsSupport">EcsSupport</a></code> | <code>object</code> | Indicator that this location needs to resolve EDNS queries. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a></code> | endpoints block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#id ZeroTrustDnsLocation#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.networks">Networks</a></code> | <code>object</code> | The networks CIDRs that comprise the location. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#account_id ZeroTrustDnsLocation#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the teams location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#name ZeroTrustDnsLocation#name}

---

##### `ClientDefault`<sup>Optional</sup> <a name="ClientDefault" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.clientDefault"></a>

```csharp
public object ClientDefault { get; set; }
```

- *Type:* object

Indicator that this is the default location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#client_default ZeroTrustDnsLocation#client_default}

---

##### `DnsDestinationIpsId`<sup>Optional</sup> <a name="DnsDestinationIpsId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dnsDestinationIpsId"></a>

```csharp
public string DnsDestinationIpsId { get; set; }
```

- *Type:* string

IPv4 binding assigned to this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#dns_destination_ips_id ZeroTrustDnsLocation#dns_destination_ips_id}

---

##### `DnsDestinationIpv6BlockId`<sup>Optional</sup> <a name="DnsDestinationIpv6BlockId" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.dnsDestinationIpv6BlockId"></a>

```csharp
public string DnsDestinationIpv6BlockId { get; set; }
```

- *Type:* string

IPv6 block binding assigned to this location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#dns_destination_ipv6_block_id ZeroTrustDnsLocation#dns_destination_ipv6_block_id}

---

##### `EcsSupport`<sup>Optional</sup> <a name="EcsSupport" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.ecsSupport"></a>

```csharp
public object EcsSupport { get; set; }
```

- *Type:* object

Indicator that this location needs to resolve EDNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#ecs_support ZeroTrustDnsLocation#ecs_support}

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.endpoints"></a>

```csharp
public ZeroTrustDnsLocationEndpoints Endpoints { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#endpoints ZeroTrustDnsLocation#endpoints}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#id ZeroTrustDnsLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationConfig.property.networks"></a>

```csharp
public object Networks { get; set; }
```

- *Type:* object

The networks CIDRs that comprise the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}

---

### ZeroTrustDnsLocationEndpoints <a name="ZeroTrustDnsLocationEndpoints" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpoints {
    ZeroTrustDnsLocationEndpointsDoh Doh = null,
    ZeroTrustDnsLocationEndpointsDot Dot = null,
    ZeroTrustDnsLocationEndpointsIpv4 Ipv4 = null,
    ZeroTrustDnsLocationEndpointsIpv6 Ipv6 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.doh">Doh</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a></code> | doh block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.dot">Dot</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a></code> | dot block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a></code> | ipv4 block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a></code> | ipv6 block. |

---

##### `Doh`<sup>Optional</sup> <a name="Doh" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.doh"></a>

```csharp
public ZeroTrustDnsLocationEndpointsDoh Doh { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a>

doh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#doh ZeroTrustDnsLocation#doh}

---

##### `Dot`<sup>Optional</sup> <a name="Dot" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.dot"></a>

```csharp
public ZeroTrustDnsLocationEndpointsDot Dot { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a>

dot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#dot ZeroTrustDnsLocation#dot}

---

##### `Ipv4`<sup>Optional</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.ipv4"></a>

```csharp
public ZeroTrustDnsLocationEndpointsIpv4 Ipv4 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a>

ipv4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#ipv4 ZeroTrustDnsLocation#ipv4}

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints.property.ipv6"></a>

```csharp
public ZeroTrustDnsLocationEndpointsIpv6 Ipv6 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a>

ipv6 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#ipv6 ZeroTrustDnsLocation#ipv6}

---

### ZeroTrustDnsLocationEndpointsDoh <a name="ZeroTrustDnsLocationEndpointsDoh" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsDoh {
    object Enabled,
    object Networks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.networks">Networks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}.

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh.property.networks"></a>

```csharp
public object Networks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}.

---

### ZeroTrustDnsLocationEndpointsDohNetworks <a name="ZeroTrustDnsLocationEndpointsDohNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsDohNetworks {
    string Network = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks.property.network">Network</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}. |

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworks.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}.

---

### ZeroTrustDnsLocationEndpointsDot <a name="ZeroTrustDnsLocationEndpointsDot" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsDot {
    object Enabled,
    object Networks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.property.networks">Networks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}.

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot.property.networks"></a>

```csharp
public object Networks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}.

---

### ZeroTrustDnsLocationEndpointsDotNetworks <a name="ZeroTrustDnsLocationEndpointsDotNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsDotNetworks {
    string Network = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks.property.network">Network</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}. |

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworks.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}.

---

### ZeroTrustDnsLocationEndpointsIpv4 <a name="ZeroTrustDnsLocationEndpointsIpv4" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsIpv4 {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}.

---

### ZeroTrustDnsLocationEndpointsIpv6 <a name="ZeroTrustDnsLocationEndpointsIpv6" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsIpv6 {
    object Enabled,
    object Networks = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.property.networks">Networks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#enabled ZeroTrustDnsLocation#enabled}.

---

##### `Networks`<sup>Optional</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6.property.networks"></a>

```csharp
public object Networks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#networks ZeroTrustDnsLocation#networks}.

---

### ZeroTrustDnsLocationEndpointsIpv6Networks <a name="ZeroTrustDnsLocationEndpointsIpv6Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsIpv6Networks {
    string Network = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks.property.network">Network</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}. |

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6Networks.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}.

---

### ZeroTrustDnsLocationNetworks <a name="ZeroTrustDnsLocationNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationNetworks {
    string Network = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks.property.network">Network</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}. |

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworks.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_dns_location#network ZeroTrustDnsLocation#network}.

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDnsLocationEndpointsDohNetworksList <a name="ZeroTrustDnsLocationEndpointsDohNetworksList" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsDohNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.get"></a>

```csharp
private ZeroTrustDnsLocationEndpointsDohNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDnsLocationEndpointsDohNetworksOutputReference <a name="ZeroTrustDnsLocationEndpointsDohNetworksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsDohNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDnsLocationEndpointsDohOutputReference <a name="ZeroTrustDnsLocationEndpointsDohOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsDohOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.putNetworks"></a>

```csharp
private void PutNetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.putNetworks.parameter.value"></a>

- *Type:* object

---

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.resetNetworks"></a>

```csharp
private void ResetNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList">ZeroTrustDnsLocationEndpointsDohNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.requireToken">RequireToken</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.networksInput">NetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationEnabled`<sup>Required</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.authenticationEnabled"></a>

```csharp
public IResolvable AuthenticationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.networks"></a>

```csharp
public ZeroTrustDnsLocationEndpointsDohNetworksList Networks { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohNetworksList">ZeroTrustDnsLocationEndpointsDohNetworksList</a>

---

##### `RequireToken`<sup>Required</sup> <a name="RequireToken" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.requireToken"></a>

```csharp
public IResolvable RequireToken { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.networksInput"></a>

```csharp
public object NetworksInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDnsLocationEndpointsDoh InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a>

---


### ZeroTrustDnsLocationEndpointsDotNetworksList <a name="ZeroTrustDnsLocationEndpointsDotNetworksList" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsDotNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.get"></a>

```csharp
private ZeroTrustDnsLocationEndpointsDotNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDnsLocationEndpointsDotNetworksOutputReference <a name="ZeroTrustDnsLocationEndpointsDotNetworksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsDotNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDnsLocationEndpointsDotOutputReference <a name="ZeroTrustDnsLocationEndpointsDotOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsDotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.putNetworks"></a>

```csharp
private void PutNetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.putNetworks.parameter.value"></a>

- *Type:* object

---

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.resetNetworks"></a>

```csharp
private void ResetNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList">ZeroTrustDnsLocationEndpointsDotNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.requireToken">RequireToken</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.networksInput">NetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationEnabled`<sup>Required</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.authenticationEnabled"></a>

```csharp
public IResolvable AuthenticationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.networks"></a>

```csharp
public ZeroTrustDnsLocationEndpointsDotNetworksList Networks { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotNetworksList">ZeroTrustDnsLocationEndpointsDotNetworksList</a>

---

##### `RequireToken`<sup>Required</sup> <a name="RequireToken" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.requireToken"></a>

```csharp
public IResolvable RequireToken { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.networksInput"></a>

```csharp
public object NetworksInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDnsLocationEndpointsDot InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a>

---


### ZeroTrustDnsLocationEndpointsIpv4OutputReference <a name="ZeroTrustDnsLocationEndpointsIpv4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsIpv4OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationEnabled`<sup>Required</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.authenticationEnabled"></a>

```csharp
public IResolvable AuthenticationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDnsLocationEndpointsIpv4 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a>

---


### ZeroTrustDnsLocationEndpointsIpv6NetworksList <a name="ZeroTrustDnsLocationEndpointsIpv6NetworksList" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsIpv6NetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.get"></a>

```csharp
private ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference <a name="ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDnsLocationEndpointsIpv6OutputReference <a name="ZeroTrustDnsLocationEndpointsIpv6OutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsIpv6OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.putNetworks">PutNetworks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resetNetworks">ResetNetworks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworks` <a name="PutNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.putNetworks"></a>

```csharp
private void PutNetworks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.putNetworks.parameter.value"></a>

- *Type:* object

---

##### `ResetNetworks` <a name="ResetNetworks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.resetNetworks"></a>

```csharp
private void ResetNetworks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.authenticationEnabled">AuthenticationEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList">ZeroTrustDnsLocationEndpointsIpv6NetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networksInput">NetworksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationEnabled`<sup>Required</sup> <a name="AuthenticationEnabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.authenticationEnabled"></a>

```csharp
public IResolvable AuthenticationEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networks"></a>

```csharp
public ZeroTrustDnsLocationEndpointsIpv6NetworksList Networks { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6NetworksList">ZeroTrustDnsLocationEndpointsIpv6NetworksList</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `NetworksInput`<sup>Optional</sup> <a name="NetworksInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.networksInput"></a>

```csharp
public object NetworksInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDnsLocationEndpointsIpv6 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a>

---


### ZeroTrustDnsLocationEndpointsOutputReference <a name="ZeroTrustDnsLocationEndpointsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDoh">PutDoh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDot">PutDot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv4">PutIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv6">PutIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resetDoh">ResetDoh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resetDot">ResetDot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resetIpv4">ResetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDoh` <a name="PutDoh" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDoh"></a>

```csharp
private void PutDoh(ZeroTrustDnsLocationEndpointsDoh Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDoh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a>

---

##### `PutDot` <a name="PutDot" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDot"></a>

```csharp
private void PutDot(ZeroTrustDnsLocationEndpointsDot Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putDot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a>

---

##### `PutIpv4` <a name="PutIpv4" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv4"></a>

```csharp
private void PutIpv4(ZeroTrustDnsLocationEndpointsIpv4 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a>

---

##### `PutIpv6` <a name="PutIpv6" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv6"></a>

```csharp
private void PutIpv6(ZeroTrustDnsLocationEndpointsIpv6 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a>

---

##### `ResetDoh` <a name="ResetDoh" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resetDoh"></a>

```csharp
private void ResetDoh()
```

##### `ResetDot` <a name="ResetDot" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resetDot"></a>

```csharp
private void ResetDot()
```

##### `ResetIpv4` <a name="ResetIpv4" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resetIpv4"></a>

```csharp
private void ResetIpv4()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.resetIpv6"></a>

```csharp
private void ResetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.doh">Doh</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference">ZeroTrustDnsLocationEndpointsDohOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dot">Dot</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference">ZeroTrustDnsLocationEndpointsDotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference">ZeroTrustDnsLocationEndpointsIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference">ZeroTrustDnsLocationEndpointsIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dohInput">DohInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dotInput">DotInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv4Input">Ipv4Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Doh`<sup>Required</sup> <a name="Doh" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.doh"></a>

```csharp
public ZeroTrustDnsLocationEndpointsDohOutputReference Doh { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDohOutputReference">ZeroTrustDnsLocationEndpointsDohOutputReference</a>

---

##### `Dot`<sup>Required</sup> <a name="Dot" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dot"></a>

```csharp
public ZeroTrustDnsLocationEndpointsDotOutputReference Dot { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDotOutputReference">ZeroTrustDnsLocationEndpointsDotOutputReference</a>

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv4"></a>

```csharp
public ZeroTrustDnsLocationEndpointsIpv4OutputReference Ipv4 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4OutputReference">ZeroTrustDnsLocationEndpointsIpv4OutputReference</a>

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv6"></a>

```csharp
public ZeroTrustDnsLocationEndpointsIpv6OutputReference Ipv6 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6OutputReference">ZeroTrustDnsLocationEndpointsIpv6OutputReference</a>

---

##### `DohInput`<sup>Optional</sup> <a name="DohInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dohInput"></a>

```csharp
public ZeroTrustDnsLocationEndpointsDoh DohInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDoh">ZeroTrustDnsLocationEndpointsDoh</a>

---

##### `DotInput`<sup>Optional</sup> <a name="DotInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.dotInput"></a>

```csharp
public ZeroTrustDnsLocationEndpointsDot DotInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsDot">ZeroTrustDnsLocationEndpointsDot</a>

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv4Input"></a>

```csharp
public ZeroTrustDnsLocationEndpointsIpv4 Ipv4Input { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv4">ZeroTrustDnsLocationEndpointsIpv4</a>

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.ipv6Input"></a>

```csharp
public ZeroTrustDnsLocationEndpointsIpv6 Ipv6Input { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsIpv6">ZeroTrustDnsLocationEndpointsIpv6</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpointsOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDnsLocationEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationEndpoints">ZeroTrustDnsLocationEndpoints</a>

---


### ZeroTrustDnsLocationNetworksList <a name="ZeroTrustDnsLocationNetworksList" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.get"></a>

```csharp
private ZeroTrustDnsLocationNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDnsLocationNetworksOutputReference <a name="ZeroTrustDnsLocationNetworksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDnsLocationNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDnsLocation.ZeroTrustDnsLocationNetworksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



