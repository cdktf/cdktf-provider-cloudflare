# `zeroTrustAccessIdentityProvider` Submodule <a name="`zeroTrustAccessIdentityProvider` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessIdentityProvider <a name="ZeroTrustAccessIdentityProvider" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider cloudflare_zero_trust_access_identity_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessIdentityProvider(Construct Scope, string Id, ZeroTrustAccessIdentityProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig">ZeroTrustAccessIdentityProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig">ZeroTrustAccessIdentityProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putScimConfig">PutScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetScimConfig">ResetScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putConfig"></a>

```csharp
private void PutConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putConfig.parameter.value"></a>

- *Type:* object

---

##### `PutScimConfig` <a name="PutScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putScimConfig"></a>

```csharp
private void PutScimConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.putScimConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetScimConfig` <a name="ResetScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetScimConfig"></a>

```csharp
private void ResetScimConfig()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessIdentityProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessIdentityProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessIdentityProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessIdentityProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessIdentityProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustAccessIdentityProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustAccessIdentityProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustAccessIdentityProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessIdentityProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList">ZeroTrustAccessIdentityProviderConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.scimConfig">ScimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList">ZeroTrustAccessIdentityProviderScimConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.configInput">ConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.scimConfigInput">ScimConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.config"></a>

```csharp
public ZeroTrustAccessIdentityProviderConfigAList Config { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList">ZeroTrustAccessIdentityProviderConfigAList</a>

---

##### `ScimConfig`<sup>Required</sup> <a name="ScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.scimConfig"></a>

```csharp
public ZeroTrustAccessIdentityProviderScimConfigList ScimConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList">ZeroTrustAccessIdentityProviderScimConfigList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.configInput"></a>

```csharp
public object ConfigInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScimConfigInput`<sup>Optional</sup> <a name="ScimConfigInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.scimConfigInput"></a>

```csharp
public object ScimConfigInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessIdentityProviderConfig <a name="ZeroTrustAccessIdentityProviderConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Type,
    string AccountId = null,
    object Config = null,
    string Id = null,
    object ScimConfig = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.name">Name</a></code> | <code>string</code> | Friendly name of the Access Identity Provider configuration. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.type">Type</a></code> | <code>string</code> | The provider type to use. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.config">Config</a></code> | <code>object</code> | config block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#id ZeroTrustAccessIdentityProvider#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.scimConfig">ScimConfig</a></code> | <code>object</code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Friendly name of the Access Identity Provider configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#name ZeroTrustAccessIdentityProvider#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The provider type to use.

Available values: `azureAD`, `centrify`, `facebook`, `github`, `google`, `google-apps`, `linkedin`, `oidc`, `okta`, `onelogin`, `onetimepin`, `pingone`, `saml`, `yandex`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#type ZeroTrustAccessIdentityProvider#type}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Conflicts with `zone_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#account_id ZeroTrustAccessIdentityProvider#account_id}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.config"></a>

```csharp
public object Config { get; set; }
```

- *Type:* object

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#config ZeroTrustAccessIdentityProvider#config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#id ZeroTrustAccessIdentityProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScimConfig`<sup>Optional</sup> <a name="ScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.scimConfig"></a>

```csharp
public object ScimConfig { get; set; }
```

- *Type:* object

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#scim_config ZeroTrustAccessIdentityProvider#scim_config}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource.

Conflicts with `account_id`. **Modifying this attribute will force creation of a new resource.**

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#zone_id ZeroTrustAccessIdentityProvider#zone_id}

---

