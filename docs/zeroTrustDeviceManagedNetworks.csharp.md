# `zeroTrustDeviceManagedNetworks` Submodule <a name="`zeroTrustDeviceManagedNetworks` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceManagedNetworks <a name="ZeroTrustDeviceManagedNetworks" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_managed_networks cloudflare_zero_trust_device_managed_networks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceManagedNetworks(Construct Scope, string Id, ZeroTrustDeviceManagedNetworksConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig">ZeroTrustDeviceManagedNetworksConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig">ZeroTrustDeviceManagedNetworksConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.putConfig">PutConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.putConfig"></a>

```csharp
private void PutConfig(ZeroTrustDeviceManagedNetworksConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceManagedNetworks resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDeviceManagedNetworks.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDeviceManagedNetworks.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDeviceManagedNetworks.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDeviceManagedNetworks.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustDeviceManagedNetworks resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDeviceManagedNetworks to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDeviceManagedNetworks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_managed_networks#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceManagedNetworks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference">ZeroTrustDeviceManagedNetworksConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.configInput">ConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.config"></a>

```csharp
public ZeroTrustDeviceManagedNetworksConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference">ZeroTrustDeviceManagedNetworksConfigAOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.configInput"></a>

```csharp
public object ConfigInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworks.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceManagedNetworksConfig <a name="ZeroTrustDeviceManagedNetworksConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceManagedNetworksConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    ZeroTrustDeviceManagedNetworksConfigA Config,
    string Name,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_managed_networks#account_id ZeroTrustDeviceManagedNetworks#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a></code> | The configuration object containing information for the WARP client to detect the managed network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.name">Name</a></code> | <code>string</code> | The name of the device managed network. This name must be unique. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.type">Type</a></code> | <code>string</code> | The type of device managed network. Available values: "tls". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_managed_networks#account_id ZeroTrustDeviceManagedNetworks#account_id}.

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.config"></a>

```csharp
public ZeroTrustDeviceManagedNetworksConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA">ZeroTrustDeviceManagedNetworksConfigA</a>

The configuration object containing information for the WARP client to detect the managed network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_managed_networks#config ZeroTrustDeviceManagedNetworks#config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the device managed network. This name must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_managed_networks#name ZeroTrustDeviceManagedNetworks#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of device managed network. Available values: "tls".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_managed_networks#type ZeroTrustDeviceManagedNetworks#type}

---

### ZeroTrustDeviceManagedNetworksConfigA <a name="ZeroTrustDeviceManagedNetworksConfigA" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceManagedNetworksConfigA {
    string TlsSockaddr,
    string Sha256 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.property.tlsSockaddr">TlsSockaddr</a></code> | <code>string</code> | A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.property.sha256">Sha256</a></code> | <code>string</code> | The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr. |

---

##### `TlsSockaddr`<sup>Required</sup> <a name="TlsSockaddr" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.property.tlsSockaddr"></a>

```csharp
public string TlsSockaddr { get; set; }
```

- *Type:* string

A network address of the form "host:port" that the WARP client will use to detect the presence of a TLS host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_managed_networks#tls_sockaddr ZeroTrustDeviceManagedNetworks#tls_sockaddr}

---

##### `Sha256`<sup>Optional</sup> <a name="Sha256" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigA.property.sha256"></a>

```csharp
public string Sha256 { get; set; }
```

- *Type:* string

The SHA-256 hash of the TLS certificate presented by the host found at tls_sockaddr.

If absent, regular certificate verification (trusted roots, valid timestamp, etc) will be used to validate the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.8.2/docs/resources/zero_trust_device_managed_networks#sha256 ZeroTrustDeviceManagedNetworks#sha256}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceManagedNetworksConfigAOutputReference <a name="ZeroTrustDeviceManagedNetworksConfigAOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceManagedNetworksConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resetSha256">ResetSha256</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSha256` <a name="ResetSha256" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.resetSha256"></a>

```csharp
private void ResetSha256()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.sha256Input">Sha256Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.tlsSockaddrInput">TlsSockaddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.tlsSockaddr">TlsSockaddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sha256Input`<sup>Optional</sup> <a name="Sha256Input" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.sha256Input"></a>

```csharp
public string Sha256Input { get; }
```

- *Type:* string

---

##### `TlsSockaddrInput`<sup>Optional</sup> <a name="TlsSockaddrInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.tlsSockaddrInput"></a>

```csharp
public string TlsSockaddrInput { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `TlsSockaddr`<sup>Required</sup> <a name="TlsSockaddr" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.tlsSockaddr"></a>

```csharp
public string TlsSockaddr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceManagedNetworks.ZeroTrustDeviceManagedNetworksConfigAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



