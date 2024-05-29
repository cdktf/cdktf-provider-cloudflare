# `ipsecTunnel` Submodule <a name="`ipsecTunnel` Submodule" id="@cdktf/provider-cloudflare.ipsecTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IpsecTunnel <a name="IpsecTunnel" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel cloudflare_ipsec_tunnel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new IpsecTunnel(Construct Scope, string Id, IpsecTunnelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig">IpsecTunnelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig">IpsecTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAllowNullCipher">ResetAllowNullCipher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetFqdnId">ResetFqdnId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckDirection">ResetHealthCheckDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckEnabled">ResetHealthCheckEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckRate">ResetHealthCheckRate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckTarget">ResetHealthCheckTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckType">ResetHealthCheckType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHexId">ResetHexId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetPsk">ResetPsk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetRemoteId">ResetRemoteId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetReplayProtection">ResetReplayProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAllowNullCipher` <a name="ResetAllowNullCipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetAllowNullCipher"></a>

```csharp
private void ResetAllowNullCipher()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFqdnId` <a name="ResetFqdnId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetFqdnId"></a>

```csharp
private void ResetFqdnId()
```

##### `ResetHealthCheckDirection` <a name="ResetHealthCheckDirection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckDirection"></a>

```csharp
private void ResetHealthCheckDirection()
```

##### `ResetHealthCheckEnabled` <a name="ResetHealthCheckEnabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckEnabled"></a>

```csharp
private void ResetHealthCheckEnabled()
```

##### `ResetHealthCheckRate` <a name="ResetHealthCheckRate" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckRate"></a>

```csharp
private void ResetHealthCheckRate()
```

##### `ResetHealthCheckTarget` <a name="ResetHealthCheckTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckTarget"></a>

```csharp
private void ResetHealthCheckTarget()
```

##### `ResetHealthCheckType` <a name="ResetHealthCheckType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHealthCheckType"></a>

```csharp
private void ResetHealthCheckType()
```

##### `ResetHexId` <a name="ResetHexId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetHexId"></a>

```csharp
private void ResetHexId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPsk` <a name="ResetPsk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetPsk"></a>

```csharp
private void ResetPsk()
```

##### `ResetRemoteId` <a name="ResetRemoteId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetRemoteId"></a>

```csharp
private void ResetRemoteId()
```

##### `ResetReplayProtection` <a name="ResetReplayProtection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetReplayProtection"></a>

```csharp
private void ResetReplayProtection()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.resetUserId"></a>

```csharp
private void ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IpsecTunnel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

IpsecTunnel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

IpsecTunnel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

IpsecTunnel.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

IpsecTunnel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IpsecTunnel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IpsecTunnel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IpsecTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IpsecTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipherInput">AllowNullCipherInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpointInput">CloudflareEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpointInput">CustomerEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnIdInput">FqdnIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckDirectionInput">HealthCheckDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabledInput">HealthCheckEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckRateInput">HealthCheckRateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTargetInput">HealthCheckTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTypeInput">HealthCheckTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexIdInput">HexIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddressInput">InterfaceAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.pskInput">PskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteIdInput">RemoteIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.replayProtectionInput">ReplayProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipher">AllowNullCipher</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpoint">CloudflareEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpoint">CustomerEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnId">FqdnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckDirection">HealthCheckDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabled">HealthCheckEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckRate">HealthCheckRate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTarget">HealthCheckTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexId">HexId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddress">InterfaceAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.psk">Psk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteId">RemoteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.replayProtection">ReplayProtection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AllowNullCipherInput`<sup>Optional</sup> <a name="AllowNullCipherInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipherInput"></a>

```csharp
public object AllowNullCipherInput { get; }
```

- *Type:* object

---

##### `CloudflareEndpointInput`<sup>Optional</sup> <a name="CloudflareEndpointInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpointInput"></a>

```csharp
public string CloudflareEndpointInput { get; }
```

- *Type:* string

---

