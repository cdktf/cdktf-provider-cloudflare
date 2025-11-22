# `zeroTrustAccessAiControlsMcpPortal` Submodule <a name="`zeroTrustAccessAiControlsMcpPortal` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessAiControlsMcpPortal <a name="ZeroTrustAccessAiControlsMcpPortal" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal cloudflare_zero_trust_access_ai_controls_mcp_portal}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessAiControlsMcpPortal(Construct Scope, string Id, ZeroTrustAccessAiControlsMcpPortalConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig">ZeroTrustAccessAiControlsMcpPortalConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig">ZeroTrustAccessAiControlsMcpPortalConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.putServers">PutServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetServers">ResetServers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutServers` <a name="PutServers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.putServers"></a>

```csharp
private void PutServers(IResolvable|ZeroTrustAccessAiControlsMcpPortalServers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.putServers.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetServers` <a name="ResetServers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.resetServers"></a>

```csharp
private void ResetServers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessAiControlsMcpPortal.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessAiControlsMcpPortal.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessAiControlsMcpPortal.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessAiControlsMcpPortal.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustAccessAiControlsMcpPortal resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustAccessAiControlsMcpPortal to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustAccessAiControlsMcpPortal that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessAiControlsMcpPortal to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.modifiedBy">ModifiedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.servers">Servers</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList">ZeroTrustAccessAiControlsMcpPortalServersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.serversInput">ServersInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.modifiedBy"></a>

```csharp
public string ModifiedBy { get; }
```

- *Type:* string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.servers"></a>

```csharp
public ZeroTrustAccessAiControlsMcpPortalServersList Servers { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList">ZeroTrustAccessAiControlsMcpPortalServersList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ServersInput`<sup>Optional</sup> <a name="ServersInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.serversInput"></a>

```csharp
public IResolvable|ZeroTrustAccessAiControlsMcpPortalServers[] ServersInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortal.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessAiControlsMcpPortalConfig <a name="ZeroTrustAccessAiControlsMcpPortalConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessAiControlsMcpPortalConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Hostname,
    string Id,
    string Name,
    string Description = null,
    IResolvable|ZeroTrustAccessAiControlsMcpPortalServers[] Servers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#account_id ZeroTrustAccessAiControlsMcpPortal#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#hostname ZeroTrustAccessAiControlsMcpPortal#hostname}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.id">Id</a></code> | <code>string</code> | portal id. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.servers">Servers</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#servers ZeroTrustAccessAiControlsMcpPortal#servers}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#account_id ZeroTrustAccessAiControlsMcpPortal#account_id}.

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#hostname ZeroTrustAccessAiControlsMcpPortal#hostname}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

portal id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#id ZeroTrustAccessAiControlsMcpPortal#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}.

---

##### `Servers`<sup>Optional</sup> <a name="Servers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalConfig.property.servers"></a>

```csharp
public IResolvable|ZeroTrustAccessAiControlsMcpPortalServers[] Servers { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#servers ZeroTrustAccessAiControlsMcpPortal#servers}.

---

### ZeroTrustAccessAiControlsMcpPortalServers <a name="ZeroTrustAccessAiControlsMcpPortalServers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessAiControlsMcpPortalServers {
    string ServerId,
    bool|IResolvable DefaultDisabled = null,
    bool|IResolvable OnBehalf = null,
    IResolvable|ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts[] UpdatedPrompts = null,
    IResolvable|ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools[] UpdatedTools = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.serverId">ServerId</a></code> | <code>string</code> | server id. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.defaultDisabled">DefaultDisabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#default_disabled ZeroTrustAccessAiControlsMcpPortal#default_disabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.onBehalf">OnBehalf</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#on_behalf ZeroTrustAccessAiControlsMcpPortal#on_behalf}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.updatedPrompts">UpdatedPrompts</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_prompts ZeroTrustAccessAiControlsMcpPortal#updated_prompts}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.updatedTools">UpdatedTools</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_tools ZeroTrustAccessAiControlsMcpPortal#updated_tools}. |

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.serverId"></a>

```csharp
public string ServerId { get; set; }
```

- *Type:* string

server id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#server_id ZeroTrustAccessAiControlsMcpPortal#server_id}

---

##### `DefaultDisabled`<sup>Optional</sup> <a name="DefaultDisabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.defaultDisabled"></a>

```csharp
public bool|IResolvable DefaultDisabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#default_disabled ZeroTrustAccessAiControlsMcpPortal#default_disabled}.

---

##### `OnBehalf`<sup>Optional</sup> <a name="OnBehalf" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.onBehalf"></a>

```csharp
public bool|IResolvable OnBehalf { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#on_behalf ZeroTrustAccessAiControlsMcpPortal#on_behalf}.

---

##### `UpdatedPrompts`<sup>Optional</sup> <a name="UpdatedPrompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.updatedPrompts"></a>

```csharp
public IResolvable|ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts[] UpdatedPrompts { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_prompts ZeroTrustAccessAiControlsMcpPortal#updated_prompts}.

---

##### `UpdatedTools`<sup>Optional</sup> <a name="UpdatedTools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers.property.updatedTools"></a>

```csharp
public IResolvable|ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools[] UpdatedTools { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#updated_tools ZeroTrustAccessAiControlsMcpPortal#updated_tools}.

---

### ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts {
    string Name,
    string Description = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}.

---

### ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools {
    string Name,
    string Description = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#name ZeroTrustAccessAiControlsMcpPortal#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#description ZeroTrustAccessAiControlsMcpPortal#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.13.0/docs/resources/zero_trust_access_ai_controls_mcp_portal#enabled ZeroTrustAccessAiControlsMcpPortal#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessAiControlsMcpPortalServersList <a name="ZeroTrustAccessAiControlsMcpPortalServersList" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessAiControlsMcpPortalServersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.get"></a>

```csharp
private ZeroTrustAccessAiControlsMcpPortalServersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersList.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustAccessAiControlsMcpPortalServers[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>[]

---


### ZeroTrustAccessAiControlsMcpPortalServersOutputReference <a name="ZeroTrustAccessAiControlsMcpPortalServersOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessAiControlsMcpPortalServersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedPrompts">PutUpdatedPrompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedTools">PutUpdatedTools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetDefaultDisabled">ResetDefaultDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetOnBehalf">ResetOnBehalf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetUpdatedPrompts">ResetUpdatedPrompts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetUpdatedTools">ResetUpdatedTools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUpdatedPrompts` <a name="PutUpdatedPrompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedPrompts"></a>

```csharp
private void PutUpdatedPrompts(IResolvable|ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedPrompts.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>[]

---

##### `PutUpdatedTools` <a name="PutUpdatedTools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedTools"></a>

```csharp
private void PutUpdatedTools(IResolvable|ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.putUpdatedTools.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>[]

---

##### `ResetDefaultDisabled` <a name="ResetDefaultDisabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetDefaultDisabled"></a>

```csharp
private void ResetDefaultDisabled()
```

##### `ResetOnBehalf` <a name="ResetOnBehalf" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetOnBehalf"></a>

```csharp
private void ResetOnBehalf()
```

##### `ResetUpdatedPrompts` <a name="ResetUpdatedPrompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetUpdatedPrompts"></a>

```csharp
private void ResetUpdatedPrompts()
```

##### `ResetUpdatedTools` <a name="ResetUpdatedTools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.resetUpdatedTools"></a>

```csharp
private void ResetUpdatedTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPrompts">UpdatedPrompts</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedTools">UpdatedTools</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList">ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabledInput">DefaultDisabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalfInput">OnBehalfInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.serverIdInput">ServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPromptsInput">UpdatedPromptsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedToolsInput">UpdatedToolsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabled">DefaultDisabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalf">OnBehalf</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.serverId">ServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UpdatedPrompts`<sup>Required</sup> <a name="UpdatedPrompts" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPrompts"></a>

```csharp
public ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList UpdatedPrompts { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList</a>

---

##### `UpdatedTools`<sup>Required</sup> <a name="UpdatedTools" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedTools"></a>

```csharp
public ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList UpdatedTools { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList">ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList</a>

---

##### `DefaultDisabledInput`<sup>Optional</sup> <a name="DefaultDisabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabledInput"></a>

```csharp
public bool|IResolvable DefaultDisabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OnBehalfInput`<sup>Optional</sup> <a name="OnBehalfInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalfInput"></a>

```csharp
public bool|IResolvable OnBehalfInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ServerIdInput`<sup>Optional</sup> <a name="ServerIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.serverIdInput"></a>

```csharp
public string ServerIdInput { get; }
```

- *Type:* string

---

##### `UpdatedPromptsInput`<sup>Optional</sup> <a name="UpdatedPromptsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedPromptsInput"></a>

```csharp
public IResolvable|ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts[] UpdatedPromptsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>[]

---

##### `UpdatedToolsInput`<sup>Optional</sup> <a name="UpdatedToolsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.updatedToolsInput"></a>

```csharp
public IResolvable|ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools[] UpdatedToolsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>[]

---

##### `DefaultDisabled`<sup>Required</sup> <a name="DefaultDisabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.defaultDisabled"></a>

```csharp
public bool|IResolvable DefaultDisabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `OnBehalf`<sup>Required</sup> <a name="OnBehalf" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.onBehalf"></a>

```csharp
public bool|IResolvable OnBehalf { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ServerId`<sup>Required</sup> <a name="ServerId" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.serverId"></a>

```csharp
public string ServerId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustAccessAiControlsMcpPortalServers InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServers">ZeroTrustAccessAiControlsMcpPortalServers</a>

---


### ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.get"></a>

```csharp
private ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsList.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>[]

---


### ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPromptsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts">ZeroTrustAccessAiControlsMcpPortalServersUpdatedPrompts</a>

---


### ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.get"></a>

```csharp
private ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsList.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>[]

---


### ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference <a name="ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedToolsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustAccessAiControlsMcpPortal.ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools">ZeroTrustAccessAiControlsMcpPortalServersUpdatedTools</a>

---