### ZeroTrustAccessIdentityProviderConfigA <a name="ZeroTrustAccessIdentityProviderConfigA" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderConfigA {
    string ApiToken = null,
    string AppsDomain = null,
    string[] Attributes = null,
    string AuthorizationServerId = null,
    string AuthUrl = null,
    string CentrifyAccount = null,
    string CentrifyAppId = null,
    string CertsUrl = null,
    string[] Claims = null,
    string ClientId = null,
    string ClientSecret = null,
    object ConditionalAccessEnabled = null,
    string DirectoryId = null,
    string EmailAttributeName = null,
    string EmailClaimName = null,
    string IdpPublicCert = null,
    string IssuerUrl = null,
    string OktaAccount = null,
    string OneloginAccount = null,
    string PingEnvId = null,
    object PkceEnabled = null,
    string[] Scopes = null,
    object SignRequest = null,
    string SsoTargetUrl = null,
    object SupportGroups = null,
    string TokenUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.apiToken">ApiToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#api_token ZeroTrustAccessIdentityProvider#api_token}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.appsDomain">AppsDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#apps_domain ZeroTrustAccessIdentityProvider#apps_domain}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.attributes">Attributes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#attributes ZeroTrustAccessIdentityProvider#attributes}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.authorizationServerId">AuthorizationServerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#authorization_server_id ZeroTrustAccessIdentityProvider#authorization_server_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.authUrl">AuthUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#auth_url ZeroTrustAccessIdentityProvider#auth_url}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.centrifyAccount">CentrifyAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#centrify_account ZeroTrustAccessIdentityProvider#centrify_account}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.centrifyAppId">CentrifyAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#centrify_app_id ZeroTrustAccessIdentityProvider#centrify_app_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.certsUrl">CertsUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#certs_url ZeroTrustAccessIdentityProvider#certs_url}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.claims">Claims</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#claims ZeroTrustAccessIdentityProvider#claims}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#client_id ZeroTrustAccessIdentityProvider#client_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#client_secret ZeroTrustAccessIdentityProvider#client_secret}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.conditionalAccessEnabled">ConditionalAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#conditional_access_enabled ZeroTrustAccessIdentityProvider#conditional_access_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#directory_id ZeroTrustAccessIdentityProvider#directory_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.emailAttributeName">EmailAttributeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#email_attribute_name ZeroTrustAccessIdentityProvider#email_attribute_name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.emailClaimName">EmailClaimName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#email_claim_name ZeroTrustAccessIdentityProvider#email_claim_name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.idpPublicCert">IdpPublicCert</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#idp_public_cert ZeroTrustAccessIdentityProvider#idp_public_cert}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#issuer_url ZeroTrustAccessIdentityProvider#issuer_url}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.oktaAccount">OktaAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#okta_account ZeroTrustAccessIdentityProvider#okta_account}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.oneloginAccount">OneloginAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#onelogin_account ZeroTrustAccessIdentityProvider#onelogin_account}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.pingEnvId">PingEnvId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#ping_env_id ZeroTrustAccessIdentityProvider#ping_env_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.pkceEnabled">PkceEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#pkce_enabled ZeroTrustAccessIdentityProvider#pkce_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.scopes">Scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#scopes ZeroTrustAccessIdentityProvider#scopes}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.signRequest">SignRequest</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#sign_request ZeroTrustAccessIdentityProvider#sign_request}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.ssoTargetUrl">SsoTargetUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#sso_target_url ZeroTrustAccessIdentityProvider#sso_target_url}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.supportGroups">SupportGroups</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#support_groups ZeroTrustAccessIdentityProvider#support_groups}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#token_url ZeroTrustAccessIdentityProvider#token_url}. |

---

##### `ApiToken`<sup>Optional</sup> <a name="ApiToken" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.apiToken"></a>

```csharp
public string ApiToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#api_token ZeroTrustAccessIdentityProvider#api_token}.

---

##### `AppsDomain`<sup>Optional</sup> <a name="AppsDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.appsDomain"></a>

```csharp
public string AppsDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#apps_domain ZeroTrustAccessIdentityProvider#apps_domain}.

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.attributes"></a>

```csharp
public string[] Attributes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#attributes ZeroTrustAccessIdentityProvider#attributes}.

---

##### `AuthorizationServerId`<sup>Optional</sup> <a name="AuthorizationServerId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.authorizationServerId"></a>

```csharp
public string AuthorizationServerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#authorization_server_id ZeroTrustAccessIdentityProvider#authorization_server_id}.

---

