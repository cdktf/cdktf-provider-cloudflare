# `zeroTrustInfrastructureAccessTarget` Submodule <a name="`zeroTrustInfrastructureAccessTarget` Submodule" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustInfrastructureAccessTarget <a name="ZeroTrustInfrastructureAccessTarget" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_infrastructure_access_target cloudflare_zero_trust_infrastructure_access_target}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustInfrastructureAccessTarget(Construct Scope, string Id, ZeroTrustInfrastructureAccessTargetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig">ZeroTrustInfrastructureAccessTargetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig">ZeroTrustInfrastructureAccessTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.putIp">PutIp</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIp` <a name="PutIp" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.putIp"></a>

```csharp
private void PutIp(ZeroTrustInfrastructureAccessTargetIp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.putIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp">ZeroTrustInfrastructureAccessTargetIp</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustInfrastructureAccessTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustInfrastructureAccessTarget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustInfrastructureAccessTarget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustInfrastructureAccessTarget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustInfrastructureAccessTarget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustInfrastructureAccessTarget resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustInfrastructureAccessTarget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustInfrastructureAccessTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_infrastructure_access_target#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustInfrastructureAccessTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.ip">Ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference">ZeroTrustInfrastructureAccessTargetIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.ipInput">IpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.ip"></a>

```csharp
public ZeroTrustInfrastructureAccessTargetIpOutputReference Ip { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference">ZeroTrustInfrastructureAccessTargetIpOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.ipInput"></a>

```csharp
public object IpInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTarget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustInfrastructureAccessTargetConfig <a name="ZeroTrustInfrastructureAccessTargetConfig" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustInfrastructureAccessTargetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Hostname,
    ZeroTrustInfrastructureAccessTargetIp Ip
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.hostname">Hostname</a></code> | <code>string</code> | A non-unique field that refers to a target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.ip">Ip</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp">ZeroTrustInfrastructureAccessTargetIp</a></code> | The IPv4/IPv6 address that identifies where to reach a target. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_infrastructure_access_target#account_id ZeroTrustInfrastructureAccessTarget#account_id}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

A non-unique field that refers to a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_infrastructure_access_target#hostname ZeroTrustInfrastructureAccessTarget#hostname}

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetConfig.property.ip"></a>

```csharp
public ZeroTrustInfrastructureAccessTargetIp Ip { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp">ZeroTrustInfrastructureAccessTargetIp</a>

The IPv4/IPv6 address that identifies where to reach a target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_infrastructure_access_target#ip ZeroTrustInfrastructureAccessTarget#ip}

---

### ZeroTrustInfrastructureAccessTargetIp <a name="ZeroTrustInfrastructureAccessTargetIp" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustInfrastructureAccessTargetIp {
    ZeroTrustInfrastructureAccessTargetIpIpv4 Ipv4 = null,
    ZeroTrustInfrastructureAccessTargetIpIpv6 Ipv6 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4">ZeroTrustInfrastructureAccessTargetIpIpv4</a></code> | The target's IPv4 address. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6">ZeroTrustInfrastructureAccessTargetIpIpv6</a></code> | The target's IPv6 address. |

---

##### `Ipv4`<sup>Optional</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp.property.ipv4"></a>

```csharp
public ZeroTrustInfrastructureAccessTargetIpIpv4 Ipv4 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4">ZeroTrustInfrastructureAccessTargetIpIpv4</a>

The target's IPv4 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_infrastructure_access_target#ipv4 ZeroTrustInfrastructureAccessTarget#ipv4}

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIp.property.ipv6"></a>

```csharp
public ZeroTrustInfrastructureAccessTargetIpIpv6 Ipv6 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6">ZeroTrustInfrastructureAccessTargetIpIpv6</a>

The target's IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_infrastructure_access_target#ipv6 ZeroTrustInfrastructureAccessTarget#ipv6}

---

### ZeroTrustInfrastructureAccessTargetIpIpv4 <a name="ZeroTrustInfrastructureAccessTargetIpIpv4" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustInfrastructureAccessTargetIpIpv4 {
    string IpAddr,
    string VirtualNetworkId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4.property.ipAddr">IpAddr</a></code> | <code>string</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | The private virtual network identifier for the target. |

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4.property.ipAddr"></a>

```csharp
public string IpAddr { get; set; }
```

- *Type:* string

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_infrastructure_access_target#ip_addr ZeroTrustInfrastructureAccessTarget#ip_addr}

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_infrastructure_access_target#virtual_network_id ZeroTrustInfrastructureAccessTarget#virtual_network_id}

---

### ZeroTrustInfrastructureAccessTargetIpIpv6 <a name="ZeroTrustInfrastructureAccessTargetIpIpv6" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustInfrastructureAccessTargetIpIpv6 {
    string IpAddr,
    string VirtualNetworkId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6.property.ipAddr">IpAddr</a></code> | <code>string</code> | The IP address of the target. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | The private virtual network identifier for the target. |

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6.property.ipAddr"></a>

```csharp
public string IpAddr { get; set; }
```

- *Type:* string

The IP address of the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_infrastructure_access_target#ip_addr ZeroTrustInfrastructureAccessTarget#ip_addr}

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; set; }
```

- *Type:* string

The private virtual network identifier for the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_infrastructure_access_target#virtual_network_id ZeroTrustInfrastructureAccessTarget#virtual_network_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference <a name="ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.ipAddrInput">IpAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.ipAddr">IpAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddrInput`<sup>Optional</sup> <a name="IpAddrInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.ipAddrInput"></a>

```csharp
public string IpAddrInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.ipAddr"></a>

```csharp
public string IpAddr { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference <a name="ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.ipAddrInput">IpAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkIdInput">VirtualNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.ipAddr">IpAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddrInput`<sup>Optional</sup> <a name="IpAddrInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.ipAddrInput"></a>

```csharp
public string IpAddrInput { get; }
```

- *Type:* string

---

##### `VirtualNetworkIdInput`<sup>Optional</sup> <a name="VirtualNetworkIdInput" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkIdInput"></a>

```csharp
public string VirtualNetworkIdInput { get; }
```

- *Type:* string

---

##### `IpAddr`<sup>Required</sup> <a name="IpAddr" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.ipAddr"></a>

```csharp
public string IpAddr { get; }
```

- *Type:* string

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.virtualNetworkId"></a>

```csharp
public string VirtualNetworkId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustInfrastructureAccessTargetIpOutputReference <a name="ZeroTrustInfrastructureAccessTargetIpOutputReference" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustInfrastructureAccessTargetIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.putIpv4">PutIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.putIpv6">PutIpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resetIpv4">ResetIpv4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIpv4` <a name="PutIpv4" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.putIpv4"></a>

```csharp
private void PutIpv4(ZeroTrustInfrastructureAccessTargetIpIpv4 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.putIpv4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4">ZeroTrustInfrastructureAccessTargetIpIpv4</a>

---

##### `PutIpv6` <a name="PutIpv6" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.putIpv6"></a>

```csharp
private void PutIpv6(ZeroTrustInfrastructureAccessTargetIpIpv6 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.putIpv6.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6">ZeroTrustInfrastructureAccessTargetIpIpv6</a>

---

##### `ResetIpv4` <a name="ResetIpv4" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resetIpv4"></a>

```csharp
private void ResetIpv4()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.resetIpv6"></a>

```csharp
private void ResetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference">ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv6">Ipv6</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference">ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv4Input">Ipv4Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv4"></a>

```csharp
public ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference Ipv4 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference">ZeroTrustInfrastructureAccessTargetIpIpv4OutputReference</a>

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv6"></a>

```csharp
public ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference Ipv6 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference">ZeroTrustInfrastructureAccessTargetIpIpv6OutputReference</a>

---

##### `Ipv4Input`<sup>Optional</sup> <a name="Ipv4Input" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv4Input"></a>

```csharp
public object Ipv4Input { get; }
```

- *Type:* object

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.ipv6Input"></a>

```csharp
public object Ipv6Input { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustInfrastructureAccessTarget.ZeroTrustInfrastructureAccessTargetIpOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



