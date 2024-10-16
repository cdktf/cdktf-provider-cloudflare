# `zeroTrustAccessMtlsHostnameSettings` Submodule <a name="`zeroTrustAccessMtlsHostnameSettings` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessMtlsHostnameSettings <a name="ZeroTrustAccessMtlsHostnameSettings" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_mtls_hostname_settings cloudflare_zero_trust_access_mtls_hostname_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessMtlsHostnameSettings(Construct Scope, string Id, ZeroTrustAccessMtlsHostnameSettingsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig">ZeroTrustAccessMtlsHostnameSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig">ZeroTrustAccessMtlsHostnameSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSettings` <a name="PutSettings" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.putSettings"></a>

```csharp
private void PutSettings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.putSettings.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessMtlsHostnameSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessMtlsHostnameSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessMtlsHostnameSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessMtlsHostnameSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessMtlsHostnameSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustAccessMtlsHostnameSettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustAccessMtlsHostnameSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustAccessMtlsHostnameSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_mtls_hostname_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessMtlsHostnameSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.settings">Settings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList">ZeroTrustAccessMtlsHostnameSettingsSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.settingsInput">SettingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.settings"></a>

```csharp
public ZeroTrustAccessMtlsHostnameSettingsSettingsList Settings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList">ZeroTrustAccessMtlsHostnameSettingsSettingsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.settingsInput"></a>

```csharp
public object SettingsInput { get; }
```

- *Type:* object

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessMtlsHostnameSettingsConfig <a name="ZeroTrustAccessMtlsHostnameSettingsConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessMtlsHostnameSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId = null,
    object Settings = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.settings">Settings</a></code> | <code>object</code> | settings block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_mtls_hostname_settings#account_id ZeroTrustAccessMtlsHostnameSettings#account_id}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.settings"></a>

```csharp
public object Settings { get; set; }
```

- *Type:* object

settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_mtls_hostname_settings#settings ZeroTrustAccessMtlsHostnameSettings#settings}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_mtls_hostname_settings#zone_id ZeroTrustAccessMtlsHostnameSettings#zone_id}

---

### ZeroTrustAccessMtlsHostnameSettingsSettings <a name="ZeroTrustAccessMtlsHostnameSettingsSettings" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessMtlsHostnameSettingsSettings {
    string Hostname,
    object ChinaNetwork = null,
    object ClientCertificateForwarding = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.property.hostname">Hostname</a></code> | <code>string</code> | The hostname that these settings apply to. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.property.chinaNetwork">ChinaNetwork</a></code> | <code>object</code> | Request client certificates for this hostname in China. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.property.clientCertificateForwarding">ClientCertificateForwarding</a></code> | <code>object</code> | Client Certificate Forwarding is a feature that takes the client cert provided by the eyeball to the edge, and forwards it to the origin as a HTTP header to allow logging on the origin. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

The hostname that these settings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_mtls_hostname_settings#hostname ZeroTrustAccessMtlsHostnameSettings#hostname}

---

##### `ChinaNetwork`<sup>Optional</sup> <a name="ChinaNetwork" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.property.chinaNetwork"></a>

```csharp
public object ChinaNetwork { get; set; }
```

- *Type:* object

Request client certificates for this hostname in China.

Can only be set to true if this zone is china network enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_mtls_hostname_settings#china_network ZeroTrustAccessMtlsHostnameSettings#china_network}

---

##### `ClientCertificateForwarding`<sup>Optional</sup> <a name="ClientCertificateForwarding" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettings.property.clientCertificateForwarding"></a>

```csharp
public object ClientCertificateForwarding { get; set; }
```

- *Type:* object

Client Certificate Forwarding is a feature that takes the client cert provided by the eyeball to the edge, and forwards it to the origin as a HTTP header to allow logging on the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.44.0/docs/resources/zero_trust_access_mtls_hostname_settings#client_certificate_forwarding ZeroTrustAccessMtlsHostnameSettings#client_certificate_forwarding}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessMtlsHostnameSettingsSettingsList <a name="ZeroTrustAccessMtlsHostnameSettingsSettingsList" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessMtlsHostnameSettingsSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.get"></a>

```csharp
private ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference <a name="ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.resetChinaNetwork">ResetChinaNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.resetClientCertificateForwarding">ResetClientCertificateForwarding</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChinaNetwork` <a name="ResetChinaNetwork" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.resetChinaNetwork"></a>

```csharp
private void ResetChinaNetwork()
```

##### `ResetClientCertificateForwarding` <a name="ResetClientCertificateForwarding" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.resetClientCertificateForwarding"></a>

```csharp
private void ResetClientCertificateForwarding()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.chinaNetworkInput">ChinaNetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwardingInput">ClientCertificateForwardingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.chinaNetwork">ChinaNetwork</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwarding">ClientCertificateForwarding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChinaNetworkInput`<sup>Optional</sup> <a name="ChinaNetworkInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.chinaNetworkInput"></a>

```csharp
public object ChinaNetworkInput { get; }
```

- *Type:* object

---

##### `ClientCertificateForwardingInput`<sup>Optional</sup> <a name="ClientCertificateForwardingInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwardingInput"></a>

```csharp
public object ClientCertificateForwardingInput { get; }
```

- *Type:* object

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `ChinaNetwork`<sup>Required</sup> <a name="ChinaNetwork" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.chinaNetwork"></a>

```csharp
public object ChinaNetwork { get; }
```

- *Type:* object

---

##### `ClientCertificateForwarding`<sup>Required</sup> <a name="ClientCertificateForwarding" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.clientCertificateForwarding"></a>

```csharp
public object ClientCertificateForwarding { get; }
```

- *Type:* object

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessMtlsHostnameSettings.ZeroTrustAccessMtlsHostnameSettingsSettingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



