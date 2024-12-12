# `zeroTrustLocalFallbackDomain` Submodule <a name="`zeroTrustLocalFallbackDomain` Submodule" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustLocalFallbackDomain <a name="ZeroTrustLocalFallbackDomain" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_local_fallback_domain cloudflare_zero_trust_local_fallback_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustLocalFallbackDomain(Construct Scope, string Id, ZeroTrustLocalFallbackDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig">ZeroTrustLocalFallbackDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig">ZeroTrustLocalFallbackDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.putDomains">PutDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.resetPolicyId">ResetPolicyId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDomains` <a name="PutDomains" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.putDomains"></a>

```csharp
private void PutDomains(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.putDomains.parameter.value"></a>

- *Type:* object

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustLocalFallbackDomain resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustLocalFallbackDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustLocalFallbackDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustLocalFallbackDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustLocalFallbackDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustLocalFallbackDomain resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustLocalFallbackDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustLocalFallbackDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_local_fallback_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustLocalFallbackDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.domains">Domains</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList">ZeroTrustLocalFallbackDomainDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.domainsInput">DomainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.domains"></a>

```csharp
public ZeroTrustLocalFallbackDomainDomainsList Domains { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList">ZeroTrustLocalFallbackDomainDomainsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.domainsInput"></a>

```csharp
public object DomainsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustLocalFallbackDomainConfig <a name="ZeroTrustLocalFallbackDomainConfig" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustLocalFallbackDomainConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    object Domains,
    string Id = null,
    string PolicyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.domains">Domains</a></code> | <code>object</code> | domains block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_local_fallback_domain#id ZeroTrustLocalFallbackDomain#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.policyId">PolicyId</a></code> | <code>string</code> | The settings policy for which to configure this fallback domain policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_local_fallback_domain#account_id ZeroTrustLocalFallbackDomain#account_id}

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.domains"></a>

```csharp
public object Domains { get; set; }
```

- *Type:* object

domains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_local_fallback_domain#domains ZeroTrustLocalFallbackDomain#domains}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_local_fallback_domain#id ZeroTrustLocalFallbackDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

The settings policy for which to configure this fallback domain policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_local_fallback_domain#policy_id ZeroTrustLocalFallbackDomain#policy_id}

---

### ZeroTrustLocalFallbackDomainDomains <a name="ZeroTrustLocalFallbackDomainDomains" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustLocalFallbackDomainDomains {
    string Description = null,
    string[] DnsServer = null,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.property.description">Description</a></code> | <code>string</code> | A description of the fallback domain, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.property.dnsServer">DnsServer</a></code> | <code>string[]</code> | A list of IP addresses to handle domain resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.property.suffix">Suffix</a></code> | <code>string</code> | The domain suffix to match when resolving locally. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the fallback domain, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_local_fallback_domain#description ZeroTrustLocalFallbackDomain#description}

---

##### `DnsServer`<sup>Optional</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.property.dnsServer"></a>

```csharp
public string[] DnsServer { get; set; }
```

- *Type:* string[]

A list of IP addresses to handle domain resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_local_fallback_domain#dns_server ZeroTrustLocalFallbackDomain#dns_server}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomains.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

The domain suffix to match when resolving locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.48.0/docs/resources/zero_trust_local_fallback_domain#suffix ZeroTrustLocalFallbackDomain#suffix}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustLocalFallbackDomainDomainsList <a name="ZeroTrustLocalFallbackDomainDomainsList" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustLocalFallbackDomainDomainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.get"></a>

```csharp
private ZeroTrustLocalFallbackDomainDomainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustLocalFallbackDomainDomainsOutputReference <a name="ZeroTrustLocalFallbackDomainDomainsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustLocalFallbackDomainDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resetDnsServer">ResetDnsServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDnsServer` <a name="ResetDnsServer" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resetDnsServer"></a>

```csharp
private void ResetDnsServer()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.dnsServerInput">DnsServerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.dnsServer">DnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsServerInput`<sup>Optional</sup> <a name="DnsServerInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.dnsServerInput"></a>

```csharp
public string[] DnsServerInput { get; }
```

- *Type:* string[]

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.dnsServer"></a>

```csharp
public string[] DnsServer { get; }
```

- *Type:* string[]

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustLocalFallbackDomain.ZeroTrustLocalFallbackDomainDomainsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