##### `CustomerEndpointInput`<sup>Optional</sup> <a name="CustomerEndpointInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpointInput"></a>

```csharp
public string CustomerEndpointInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FqdnIdInput`<sup>Optional</sup> <a name="FqdnIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnIdInput"></a>

```csharp
public string FqdnIdInput { get; }
```

- *Type:* string

---

##### `HealthCheckDirectionInput`<sup>Optional</sup> <a name="HealthCheckDirectionInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckDirectionInput"></a>

```csharp
public string HealthCheckDirectionInput { get; }
```

- *Type:* string

---

##### `HealthCheckEnabledInput`<sup>Optional</sup> <a name="HealthCheckEnabledInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabledInput"></a>

```csharp
public object HealthCheckEnabledInput { get; }
```

- *Type:* object

---

##### `HealthCheckRateInput`<sup>Optional</sup> <a name="HealthCheckRateInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckRateInput"></a>

```csharp
public string HealthCheckRateInput { get; }
```

- *Type:* string

---

##### `HealthCheckTargetInput`<sup>Optional</sup> <a name="HealthCheckTargetInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTargetInput"></a>

```csharp
public string HealthCheckTargetInput { get; }
```

- *Type:* string

---

##### `HealthCheckTypeInput`<sup>Optional</sup> <a name="HealthCheckTypeInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTypeInput"></a>

```csharp
public string HealthCheckTypeInput { get; }
```

- *Type:* string

---

##### `HexIdInput`<sup>Optional</sup> <a name="HexIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexIdInput"></a>

```csharp
public string HexIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InterfaceAddressInput`<sup>Optional</sup> <a name="InterfaceAddressInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddressInput"></a>

```csharp
public string InterfaceAddressInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PskInput`<sup>Optional</sup> <a name="PskInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.pskInput"></a>

```csharp
public string PskInput { get; }
```

- *Type:* string

---

##### `RemoteIdInput`<sup>Optional</sup> <a name="RemoteIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteIdInput"></a>

```csharp
public string RemoteIdInput { get; }
```

- *Type:* string

---

##### `ReplayProtectionInput`<sup>Optional</sup> <a name="ReplayProtectionInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.replayProtectionInput"></a>

```csharp
public object ReplayProtectionInput { get; }
```

