# `zeroTrustDeviceCustomProfileLocalDomainFallback` Submodule <a name="`zeroTrustDeviceCustomProfileLocalDomainFallback` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceCustomProfileLocalDomainFallback <a name="ZeroTrustDeviceCustomProfileLocalDomainFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback cloudflare_zero_trust_device_custom_profile_local_domain_fallback}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileLocalDomainFallback(Construct Scope, string Id, ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig">ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig">ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.putDomains">PutDomains</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDomains` <a name="PutDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.putDomains"></a>

```csharp
private void PutDomains(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.putDomains.parameter.value"></a>

- *Type:* object

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceCustomProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDeviceCustomProfileLocalDomainFallback.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDeviceCustomProfileLocalDomainFallback.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDeviceCustomProfileLocalDomainFallback.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDeviceCustomProfileLocalDomainFallback.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustDeviceCustomProfileLocalDomainFallback resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDeviceCustomProfileLocalDomainFallback to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDeviceCustomProfileLocalDomainFallback that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceCustomProfileLocalDomainFallback to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.domains">Domains</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.domainsInput">DomainsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.domains"></a>

```csharp
public ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList Domains { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList">ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.domainsInput"></a>

```csharp
public object DomainsInput { get; }
```

- *Type:* object

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallback.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig <a name="ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    object Domains,
    string PolicyId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#account_id ZeroTrustDeviceCustomProfileLocalDomainFallback#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.domains">Domains</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#domains ZeroTrustDeviceCustomProfileLocalDomainFallback#domains}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Device ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#account_id ZeroTrustDeviceCustomProfileLocalDomainFallback#account_id}.

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.domains"></a>

```csharp
public object Domains { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#domains ZeroTrustDeviceCustomProfileLocalDomainFallback#domains}.

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Device ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#policy_id ZeroTrustDeviceCustomProfileLocalDomainFallback#policy_id}

---

### ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains <a name="ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains {
    string Suffix,
    string Description = null,
    string[] DnsServer = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.property.suffix">Suffix</a></code> | <code>string</code> | The domain suffix to match when resolving locally. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.property.description">Description</a></code> | <code>string</code> | A description of the fallback domain, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.property.dnsServer">DnsServer</a></code> | <code>string[]</code> | A list of IP addresses to handle domain resolution. |

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

The domain suffix to match when resolving locally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#suffix ZeroTrustDeviceCustomProfileLocalDomainFallback#suffix}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the fallback domain, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#description ZeroTrustDeviceCustomProfileLocalDomainFallback#description}

---

##### `DnsServer`<sup>Optional</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomains.property.dnsServer"></a>

```csharp
public string[] DnsServer { get; set; }
```

- *Type:* string[]

A list of IP addresses to handle domain resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.0.0/docs/resources/zero_trust_device_custom_profile_local_domain_fallback#dns_server ZeroTrustDeviceCustomProfileLocalDomainFallback#dns_server}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList <a name="ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.get"></a>

```csharp
private ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference <a name="ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resetDnsServer">ResetDnsServer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDnsServer` <a name="ResetDnsServer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.resetDnsServer"></a>

```csharp
private void ResetDnsServer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.dnsServerInput">DnsServerInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.dnsServer">DnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DnsServerInput`<sup>Optional</sup> <a name="DnsServerInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.dnsServerInput"></a>

```csharp
public string[] DnsServerInput { get; }
```

- *Type:* string[]

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.dnsServer"></a>

```csharp
public string[] DnsServer { get; }
```

- *Type:* string[]

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfileLocalDomainFallback.ZeroTrustDeviceCustomProfileLocalDomainFallbackDomainsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