##### `AuthUrl`<sup>Optional</sup> <a name="AuthUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.authUrl"></a>

```csharp
public string AuthUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#auth_url ZeroTrustAccessIdentityProvider#auth_url}.

---

##### `CentrifyAccount`<sup>Optional</sup> <a name="CentrifyAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.centrifyAccount"></a>

```csharp
public string CentrifyAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#centrify_account ZeroTrustAccessIdentityProvider#centrify_account}.

---

##### `CentrifyAppId`<sup>Optional</sup> <a name="CentrifyAppId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.centrifyAppId"></a>

```csharp
public string CentrifyAppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#centrify_app_id ZeroTrustAccessIdentityProvider#centrify_app_id}.

---

##### `CertsUrl`<sup>Optional</sup> <a name="CertsUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.certsUrl"></a>

```csharp
public string CertsUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#certs_url ZeroTrustAccessIdentityProvider#certs_url}.

---

##### `Claims`<sup>Optional</sup> <a name="Claims" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.claims"></a>

```csharp
public string[] Claims { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#claims ZeroTrustAccessIdentityProvider#claims}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#client_id ZeroTrustAccessIdentityProvider#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#client_secret ZeroTrustAccessIdentityProvider#client_secret}.

---

##### `ConditionalAccessEnabled`<sup>Optional</sup> <a name="ConditionalAccessEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.conditionalAccessEnabled"></a>

```csharp
public object ConditionalAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#conditional_access_enabled ZeroTrustAccessIdentityProvider#conditional_access_enabled}.

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#directory_id ZeroTrustAccessIdentityProvider#directory_id}.

---

##### `EmailAttributeName`<sup>Optional</sup> <a name="EmailAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.emailAttributeName"></a>

```csharp
public string EmailAttributeName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#email_attribute_name ZeroTrustAccessIdentityProvider#email_attribute_name}.

---

##### `EmailClaimName`<sup>Optional</sup> <a name="EmailClaimName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.emailClaimName"></a>

```csharp
public string EmailClaimName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#email_claim_name ZeroTrustAccessIdentityProvider#email_claim_name}.

---

##### `IdpPublicCert`<sup>Optional</sup> <a name="IdpPublicCert" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.idpPublicCert"></a>

```csharp
public string IdpPublicCert { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#idp_public_cert ZeroTrustAccessIdentityProvider#idp_public_cert}.

---

##### `IssuerUrl`<sup>Optional</sup> <a name="IssuerUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#issuer_url ZeroTrustAccessIdentityProvider#issuer_url}.

---

##### `OktaAccount`<sup>Optional</sup> <a name="OktaAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.oktaAccount"></a>

```csharp
public string OktaAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#okta_account ZeroTrustAccessIdentityProvider#okta_account}.

---

##### `OneloginAccount`<sup>Optional</sup> <a name="OneloginAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.oneloginAccount"></a>

```csharp
public string OneloginAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#onelogin_account ZeroTrustAccessIdentityProvider#onelogin_account}.

---

##### `PingEnvId`<sup>Optional</sup> <a name="PingEnvId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.pingEnvId"></a>

```csharp
public string PingEnvId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#ping_env_id ZeroTrustAccessIdentityProvider#ping_env_id}.

---

##### `PkceEnabled`<sup>Optional</sup> <a name="PkceEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.pkceEnabled"></a>