- *Type:* object

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AllowNullCipher`<sup>Required</sup> <a name="AllowNullCipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.allowNullCipher"></a>

```csharp
public object AllowNullCipher { get; }
```

- *Type:* object

---

##### `CloudflareEndpoint`<sup>Required</sup> <a name="CloudflareEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.cloudflareEndpoint"></a>

```csharp
public string CloudflareEndpoint { get; }
```

- *Type:* string

---

##### `CustomerEndpoint`<sup>Required</sup> <a name="CustomerEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.customerEndpoint"></a>

```csharp
public string CustomerEndpoint { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FqdnId`<sup>Required</sup> <a name="FqdnId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.fqdnId"></a>

```csharp
public string FqdnId { get; }
```

- *Type:* string

---

##### `HealthCheckDirection`<sup>Required</sup> <a name="HealthCheckDirection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckDirection"></a>

```csharp
public string HealthCheckDirection { get; }
```

- *Type:* string

---

##### `HealthCheckEnabled`<sup>Required</sup> <a name="HealthCheckEnabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckEnabled"></a>

```csharp
public object HealthCheckEnabled { get; }
```

- *Type:* object

---

##### `HealthCheckRate`<sup>Required</sup> <a name="HealthCheckRate" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckRate"></a>

```csharp
public string HealthCheckRate { get; }
```

- *Type:* string

---

##### `HealthCheckTarget`<sup>Required</sup> <a name="HealthCheckTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckTarget"></a>

```csharp
public string HealthCheckTarget { get; }
```

- *Type:* string

---

##### `HealthCheckType`<sup>Required</sup> <a name="HealthCheckType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; }
```

- *Type:* string

---

##### `HexId`<sup>Required</sup> <a name="HexId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.hexId"></a>

```csharp
public string HexId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.interfaceAddress"></a>

```csharp
public string InterfaceAddress { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Psk`<sup>Required</sup> <a name="Psk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.psk"></a>

```csharp
public string Psk { get; }
```

- *Type:* string

---

##### `RemoteId`<sup>Required</sup> <a name="RemoteId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.remoteId"></a>

```csharp
public string RemoteId { get; }
```

- *Type:* string

---

##### `ReplayProtection`<sup>Required</sup> <a name="ReplayProtection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.replayProtection"></a>

```csharp
public object ReplayProtection { get; }
```

- *Type:* object

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IpsecTunnelConfig <a name="IpsecTunnelConfig" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new IpsecTunnelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CloudflareEndpoint,
    string CustomerEndpoint,
    string InterfaceAddress,
    string Name,
    string AccountId = null,
    object AllowNullCipher = null,
    string Description = null,
    string FqdnId = null,
    string HealthCheckDirection = null,
    object HealthCheckEnabled = null,
    string HealthCheckRate = null,
    string HealthCheckTarget = null,
    string HealthCheckType = null,
    string HexId = null,
    string Id = null,
    string Psk = null,
    string RemoteId = null,
    object ReplayProtection = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.cloudflareEndpoint">CloudflareEndpoint</a></code> | <code>string</code> | IP address assigned to the Cloudflare side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.customerEndpoint">CustomerEndpoint</a></code> | <code>string</code> | IP address assigned to the customer side of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.interfaceAddress">InterfaceAddress</a></code> | <code>string</code> | 31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.name">Name</a></code> | <code>string</code> | Name of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.allowNullCipher">AllowNullCipher</a></code> | <code>object</code> | Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.description">Description</a></code> | <code>string</code> | An optional description of the IPsec tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.fqdnId">FqdnId</a></code> | <code>string</code> | `remote_id` in the form of a fqdn. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckDirection">HealthCheckDirection</a></code> | <code>string</code> | Specifies the direction for the health check. Available values: `unidirectional`, `bidirectional` Default: `unidirectional`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckEnabled">HealthCheckEnabled</a></code> | <code>object</code> | Specifies if ICMP tunnel health checks are enabled. Default: `true`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckRate">HealthCheckRate</a></code> | <code>string</code> | Specifies the ICMP rate for the health check. Available values: `low`, `mid`, `high` Default: `mid`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckTarget">HealthCheckTarget</a></code> | <code>string</code> | The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckType">HealthCheckType</a></code> | <code>string</code> | Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.hexId">HexId</a></code> | <code>string</code> | `remote_id` as a hex string. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#id IpsecTunnel#id}. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.psk">Psk</a></code> | <code>string</code> | Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.remoteId">RemoteId</a></code> | <code>string</code> | ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.replayProtection">ReplayProtection</a></code> | <code>object</code> | Specifies if replay protection is enabled. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.userId">UserId</a></code> | <code>string</code> | `remote_id` in the form of an email address. This value is generated by cloudflare. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CloudflareEndpoint`<sup>Required</sup> <a name="CloudflareEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.cloudflareEndpoint"></a>

```csharp
public string CloudflareEndpoint { get; set; }
```

- *Type:* string

IP address assigned to the Cloudflare side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#cloudflare_endpoint IpsecTunnel#cloudflare_endpoint}

---

##### `CustomerEndpoint`<sup>Required</sup> <a name="CustomerEndpoint" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.customerEndpoint"></a>

```csharp
public string CustomerEndpoint { get; set; }
```

- *Type:* string

IP address assigned to the customer side of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#customer_endpoint IpsecTunnel#customer_endpoint}

---

##### `InterfaceAddress`<sup>Required</sup> <a name="InterfaceAddress" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.interfaceAddress"></a>

```csharp
public string InterfaceAddress { get; set; }
```

- *Type:* string

31-bit prefix (/31 in CIDR notation) supporting 2 hosts, one for each side of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#interface_address IpsecTunnel#interface_address}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#name IpsecTunnel#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource. **Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#account_id IpsecTunnel#account_id}

---

##### `AllowNullCipher`<sup>Optional</sup> <a name="AllowNullCipher" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.allowNullCipher"></a>

```csharp
public object AllowNullCipher { get; set; }
```

- *Type:* object

Specifies if this tunnel may use a null cipher (ENCR_NULL) in Phase 2. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#allow_null_cipher IpsecTunnel#allow_null_cipher}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of the IPsec tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#description IpsecTunnel#description}

---

##### `FqdnId`<sup>Optional</sup> <a name="FqdnId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.fqdnId"></a>

```csharp
public string FqdnId { get; set; }
```

- *Type:* string

`remote_id` in the form of a fqdn. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#fqdn_id IpsecTunnel#fqdn_id}

---

##### `HealthCheckDirection`<sup>Optional</sup> <a name="HealthCheckDirection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckDirection"></a>

```csharp
public string HealthCheckDirection { get; set; }
```

- *Type:* string

Specifies the direction for the health check. Available values: `unidirectional`, `bidirectional` Default: `unidirectional`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#health_check_direction IpsecTunnel#health_check_direction}

---

##### `HealthCheckEnabled`<sup>Optional</sup> <a name="HealthCheckEnabled" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckEnabled"></a>

```csharp
public object HealthCheckEnabled { get; set; }
```

- *Type:* object

Specifies if ICMP tunnel health checks are enabled. Default: `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#health_check_enabled IpsecTunnel#health_check_enabled}

---

##### `HealthCheckRate`<sup>Optional</sup> <a name="HealthCheckRate" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckRate"></a>

```csharp
public string HealthCheckRate { get; set; }
```

- *Type:* string

Specifies the ICMP rate for the health check. Available values: `low`, `mid`, `high` Default: `mid`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#health_check_rate IpsecTunnel#health_check_rate}

---

##### `HealthCheckTarget`<sup>Optional</sup> <a name="HealthCheckTarget" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckTarget"></a>

```csharp
public string HealthCheckTarget { get; set; }
```

- *Type:* string

The IP address of the customer endpoint that will receive tunnel health checks. Default: `<customer_gre_endpoint>`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#health_check_target IpsecTunnel#health_check_target}

---

##### `HealthCheckType`<sup>Optional</sup> <a name="HealthCheckType" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.healthCheckType"></a>

```csharp
public string HealthCheckType { get; set; }
```

- *Type:* string

Specifies the ICMP echo type for the health check (`request` or `reply`). Available values: `request`, `reply` Default: `reply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#health_check_type IpsecTunnel#health_check_type}

---

##### `HexId`<sup>Optional</sup> <a name="HexId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.hexId"></a>

```csharp
public string HexId { get; set; }
```

- *Type:* string

`remote_id` as a hex string. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#hex_id IpsecTunnel#hex_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#id IpsecTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Psk`<sup>Optional</sup> <a name="Psk" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.psk"></a>

```csharp
public string Psk { get; set; }
```

- *Type:* string

Pre shared key to be used with the IPsec tunnel. If left unset, it will be autogenerated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#psk IpsecTunnel#psk}

---

##### `RemoteId`<sup>Optional</sup> <a name="RemoteId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.remoteId"></a>

```csharp
public string RemoteId { get; set; }
```

- *Type:* string

ID to be used while setting up the IPsec tunnel. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#remote_id IpsecTunnel#remote_id}

---

##### `ReplayProtection`<sup>Optional</sup> <a name="ReplayProtection" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.replayProtection"></a>

```csharp
public object ReplayProtection { get; set; }
```

- *Type:* object

Specifies if replay protection is enabled. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#replay_protection IpsecTunnel#replay_protection}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-cloudflare.ipsecTunnel.IpsecTunnelConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

`remote_id` in the form of an email address. This value is generated by cloudflare.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.34.0/docs/resources/ipsec_tunnel#user_id IpsecTunnel#user_id}

---



