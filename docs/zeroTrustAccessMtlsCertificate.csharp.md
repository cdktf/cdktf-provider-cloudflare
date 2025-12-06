# `zeroTrustAccessMtlsCertificate` Submodule <a name="`zeroTrustAccessMtlsCertificate` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessMtlsCertificate <a name="ZeroTrustAccessMtlsCertificate" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_mtls_certificate cloudflare_zero_trust_access_mtls_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessMtlsCertificate(Construct Scope, string Id, ZeroTrustAccessMtlsCertificateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig">ZeroTrustAccessMtlsCertificateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig">ZeroTrustAccessMtlsCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetAssociatedHostnames">ResetAssociatedHostnames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAssociatedHostnames` <a name="ResetAssociatedHostnames" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetAssociatedHostnames"></a>

```csharp
private void ResetAssociatedHostnames()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessMtlsCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessMtlsCertificate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessMtlsCertificate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessMtlsCertificate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessMtlsCertificate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustAccessMtlsCertificate resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustAccessMtlsCertificate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustAccessMtlsCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_mtls_certificate#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessMtlsCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.expiresOn">ExpiresOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.associatedHostnamesInput">AssociatedHostnamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.certificateInput">CertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.associatedHostnames">AssociatedHostnames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.certificate">Certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ExpiresOn`<sup>Required</sup> <a name="ExpiresOn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.expiresOn"></a>

```csharp
public string ExpiresOn { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AssociatedHostnamesInput`<sup>Optional</sup> <a name="AssociatedHostnamesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.associatedHostnamesInput"></a>

```csharp
public string[] AssociatedHostnamesInput { get; }
```

- *Type:* string[]

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.certificateInput"></a>

```csharp
public string CertificateInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AssociatedHostnames`<sup>Required</sup> <a name="AssociatedHostnames" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.associatedHostnames"></a>

```csharp
public string[] AssociatedHostnames { get; }
```

- *Type:* string[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.certificate"></a>

```csharp
public string Certificate { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessMtlsCertificateConfig <a name="ZeroTrustAccessMtlsCertificateConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessMtlsCertificateConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Certificate,
    string Name,
    string AccountId = null,
    string[] AssociatedHostnames = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.certificate">Certificate</a></code> | <code>string</code> | The certificate content. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.name">Name</a></code> | <code>string</code> | The name of the certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.accountId">AccountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.associatedHostnames">AssociatedHostnames</a></code> | <code>string[]</code> | The hostnames of the applications that will use this certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.certificate"></a>

```csharp
public string Certificate { get; set; }
```

- *Type:* string

The certificate content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_mtls_certificate#certificate ZeroTrustAccessMtlsCertificate#certificate}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_mtls_certificate#name ZeroTrustAccessMtlsCertificate#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_mtls_certificate#account_id ZeroTrustAccessMtlsCertificate#account_id}

---

##### `AssociatedHostnames`<sup>Optional</sup> <a name="AssociatedHostnames" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.associatedHostnames"></a>

```csharp
public string[] AssociatedHostnames { get; set; }
```

- *Type:* string[]

The hostnames of the applications that will use this certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_mtls_certificate#associated_hostnames ZeroTrustAccessMtlsCertificate#associated_hostnames}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsCertificate.ZeroTrustAccessMtlsCertificateConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_access_mtls_certificate#zone_id ZeroTrustAccessMtlsCertificate#zone_id}

---