```csharp
public object PkceEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#pkce_enabled ZeroTrustAccessIdentityProvider#pkce_enabled}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#scopes ZeroTrustAccessIdentityProvider#scopes}.

---

##### `SignRequest`<sup>Optional</sup> <a name="SignRequest" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.signRequest"></a>

```csharp
public object SignRequest { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#sign_request ZeroTrustAccessIdentityProvider#sign_request}.

---

##### `SsoTargetUrl`<sup>Optional</sup> <a name="SsoTargetUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.ssoTargetUrl"></a>

```csharp
public string SsoTargetUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#sso_target_url ZeroTrustAccessIdentityProvider#sso_target_url}.

---

##### `SupportGroups`<sup>Optional</sup> <a name="SupportGroups" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.supportGroups"></a>

```csharp
public object SupportGroups { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#support_groups ZeroTrustAccessIdentityProvider#support_groups}.

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigA.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#token_url ZeroTrustAccessIdentityProvider#token_url}.

---

### ZeroTrustAccessIdentityProviderScimConfig <a name="ZeroTrustAccessIdentityProviderScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderScimConfig {
    object Enabled = null,
    object GroupMemberDeprovision = null,
    string IdentityUpdateBehavior = null,
    object SeatDeprovision = null,
    string Secret = null,
    object UserDeprovision = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.enabled">Enabled</a></code> | <code>object</code> | A flag to enable or disable SCIM for the identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.groupMemberDeprovision">GroupMemberDeprovision</a></code> | <code>object</code> | Deprecated. Use `identity_update_behavior`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.identityUpdateBehavior">IdentityUpdateBehavior</a></code> | <code>string</code> | Indicates how a SCIM event updates a user identity used for policy evaluation. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.seatDeprovision">SeatDeprovision</a></code> | <code>object</code> | A flag to remove a user's seat in Zero Trust when they have been deprovisioned in the Identity Provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.secret">Secret</a></code> | <code>string</code> | A read-only token generated when the SCIM integration is enabled for the first time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.userDeprovision">UserDeprovision</a></code> | <code>object</code> | A flag to enable revoking a user's session in Access and Gateway when they have been deprovisioned in the Identity Provider. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

A flag to enable or disable SCIM for the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#enabled ZeroTrustAccessIdentityProvider#enabled}

---

##### `GroupMemberDeprovision`<sup>Optional</sup> <a name="GroupMemberDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.groupMemberDeprovision"></a>

```csharp
public object GroupMemberDeprovision { get; set; }
```

- *Type:* object

Deprecated. Use `identity_update_behavior`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#group_member_deprovision ZeroTrustAccessIdentityProvider#group_member_deprovision}

---

##### `IdentityUpdateBehavior`<sup>Optional</sup> <a name="IdentityUpdateBehavior" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.identityUpdateBehavior"></a>

```csharp
public string IdentityUpdateBehavior { get; set; }
```

- *Type:* string

Indicates how a SCIM event updates a user identity used for policy evaluation.

Use "automatic" to automatically update a user's identity and augment it with fields from the SCIM user resource. Use "reauth" to force re-authentication on group membership updates, user identity update will only occur after successful re-authentication. With "reauth" identities will not contain fields from the SCIM user resource. With "no_action" identities will not be changed by SCIM updates in any way and users will not be prompted to reauthenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#identity_update_behavior ZeroTrustAccessIdentityProvider#identity_update_behavior}

---

##### `SeatDeprovision`<sup>Optional</sup> <a name="SeatDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.seatDeprovision"></a>

```csharp
public object SeatDeprovision { get; set; }
```

- *Type:* object

A flag to remove a user's seat in Zero Trust when they have been deprovisioned in the Identity Provider.

This cannot be enabled unless user_deprovision is also enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#seat_deprovision ZeroTrustAccessIdentityProvider#seat_deprovision}

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

A read-only token generated when the SCIM integration is enabled for the first time.

It is redacted on subsequent requests.  If you lose this you will need to refresh it token at /access/identity_providers/:idpID/refresh_scim_secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#secret ZeroTrustAccessIdentityProvider#secret}

---

##### `UserDeprovision`<sup>Optional</sup> <a name="UserDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfig.property.userDeprovision"></a>

```csharp
public object UserDeprovision { get; set; }
```

- *Type:* object

A flag to enable revoking a user's session in Access and Gateway when they have been deprovisioned in the Identity Provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.50.0/docs/resources/zero_trust_access_identity_provider#user_deprovision ZeroTrustAccessIdentityProvider#user_deprovision}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessIdentityProviderConfigAList <a name="ZeroTrustAccessIdentityProviderConfigAList" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderConfigAList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.get"></a>

```csharp
private ZeroTrustAccessIdentityProviderConfigAOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessIdentityProviderConfigAOutputReference <a name="ZeroTrustAccessIdentityProviderConfigAOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetApiToken">ResetApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAppsDomain">ResetAppsDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAuthorizationServerId">ResetAuthorizationServerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAuthUrl">ResetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCentrifyAccount">ResetCentrifyAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCentrifyAppId">ResetCentrifyAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCertsUrl">ResetCertsUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClaims">ResetClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetConditionalAccessEnabled">ResetConditionalAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEmailAttributeName">ResetEmailAttributeName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEmailClaimName">ResetEmailClaimName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetIdpPublicCert">ResetIdpPublicCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetIssuerUrl">ResetIssuerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetOktaAccount">ResetOktaAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetOneloginAccount">ResetOneloginAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPingEnvId">ResetPingEnvId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPkceEnabled">ResetPkceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSignRequest">ResetSignRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl">ResetSsoTargetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSupportGroups">ResetSupportGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetTokenUrl">ResetTokenUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiToken` <a name="ResetApiToken" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetApiToken"></a>

```csharp
private void ResetApiToken()
```

##### `ResetAppsDomain` <a name="ResetAppsDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAppsDomain"></a>

```csharp
private void ResetAppsDomain()
```

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetAuthorizationServerId` <a name="ResetAuthorizationServerId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAuthorizationServerId"></a>

```csharp
private void ResetAuthorizationServerId()
```

##### `ResetAuthUrl` <a name="ResetAuthUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetAuthUrl"></a>

```csharp
private void ResetAuthUrl()
```

##### `ResetCentrifyAccount` <a name="ResetCentrifyAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCentrifyAccount"></a>

```csharp
private void ResetCentrifyAccount()
```

##### `ResetCentrifyAppId` <a name="ResetCentrifyAppId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCentrifyAppId"></a>

```csharp
private void ResetCentrifyAppId()
```

##### `ResetCertsUrl` <a name="ResetCertsUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetCertsUrl"></a>

```csharp
private void ResetCertsUrl()
```

##### `ResetClaims` <a name="ResetClaims" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClaims"></a>

```csharp
private void ResetClaims()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetConditionalAccessEnabled` <a name="ResetConditionalAccessEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetConditionalAccessEnabled"></a>

```csharp
private void ResetConditionalAccessEnabled()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetDirectoryId"></a>

```csharp
private void ResetDirectoryId()
```

##### `ResetEmailAttributeName` <a name="ResetEmailAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEmailAttributeName"></a>

```csharp
private void ResetEmailAttributeName()
```

##### `ResetEmailClaimName` <a name="ResetEmailClaimName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetEmailClaimName"></a>

```csharp
private void ResetEmailClaimName()
```

##### `ResetIdpPublicCert` <a name="ResetIdpPublicCert" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetIdpPublicCert"></a>

```csharp
private void ResetIdpPublicCert()
```

##### `ResetIssuerUrl` <a name="ResetIssuerUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetIssuerUrl"></a>

```csharp
private void ResetIssuerUrl()
```

##### `ResetOktaAccount` <a name="ResetOktaAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetOktaAccount"></a>

```csharp
private void ResetOktaAccount()
```

##### `ResetOneloginAccount` <a name="ResetOneloginAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetOneloginAccount"></a>

```csharp
private void ResetOneloginAccount()
```

##### `ResetPingEnvId` <a name="ResetPingEnvId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPingEnvId"></a>

```csharp
private void ResetPingEnvId()
```

##### `ResetPkceEnabled` <a name="ResetPkceEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetPkceEnabled"></a>

```csharp
private void ResetPkceEnabled()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSignRequest` <a name="ResetSignRequest" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSignRequest"></a>

```csharp
private void ResetSignRequest()
```

##### `ResetSsoTargetUrl` <a name="ResetSsoTargetUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSsoTargetUrl"></a>

```csharp
private void ResetSsoTargetUrl()
```

##### `ResetSupportGroups` <a name="ResetSupportGroups" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetSupportGroups"></a>

```csharp
private void ResetSupportGroups()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.resetTokenUrl"></a>

```csharp
private void ResetTokenUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.apiTokenInput">ApiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomainInput">AppsDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributesInput">AttributesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerIdInput">AuthorizationServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrlInput">AuthUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput">CentrifyAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput">CentrifyAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrlInput">CertsUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.claimsInput">ClaimsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabledInput">ConditionalAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput">EmailAttributeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimNameInput">EmailClaimNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCertInput">IdpPublicCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccountInput">OktaAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput">OneloginAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvIdInput">PingEnvIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput">PkceEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequestInput">SignRequestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput">SsoTargetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroupsInput">SupportGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.apiToken">ApiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomain">AppsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributes">Attributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerId">AuthorizationServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrl">AuthUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccount">CentrifyAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppId">CentrifyAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrl">CertsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.claims">Claims</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled">ConditionalAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeName">EmailAttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimName">EmailClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCert">IdpPublicCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccount">OktaAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccount">OneloginAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvId">PingEnvId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabled">PkceEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequest">SignRequest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl">SsoTargetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroups">SupportGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

##### `ApiTokenInput`<sup>Optional</sup> <a name="ApiTokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.apiTokenInput"></a>

```csharp
public string ApiTokenInput { get; }
```

- *Type:* string

---

##### `AppsDomainInput`<sup>Optional</sup> <a name="AppsDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomainInput"></a>

```csharp
public string AppsDomainInput { get; }
```

- *Type:* string

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributesInput"></a>

```csharp
public string[] AttributesInput { get; }
```

- *Type:* string[]

---

##### `AuthorizationServerIdInput`<sup>Optional</sup> <a name="AuthorizationServerIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerIdInput"></a>

```csharp
public string AuthorizationServerIdInput { get; }
```

- *Type:* string

---

##### `AuthUrlInput`<sup>Optional</sup> <a name="AuthUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrlInput"></a>

```csharp
public string AuthUrlInput { get; }
```

- *Type:* string

---

##### `CentrifyAccountInput`<sup>Optional</sup> <a name="CentrifyAccountInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccountInput"></a>

```csharp
public string CentrifyAccountInput { get; }
```

- *Type:* string

---

##### `CentrifyAppIdInput`<sup>Optional</sup> <a name="CentrifyAppIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppIdInput"></a>

```csharp
public string CentrifyAppIdInput { get; }
```

- *Type:* string

---

##### `CertsUrlInput`<sup>Optional</sup> <a name="CertsUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrlInput"></a>

```csharp
public string CertsUrlInput { get; }
```

- *Type:* string

---

##### `ClaimsInput`<sup>Optional</sup> <a name="ClaimsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.claimsInput"></a>

```csharp
public string[] ClaimsInput { get; }
```

- *Type:* string[]

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ConditionalAccessEnabledInput`<sup>Optional</sup> <a name="ConditionalAccessEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabledInput"></a>

```csharp
public object ConditionalAccessEnabledInput { get; }
```

- *Type:* object

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `EmailAttributeNameInput`<sup>Optional</sup> <a name="EmailAttributeNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeNameInput"></a>

```csharp
public string EmailAttributeNameInput { get; }
```

- *Type:* string

---

##### `EmailClaimNameInput`<sup>Optional</sup> <a name="EmailClaimNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimNameInput"></a>

```csharp
public string EmailClaimNameInput { get; }
```

- *Type:* string

---

##### `IdpPublicCertInput`<sup>Optional</sup> <a name="IdpPublicCertInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCertInput"></a>

```csharp
public string IdpPublicCertInput { get; }
```

- *Type:* string

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrlInput"></a>

```csharp
public string IssuerUrlInput { get; }
```

- *Type:* string

---

##### `OktaAccountInput`<sup>Optional</sup> <a name="OktaAccountInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccountInput"></a>

```csharp
public string OktaAccountInput { get; }
```

- *Type:* string

---

##### `OneloginAccountInput`<sup>Optional</sup> <a name="OneloginAccountInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccountInput"></a>

```csharp
public string OneloginAccountInput { get; }
```

- *Type:* string

---

##### `PingEnvIdInput`<sup>Optional</sup> <a name="PingEnvIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvIdInput"></a>

```csharp
public string PingEnvIdInput { get; }
```

- *Type:* string

---

##### `PkceEnabledInput`<sup>Optional</sup> <a name="PkceEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabledInput"></a>

```csharp
public object PkceEnabledInput { get; }
```

- *Type:* object

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SignRequestInput`<sup>Optional</sup> <a name="SignRequestInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequestInput"></a>

```csharp
public object SignRequestInput { get; }
```

- *Type:* object

---

##### `SsoTargetUrlInput`<sup>Optional</sup> <a name="SsoTargetUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrlInput"></a>

```csharp
public string SsoTargetUrlInput { get; }
```

- *Type:* string

---

##### `SupportGroupsInput`<sup>Optional</sup> <a name="SupportGroupsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroupsInput"></a>

```csharp
public object SupportGroupsInput { get; }
```

- *Type:* object

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrlInput"></a>

```csharp
public string TokenUrlInput { get; }
```

- *Type:* string

---

##### `ApiToken`<sup>Required</sup> <a name="ApiToken" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.apiToken"></a>

```csharp
public string ApiToken { get; }
```

- *Type:* string

---

##### `AppsDomain`<sup>Required</sup> <a name="AppsDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.appsDomain"></a>

```csharp
public string AppsDomain { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.attributes"></a>

```csharp
public string[] Attributes { get; }
```

- *Type:* string[]

---

##### `AuthorizationServerId`<sup>Required</sup> <a name="AuthorizationServerId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authorizationServerId"></a>

```csharp
public string AuthorizationServerId { get; }
```

- *Type:* string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.authUrl"></a>

```csharp
public string AuthUrl { get; }
```

- *Type:* string

---

##### `CentrifyAccount`<sup>Required</sup> <a name="CentrifyAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAccount"></a>

```csharp
public string CentrifyAccount { get; }
```

- *Type:* string

---

##### `CentrifyAppId`<sup>Required</sup> <a name="CentrifyAppId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.centrifyAppId"></a>

```csharp
public string CentrifyAppId { get; }
```

- *Type:* string

---

##### `CertsUrl`<sup>Required</sup> <a name="CertsUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.certsUrl"></a>

```csharp
public string CertsUrl { get; }
```

- *Type:* string

---

##### `Claims`<sup>Required</sup> <a name="Claims" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.claims"></a>

```csharp
public string[] Claims { get; }
```

- *Type:* string[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ConditionalAccessEnabled`<sup>Required</sup> <a name="ConditionalAccessEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.conditionalAccessEnabled"></a>

```csharp
public object ConditionalAccessEnabled { get; }
```

- *Type:* object

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `EmailAttributeName`<sup>Required</sup> <a name="EmailAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailAttributeName"></a>

```csharp
public string EmailAttributeName { get; }
```

- *Type:* string

---

##### `EmailClaimName`<sup>Required</sup> <a name="EmailClaimName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.emailClaimName"></a>

```csharp
public string EmailClaimName { get; }
```

- *Type:* string

---

##### `IdpPublicCert`<sup>Required</sup> <a name="IdpPublicCert" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.idpPublicCert"></a>

```csharp
public string IdpPublicCert { get; }
```

- *Type:* string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; }
```

- *Type:* string

---

##### `OktaAccount`<sup>Required</sup> <a name="OktaAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oktaAccount"></a>

```csharp
public string OktaAccount { get; }
```

- *Type:* string

---

##### `OneloginAccount`<sup>Required</sup> <a name="OneloginAccount" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.oneloginAccount"></a>

```csharp
public string OneloginAccount { get; }
```

- *Type:* string

---

##### `PingEnvId`<sup>Required</sup> <a name="PingEnvId" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pingEnvId"></a>

```csharp
public string PingEnvId { get; }
```

- *Type:* string

---

##### `PkceEnabled`<sup>Required</sup> <a name="PkceEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.pkceEnabled"></a>

```csharp
public object PkceEnabled { get; }
```

- *Type:* object

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SignRequest`<sup>Required</sup> <a name="SignRequest" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.signRequest"></a>

```csharp
public object SignRequest { get; }
```

- *Type:* object

---

##### `SsoTargetUrl`<sup>Required</sup> <a name="SsoTargetUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.ssoTargetUrl"></a>

```csharp
public string SsoTargetUrl { get; }
```

- *Type:* string

---

##### `SupportGroups`<sup>Required</sup> <a name="SupportGroups" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.supportGroups"></a>

```csharp
public object SupportGroups { get; }
```

- *Type:* object

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderConfigAOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessIdentityProviderScimConfigList <a name="ZeroTrustAccessIdentityProviderScimConfigList" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderScimConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.get"></a>

```csharp
private ZeroTrustAccessIdentityProviderScimConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessIdentityProviderScimConfigOutputReference <a name="ZeroTrustAccessIdentityProviderScimConfigOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessIdentityProviderScimConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetGroupMemberDeprovision">ResetGroupMemberDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetIdentityUpdateBehavior">ResetIdentityUpdateBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetSeatDeprovision">ResetSeatDeprovision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetUserDeprovision">ResetUserDeprovision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetGroupMemberDeprovision` <a name="ResetGroupMemberDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetGroupMemberDeprovision"></a>

```csharp
private void ResetGroupMemberDeprovision()
```

##### `ResetIdentityUpdateBehavior` <a name="ResetIdentityUpdateBehavior" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetIdentityUpdateBehavior"></a>

```csharp
private void ResetIdentityUpdateBehavior()
```

##### `ResetSeatDeprovision` <a name="ResetSeatDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetSeatDeprovision"></a>

```csharp
private void ResetSeatDeprovision()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetSecret"></a>

```csharp
private void ResetSecret()
```

##### `ResetUserDeprovision` <a name="ResetUserDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.resetUserDeprovision"></a>

```csharp
private void ResetUserDeprovision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovisionInput">GroupMemberDeprovisionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.identityUpdateBehaviorInput">IdentityUpdateBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovisionInput">SeatDeprovisionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovisionInput">UserDeprovisionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovision">GroupMemberDeprovision</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.identityUpdateBehavior">IdentityUpdateBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovision">SeatDeprovision</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovision">UserDeprovision</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `GroupMemberDeprovisionInput`<sup>Optional</sup> <a name="GroupMemberDeprovisionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovisionInput"></a>

```csharp
public object GroupMemberDeprovisionInput { get; }
```

- *Type:* object

---

##### `IdentityUpdateBehaviorInput`<sup>Optional</sup> <a name="IdentityUpdateBehaviorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.identityUpdateBehaviorInput"></a>

```csharp
public string IdentityUpdateBehaviorInput { get; }
```

- *Type:* string

---

##### `SeatDeprovisionInput`<sup>Optional</sup> <a name="SeatDeprovisionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovisionInput"></a>

```csharp
public object SeatDeprovisionInput { get; }
```

- *Type:* object

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `UserDeprovisionInput`<sup>Optional</sup> <a name="UserDeprovisionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovisionInput"></a>

```csharp
public object UserDeprovisionInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `GroupMemberDeprovision`<sup>Required</sup> <a name="GroupMemberDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.groupMemberDeprovision"></a>

```csharp
public object GroupMemberDeprovision { get; }
```

- *Type:* object

---

##### `IdentityUpdateBehavior`<sup>Required</sup> <a name="IdentityUpdateBehavior" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.identityUpdateBehavior"></a>

```csharp
public string IdentityUpdateBehavior { get; }
```

- *Type:* string

---

##### `SeatDeprovision`<sup>Required</sup> <a name="SeatDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.seatDeprovision"></a>

```csharp
public object SeatDeprovision { get; }
```

- *Type:* object

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `UserDeprovision`<sup>Required</sup> <a name="UserDeprovision" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.userDeprovision"></a>

```csharp
public object UserDeprovision { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessIdentityProvider.ZeroTrustAccessIdentityProviderScimConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



