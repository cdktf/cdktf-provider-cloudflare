# `zeroTrustGatewaySettings` Submodule <a name="`zeroTrustGatewaySettings` Submodule" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustGatewaySettings <a name="ZeroTrustGatewaySettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings cloudflare_zero_trust_gateway_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettings(Construct Scope, string Id, ZeroTrustGatewaySettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig">ZeroTrustGatewaySettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig">ZeroTrustGatewaySettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus">PutAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage">PutBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBodyScanning">PutBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCustomCertificate">PutCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putExtendedEmailMatching">PutExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putFips">PutFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putPayloadLog">PutPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy">PutProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSshSessionLog">PutSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetActivityLogEnabled">ResetActivityLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetAntivirus">ResetAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBlockPage">ResetBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBodyScanning">ResetBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCustomCertificate">ResetCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetExtendedEmailMatching">ResetExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetFips">ResetFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetNonIdentityBrowserIsolationEnabled">ResetNonIdentityBrowserIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetPayloadLog">ResetPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProtocolDetectionEnabled">ResetProtocolDetectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProxy">ResetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetSshSessionLog">ResetSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetTlsDecryptEnabled">ResetTlsDecryptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetUrlBrowserIsolationEnabled">ResetUrlBrowserIsolationEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAntivirus` <a name="PutAntivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus"></a>

```csharp
private void PutAntivirus(ZeroTrustGatewaySettingsAntivirus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putAntivirus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

---

##### `PutBlockPage` <a name="PutBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage"></a>

```csharp
private void PutBlockPage(ZeroTrustGatewaySettingsBlockPage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBlockPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

---

##### `PutBodyScanning` <a name="PutBodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBodyScanning"></a>

```csharp
private void PutBodyScanning(ZeroTrustGatewaySettingsBodyScanning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putBodyScanning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

---

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCertificate"></a>

```csharp
private void PutCertificate(ZeroTrustGatewaySettingsCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

---

##### `PutCustomCertificate` <a name="PutCustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCustomCertificate"></a>

```csharp
private void PutCustomCertificate(ZeroTrustGatewaySettingsCustomCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putCustomCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

---

##### `PutExtendedEmailMatching` <a name="PutExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putExtendedEmailMatching"></a>

```csharp
private void PutExtendedEmailMatching(ZeroTrustGatewaySettingsExtendedEmailMatching Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putExtendedEmailMatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

---

##### `PutFips` <a name="PutFips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putFips"></a>

```csharp
private void PutFips(ZeroTrustGatewaySettingsFips Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putFips.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putLogging"></a>

```csharp
private void PutLogging(ZeroTrustGatewaySettingsLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

---

##### `PutPayloadLog` <a name="PutPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putPayloadLog"></a>

```csharp
private void PutPayloadLog(ZeroTrustGatewaySettingsPayloadLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putPayloadLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

---

##### `PutProxy` <a name="PutProxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy"></a>

```csharp
private void PutProxy(ZeroTrustGatewaySettingsProxy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

---

##### `PutSshSessionLog` <a name="PutSshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSshSessionLog"></a>

```csharp
private void PutSshSessionLog(ZeroTrustGatewaySettingsSshSessionLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.putSshSessionLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

---

##### `ResetActivityLogEnabled` <a name="ResetActivityLogEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetActivityLogEnabled"></a>

```csharp
private void ResetActivityLogEnabled()
```

##### `ResetAntivirus` <a name="ResetAntivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetAntivirus"></a>

```csharp
private void ResetAntivirus()
```

##### `ResetBlockPage` <a name="ResetBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBlockPage"></a>

```csharp
private void ResetBlockPage()
```

##### `ResetBodyScanning` <a name="ResetBodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetBodyScanning"></a>

```csharp
private void ResetBodyScanning()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCustomCertificate` <a name="ResetCustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetCustomCertificate"></a>

```csharp
private void ResetCustomCertificate()
```

##### `ResetExtendedEmailMatching` <a name="ResetExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetExtendedEmailMatching"></a>

```csharp
private void ResetExtendedEmailMatching()
```

##### `ResetFips` <a name="ResetFips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetFips"></a>

```csharp
private void ResetFips()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetNonIdentityBrowserIsolationEnabled` <a name="ResetNonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetNonIdentityBrowserIsolationEnabled"></a>

```csharp
private void ResetNonIdentityBrowserIsolationEnabled()
```

##### `ResetPayloadLog` <a name="ResetPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetPayloadLog"></a>

```csharp
private void ResetPayloadLog()
```

##### `ResetProtocolDetectionEnabled` <a name="ResetProtocolDetectionEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProtocolDetectionEnabled"></a>

```csharp
private void ResetProtocolDetectionEnabled()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetProxy"></a>

```csharp
private void ResetProxy()
```

##### `ResetSshSessionLog` <a name="ResetSshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetSshSessionLog"></a>

```csharp
private void ResetSshSessionLog()
```

##### `ResetTlsDecryptEnabled` <a name="ResetTlsDecryptEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetTlsDecryptEnabled"></a>

```csharp
private void ResetTlsDecryptEnabled()
```

##### `ResetUrlBrowserIsolationEnabled` <a name="ResetUrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.resetUrlBrowserIsolationEnabled"></a>

```csharp
private void ResetUrlBrowserIsolationEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustGatewaySettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustGatewaySettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustGatewaySettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustGatewaySettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustGatewaySettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustGatewaySettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustGatewaySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustGatewaySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirus">Antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference">ZeroTrustGatewaySettingsAntivirusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference">ZeroTrustGatewaySettingsBlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanning">BodyScanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference">ZeroTrustGatewaySettingsBodyScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference">ZeroTrustGatewaySettingsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificate">CustomCertificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference">ZeroTrustGatewaySettingsCustomCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatching">ExtendedEmailMatching</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference">ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fips">Fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference">ZeroTrustGatewaySettingsFipsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference">ZeroTrustGatewaySettingsLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLog">PayloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference">ZeroTrustGatewaySettingsPayloadLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference">ZeroTrustGatewaySettingsProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLog">SshSessionLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference">ZeroTrustGatewaySettingsSshSessionLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabledInput">ActivityLogEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirusInput">AntivirusInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPageInput">BlockPageInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanningInput">BodyScanningInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificateInput">CertificateInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificateInput">CustomCertificateInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatchingInput">ExtendedEmailMatchingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fipsInput">FipsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabledInput">NonIdentityBrowserIsolationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLogInput">PayloadLogInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabledInput">ProtocolDetectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxyInput">ProxyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLogInput">SshSessionLogInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabledInput">TlsDecryptEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabledInput">UrlBrowserIsolationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabled">NonIdentityBrowserIsolationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabled">ProtocolDetectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabled">TlsDecryptEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabled">UrlBrowserIsolationEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Antivirus`<sup>Required</sup> <a name="Antivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirus"></a>

```csharp
public ZeroTrustGatewaySettingsAntivirusOutputReference Antivirus { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference">ZeroTrustGatewaySettingsAntivirusOutputReference</a>

---

##### `BlockPage`<sup>Required</sup> <a name="BlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPage"></a>

```csharp
public ZeroTrustGatewaySettingsBlockPageOutputReference BlockPage { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference">ZeroTrustGatewaySettingsBlockPageOutputReference</a>

---

##### `BodyScanning`<sup>Required</sup> <a name="BodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanning"></a>

```csharp
public ZeroTrustGatewaySettingsBodyScanningOutputReference BodyScanning { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference">ZeroTrustGatewaySettingsBodyScanningOutputReference</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificate"></a>

```csharp
public ZeroTrustGatewaySettingsCertificateOutputReference Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference">ZeroTrustGatewaySettingsCertificateOutputReference</a>

---

##### `CustomCertificate`<sup>Required</sup> <a name="CustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificate"></a>

```csharp
public ZeroTrustGatewaySettingsCustomCertificateOutputReference CustomCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference">ZeroTrustGatewaySettingsCustomCertificateOutputReference</a>

---

##### `ExtendedEmailMatching`<sup>Required</sup> <a name="ExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatching"></a>

```csharp
public ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference ExtendedEmailMatching { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference">ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference</a>

---

##### `Fips`<sup>Required</sup> <a name="Fips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fips"></a>

```csharp
public ZeroTrustGatewaySettingsFipsOutputReference Fips { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference">ZeroTrustGatewaySettingsFipsOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.logging"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference">ZeroTrustGatewaySettingsLoggingOutputReference</a>

---

##### `PayloadLog`<sup>Required</sup> <a name="PayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLog"></a>

```csharp
public ZeroTrustGatewaySettingsPayloadLogOutputReference PayloadLog { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference">ZeroTrustGatewaySettingsPayloadLogOutputReference</a>

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxy"></a>

```csharp
public ZeroTrustGatewaySettingsProxyOutputReference Proxy { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference">ZeroTrustGatewaySettingsProxyOutputReference</a>

---

##### `SshSessionLog`<sup>Required</sup> <a name="SshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLog"></a>

```csharp
public ZeroTrustGatewaySettingsSshSessionLogOutputReference SshSessionLog { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference">ZeroTrustGatewaySettingsSshSessionLogOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ActivityLogEnabledInput`<sup>Optional</sup> <a name="ActivityLogEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabledInput"></a>

```csharp
public object ActivityLogEnabledInput { get; }
```

- *Type:* object

---

##### `AntivirusInput`<sup>Optional</sup> <a name="AntivirusInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.antivirusInput"></a>

```csharp
public ZeroTrustGatewaySettingsAntivirus AntivirusInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

---

##### `BlockPageInput`<sup>Optional</sup> <a name="BlockPageInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.blockPageInput"></a>

```csharp
public ZeroTrustGatewaySettingsBlockPage BlockPageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

---

##### `BodyScanningInput`<sup>Optional</sup> <a name="BodyScanningInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.bodyScanningInput"></a>

```csharp
public ZeroTrustGatewaySettingsBodyScanning BodyScanningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.certificateInput"></a>

```csharp
public ZeroTrustGatewaySettingsCertificate CertificateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

---

##### `CustomCertificateInput`<sup>Optional</sup> <a name="CustomCertificateInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.customCertificateInput"></a>

```csharp
public ZeroTrustGatewaySettingsCustomCertificate CustomCertificateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

---

##### `ExtendedEmailMatchingInput`<sup>Optional</sup> <a name="ExtendedEmailMatchingInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.extendedEmailMatchingInput"></a>

```csharp
public ZeroTrustGatewaySettingsExtendedEmailMatching ExtendedEmailMatchingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

---

##### `FipsInput`<sup>Optional</sup> <a name="FipsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.fipsInput"></a>

```csharp
public ZeroTrustGatewaySettingsFips FipsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.loggingInput"></a>

```csharp
public ZeroTrustGatewaySettingsLogging LoggingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

---

##### `NonIdentityBrowserIsolationEnabledInput`<sup>Optional</sup> <a name="NonIdentityBrowserIsolationEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabledInput"></a>

```csharp
public object NonIdentityBrowserIsolationEnabledInput { get; }
```

- *Type:* object

---

##### `PayloadLogInput`<sup>Optional</sup> <a name="PayloadLogInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.payloadLogInput"></a>

```csharp
public ZeroTrustGatewaySettingsPayloadLog PayloadLogInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

---

##### `ProtocolDetectionEnabledInput`<sup>Optional</sup> <a name="ProtocolDetectionEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabledInput"></a>

```csharp
public object ProtocolDetectionEnabledInput { get; }
```

- *Type:* object

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.proxyInput"></a>

```csharp
public ZeroTrustGatewaySettingsProxy ProxyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

---

##### `SshSessionLogInput`<sup>Optional</sup> <a name="SshSessionLogInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.sshSessionLogInput"></a>

```csharp
public ZeroTrustGatewaySettingsSshSessionLog SshSessionLogInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

---

##### `TlsDecryptEnabledInput`<sup>Optional</sup> <a name="TlsDecryptEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabledInput"></a>

```csharp
public object TlsDecryptEnabledInput { get; }
```

- *Type:* object

---

##### `UrlBrowserIsolationEnabledInput`<sup>Optional</sup> <a name="UrlBrowserIsolationEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabledInput"></a>

```csharp
public object UrlBrowserIsolationEnabledInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ActivityLogEnabled`<sup>Required</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.activityLogEnabled"></a>

```csharp
public object ActivityLogEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NonIdentityBrowserIsolationEnabled`<sup>Required</sup> <a name="NonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.nonIdentityBrowserIsolationEnabled"></a>

```csharp
public object NonIdentityBrowserIsolationEnabled { get; }
```

- *Type:* object

---

##### `ProtocolDetectionEnabled`<sup>Required</sup> <a name="ProtocolDetectionEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.protocolDetectionEnabled"></a>

```csharp
public object ProtocolDetectionEnabled { get; }
```

- *Type:* object

---

##### `TlsDecryptEnabled`<sup>Required</sup> <a name="TlsDecryptEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tlsDecryptEnabled"></a>

```csharp
public object TlsDecryptEnabled { get; }
```

- *Type:* object

---

##### `UrlBrowserIsolationEnabled`<sup>Required</sup> <a name="UrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.urlBrowserIsolationEnabled"></a>

```csharp
public object UrlBrowserIsolationEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustGatewaySettingsAntivirus <a name="ZeroTrustGatewaySettingsAntivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsAntivirus {
    object EnabledDownloadPhase,
    object EnabledUploadPhase,
    object FailClosed,
    ZeroTrustGatewaySettingsAntivirusNotificationSettings NotificationSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledDownloadPhase">EnabledDownloadPhase</a></code> | <code>object</code> | Scan on file download. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledUploadPhase">EnabledUploadPhase</a></code> | <code>object</code> | Scan on file upload. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.failClosed">FailClosed</a></code> | <code>object</code> | Block requests for files that cannot be scanned. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a></code> | notification_settings block. |

---

##### `EnabledDownloadPhase`<sup>Required</sup> <a name="EnabledDownloadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledDownloadPhase"></a>

```csharp
public object EnabledDownloadPhase { get; set; }
```

- *Type:* object

Scan on file download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled_download_phase ZeroTrustGatewaySettings#enabled_download_phase}

---

##### `EnabledUploadPhase`<sup>Required</sup> <a name="EnabledUploadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.enabledUploadPhase"></a>

```csharp
public object EnabledUploadPhase { get; set; }
```

- *Type:* object

Scan on file upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled_upload_phase ZeroTrustGatewaySettings#enabled_upload_phase}

---

##### `FailClosed`<sup>Required</sup> <a name="FailClosed" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.failClosed"></a>

```csharp
public object FailClosed { get; set; }
```

- *Type:* object

Block requests for files that cannot be scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#fail_closed ZeroTrustGatewaySettings#fail_closed}

---

##### `NotificationSettings`<sup>Optional</sup> <a name="NotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus.property.notificationSettings"></a>

```csharp
public ZeroTrustGatewaySettingsAntivirusNotificationSettings NotificationSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#notification_settings ZeroTrustGatewaySettings#notification_settings}

---

### ZeroTrustGatewaySettingsAntivirusNotificationSettings <a name="ZeroTrustGatewaySettingsAntivirusNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsAntivirusNotificationSettings {
    object Enabled = null,
    string Message = null,
    string SupportUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.enabled">Enabled</a></code> | <code>object</code> | Enable notification settings. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.message">Message</a></code> | <code>string</code> | Notification content. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.supportUrl">SupportUrl</a></code> | <code>string</code> | Support URL to show in the notification. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enable notification settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#message ZeroTrustGatewaySettings#message}

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings.property.supportUrl"></a>

```csharp
public string SupportUrl { get; set; }
```

- *Type:* string

Support URL to show in the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#support_url ZeroTrustGatewaySettings#support_url}

---

### ZeroTrustGatewaySettingsBlockPage <a name="ZeroTrustGatewaySettingsBlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsBlockPage {
    string BackgroundColor = null,
    object Enabled = null,
    string FooterText = null,
    string HeaderText = null,
    string LogoPath = null,
    string MailtoAddress = null,
    string MailtoSubject = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | Hex code of block page background color. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.enabled">Enabled</a></code> | <code>object</code> | Indicator of enablement. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.footerText">FooterText</a></code> | <code>string</code> | Block page footer text. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.headerText">HeaderText</a></code> | <code>string</code> | Block page header text. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.logoPath">LogoPath</a></code> | <code>string</code> | URL of block page logo. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoAddress">MailtoAddress</a></code> | <code>string</code> | Admin email for users to contact. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoSubject">MailtoSubject</a></code> | <code>string</code> | Subject line for emails created from block page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.name">Name</a></code> | <code>string</code> | Name of block page configuration. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; set; }
```

- *Type:* string

Hex code of block page background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#background_color ZeroTrustGatewaySettings#background_color}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Indicator of enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `FooterText`<sup>Optional</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.footerText"></a>

```csharp
public string FooterText { get; set; }
```

- *Type:* string

Block page footer text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#footer_text ZeroTrustGatewaySettings#footer_text}

---

##### `HeaderText`<sup>Optional</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.headerText"></a>

```csharp
public string HeaderText { get; set; }
```

- *Type:* string

Block page header text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#header_text ZeroTrustGatewaySettings#header_text}

---

##### `LogoPath`<sup>Optional</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.logoPath"></a>

```csharp
public string LogoPath { get; set; }
```

- *Type:* string

URL of block page logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#logo_path ZeroTrustGatewaySettings#logo_path}

---

##### `MailtoAddress`<sup>Optional</sup> <a name="MailtoAddress" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoAddress"></a>

```csharp
public string MailtoAddress { get; set; }
```

- *Type:* string

Admin email for users to contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#mailto_address ZeroTrustGatewaySettings#mailto_address}

---

##### `MailtoSubject`<sup>Optional</sup> <a name="MailtoSubject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.mailtoSubject"></a>

```csharp
public string MailtoSubject { get; set; }
```

- *Type:* string

Subject line for emails created from block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#mailto_subject ZeroTrustGatewaySettings#mailto_subject}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of block page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#name ZeroTrustGatewaySettings#name}

---

### ZeroTrustGatewaySettingsBodyScanning <a name="ZeroTrustGatewaySettingsBodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsBodyScanning {
    string InspectionMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning.property.inspectionMode">InspectionMode</a></code> | <code>string</code> | Body scanning inspection mode. Available values: `deep`, `shallow`. |

---

##### `InspectionMode`<sup>Required</sup> <a name="InspectionMode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning.property.inspectionMode"></a>

```csharp
public string InspectionMode { get; set; }
```

- *Type:* string

Body scanning inspection mode. Available values: `deep`, `shallow`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#inspection_mode ZeroTrustGatewaySettings#inspection_mode}

---

### ZeroTrustGatewaySettingsCertificate <a name="ZeroTrustGatewaySettingsCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsCertificate {
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate.property.id">Id</a></code> | <code>string</code> | ID of certificate for TLS interception. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID of certificate for TLS interception.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ZeroTrustGatewaySettingsConfig <a name="ZeroTrustGatewaySettingsConfig" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    object ActivityLogEnabled = null,
    ZeroTrustGatewaySettingsAntivirus Antivirus = null,
    ZeroTrustGatewaySettingsBlockPage BlockPage = null,
    ZeroTrustGatewaySettingsBodyScanning BodyScanning = null,
    ZeroTrustGatewaySettingsCertificate Certificate = null,
    ZeroTrustGatewaySettingsCustomCertificate CustomCertificate = null,
    ZeroTrustGatewaySettingsExtendedEmailMatching ExtendedEmailMatching = null,
    ZeroTrustGatewaySettingsFips Fips = null,
    string Id = null,
    ZeroTrustGatewaySettingsLogging Logging = null,
    object NonIdentityBrowserIsolationEnabled = null,
    ZeroTrustGatewaySettingsPayloadLog PayloadLog = null,
    object ProtocolDetectionEnabled = null,
    ZeroTrustGatewaySettingsProxy Proxy = null,
    ZeroTrustGatewaySettingsSshSessionLog SshSessionLog = null,
    object TlsDecryptEnabled = null,
    object UrlBrowserIsolationEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>object</code> | Whether to enable the activity log. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.antivirus">Antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a></code> | antivirus block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.bodyScanning">BodyScanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a></code> | body_scanning block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.customCertificate">CustomCertificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a></code> | custom_certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.extendedEmailMatching">ExtendedEmailMatching</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a></code> | extended_email_matching block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.fips">Fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a></code> | fips block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.nonIdentityBrowserIsolationEnabled">NonIdentityBrowserIsolationEnabled</a></code> | <code>object</code> | Enable non-identity onramp for Browser Isolation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.payloadLog">PayloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.protocolDetectionEnabled">ProtocolDetectionEnabled</a></code> | <code>object</code> | Indicator that protocol detection is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.sshSessionLog">SshSessionLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a></code> | ssh_session_log block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.tlsDecryptEnabled">TlsDecryptEnabled</a></code> | <code>object</code> | Indicator that decryption of TLS traffic is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.urlBrowserIsolationEnabled">UrlBrowserIsolationEnabled</a></code> | <code>object</code> | Safely browse websites in Browser Isolation through a URL. Defaults to `false`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#account_id ZeroTrustGatewaySettings#account_id}

---

##### `ActivityLogEnabled`<sup>Optional</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.activityLogEnabled"></a>

```csharp
public object ActivityLogEnabled { get; set; }
```

- *Type:* object

Whether to enable the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#activity_log_enabled ZeroTrustGatewaySettings#activity_log_enabled}

---

##### `Antivirus`<sup>Optional</sup> <a name="Antivirus" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.antivirus"></a>

```csharp
public ZeroTrustGatewaySettingsAntivirus Antivirus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

antivirus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#antivirus ZeroTrustGatewaySettings#antivirus}

---

##### `BlockPage`<sup>Optional</sup> <a name="BlockPage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.blockPage"></a>

```csharp
public ZeroTrustGatewaySettingsBlockPage BlockPage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#block_page ZeroTrustGatewaySettings#block_page}

---

##### `BodyScanning`<sup>Optional</sup> <a name="BodyScanning" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.bodyScanning"></a>

```csharp
public ZeroTrustGatewaySettingsBodyScanning BodyScanning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

body_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#body_scanning ZeroTrustGatewaySettings#body_scanning}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.certificate"></a>

```csharp
public ZeroTrustGatewaySettingsCertificate Certificate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#certificate ZeroTrustGatewaySettings#certificate}

---

##### `CustomCertificate`<sup>Optional</sup> <a name="CustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.customCertificate"></a>

```csharp
public ZeroTrustGatewaySettingsCustomCertificate CustomCertificate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

custom_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#custom_certificate ZeroTrustGatewaySettings#custom_certificate}

---

##### `ExtendedEmailMatching`<sup>Optional</sup> <a name="ExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.extendedEmailMatching"></a>

```csharp
public ZeroTrustGatewaySettingsExtendedEmailMatching ExtendedEmailMatching { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

extended_email_matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#extended_email_matching ZeroTrustGatewaySettings#extended_email_matching}

---

##### `Fips`<sup>Optional</sup> <a name="Fips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.fips"></a>

```csharp
public ZeroTrustGatewaySettingsFips Fips { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

fips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#fips ZeroTrustGatewaySettings#fips}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.logging"></a>

```csharp
public ZeroTrustGatewaySettingsLogging Logging { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#logging ZeroTrustGatewaySettings#logging}

---

##### `NonIdentityBrowserIsolationEnabled`<sup>Optional</sup> <a name="NonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.nonIdentityBrowserIsolationEnabled"></a>

```csharp
public object NonIdentityBrowserIsolationEnabled { get; set; }
```

- *Type:* object

Enable non-identity onramp for Browser Isolation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#non_identity_browser_isolation_enabled ZeroTrustGatewaySettings#non_identity_browser_isolation_enabled}

---

##### `PayloadLog`<sup>Optional</sup> <a name="PayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.payloadLog"></a>

```csharp
public ZeroTrustGatewaySettingsPayloadLog PayloadLog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#payload_log ZeroTrustGatewaySettings#payload_log}

---

##### `ProtocolDetectionEnabled`<sup>Optional</sup> <a name="ProtocolDetectionEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.protocolDetectionEnabled"></a>

```csharp
public object ProtocolDetectionEnabled { get; set; }
```

- *Type:* object

Indicator that protocol detection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#protocol_detection_enabled ZeroTrustGatewaySettings#protocol_detection_enabled}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.proxy"></a>

```csharp
public ZeroTrustGatewaySettingsProxy Proxy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#proxy ZeroTrustGatewaySettings#proxy}

---

##### `SshSessionLog`<sup>Optional</sup> <a name="SshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.sshSessionLog"></a>

```csharp
public ZeroTrustGatewaySettingsSshSessionLog SshSessionLog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

ssh_session_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#ssh_session_log ZeroTrustGatewaySettings#ssh_session_log}

---

##### `TlsDecryptEnabled`<sup>Optional</sup> <a name="TlsDecryptEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.tlsDecryptEnabled"></a>

```csharp
public object TlsDecryptEnabled { get; set; }
```

- *Type:* object

Indicator that decryption of TLS traffic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#tls_decrypt_enabled ZeroTrustGatewaySettings#tls_decrypt_enabled}

---

##### `UrlBrowserIsolationEnabled`<sup>Optional</sup> <a name="UrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsConfig.property.urlBrowserIsolationEnabled"></a>

```csharp
public object UrlBrowserIsolationEnabled { get; set; }
```

- *Type:* object

Safely browse websites in Browser Isolation through a URL. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#url_browser_isolation_enabled ZeroTrustGatewaySettings#url_browser_isolation_enabled}

---

### ZeroTrustGatewaySettingsCustomCertificate <a name="ZeroTrustGatewaySettingsCustomCertificate" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsCustomCertificate {
    object Enabled,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.enabled">Enabled</a></code> | <code>object</code> | Whether TLS encryption should use a custom certificate. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.id">Id</a></code> | <code>string</code> | ID of custom certificate. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether TLS encryption should use a custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID of custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#id ZeroTrustGatewaySettings#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ZeroTrustGatewaySettingsExtendedEmailMatching <a name="ZeroTrustGatewaySettingsExtendedEmailMatching" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsExtendedEmailMatching {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching.property.enabled">Enabled</a></code> | <code>object</code> | Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#enabled ZeroTrustGatewaySettings#enabled}

---

### ZeroTrustGatewaySettingsFips <a name="ZeroTrustGatewaySettingsFips" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsFips {
    object Tls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips.property.tls">Tls</a></code> | <code>object</code> | Only allow FIPS-compliant TLS configuration. |

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips.property.tls"></a>

```csharp
public object Tls { get; set; }
```

- *Type:* object

Only allow FIPS-compliant TLS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#tls ZeroTrustGatewaySettings#tls}

---

### ZeroTrustGatewaySettingsLogging <a name="ZeroTrustGatewaySettingsLogging" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsLogging {
    object RedactPii,
    ZeroTrustGatewaySettingsLoggingSettingsByRuleType SettingsByRuleType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.redactPii">RedactPii</a></code> | <code>object</code> | Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent). |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a></code> | settings_by_rule_type block. |

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.redactPii"></a>

```csharp
public object RedactPii { get; set; }
```

- *Type:* object

Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#redact_pii ZeroTrustGatewaySettings#redact_pii}

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging.property.settingsByRuleType"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleType SettingsByRuleType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

settings_by_rule_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#settings_by_rule_type ZeroTrustGatewaySettings#settings_by_rule_type}

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleType <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsLoggingSettingsByRuleType {
    ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns Dns,
    ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp Http,
    ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4 L4
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.http">Http</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a></code> | http block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.l4">L4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a></code> | l4 block. |

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.dns"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns Dns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#dns ZeroTrustGatewaySettings#dns}

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.http"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp Http { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#http ZeroTrustGatewaySettings#http}

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType.property.l4"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4 L4 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

l4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#l4 ZeroTrustGatewaySettings#l4}

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns {
    object LogAll,
    object LogBlocks
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logAll">LogAll</a></code> | <code>object</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logBlocks">LogBlocks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logAll"></a>

```csharp
public object LogAll { get; set; }
```

- *Type:* object

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns.property.logBlocks"></a>

```csharp
public object LogBlocks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp {
    object LogAll,
    object LogBlocks
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logAll">LogAll</a></code> | <code>object</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logBlocks">LogBlocks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logAll"></a>

```csharp
public object LogAll { get; set; }
```

- *Type:* object

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp.property.logBlocks"></a>

```csharp
public object LogBlocks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4 <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4 {
    object LogAll,
    object LogBlocks
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logAll">LogAll</a></code> | <code>object</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logBlocks">LogBlocks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logAll"></a>

```csharp
public object LogAll { get; set; }
```

- *Type:* object

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_all ZeroTrustGatewaySettings#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4.property.logBlocks"></a>

```csharp
public object LogBlocks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#log_blocks ZeroTrustGatewaySettings#log_blocks}.

---

### ZeroTrustGatewaySettingsPayloadLog <a name="ZeroTrustGatewaySettingsPayloadLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsPayloadLog {
    string PublicKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog.property.publicKey">PublicKey</a></code> | <code>string</code> | Public key used to encrypt matched payloads. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Public key used to encrypt matched payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#public_key ZeroTrustGatewaySettings#public_key}

---

### ZeroTrustGatewaySettingsProxy <a name="ZeroTrustGatewaySettingsProxy" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsProxy {
    double DisableForTime,
    object RootCa,
    object Tcp,
    object Udp,
    object VirtualIp
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.disableForTime">DisableForTime</a></code> | <code>double</code> | Sets the time limit in seconds that a user can use an override code to bypass WARP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.rootCa">RootCa</a></code> | <code>object</code> | Whether root ca is enabled account wide for ZT clients. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.tcp">Tcp</a></code> | <code>object</code> | Whether gateway proxy is enabled on gateway devices for TCP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.udp">Udp</a></code> | <code>object</code> | Whether gateway proxy is enabled on gateway devices for UDP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.virtualIp">VirtualIp</a></code> | <code>object</code> | Whether virtual IP (CGNAT) is enabled account wide and will override existing local interface IP for ZT clients. |

---

##### `DisableForTime`<sup>Required</sup> <a name="DisableForTime" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.disableForTime"></a>

```csharp
public double DisableForTime { get; set; }
```

- *Type:* double

Sets the time limit in seconds that a user can use an override code to bypass WARP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#disable_for_time ZeroTrustGatewaySettings#disable_for_time}

---

##### `RootCa`<sup>Required</sup> <a name="RootCa" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.rootCa"></a>

```csharp
public object RootCa { get; set; }
```

- *Type:* object

Whether root ca is enabled account wide for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#root_ca ZeroTrustGatewaySettings#root_ca}

---

##### `Tcp`<sup>Required</sup> <a name="Tcp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.tcp"></a>

```csharp
public object Tcp { get; set; }
```

- *Type:* object

Whether gateway proxy is enabled on gateway devices for TCP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#tcp ZeroTrustGatewaySettings#tcp}

---

##### `Udp`<sup>Required</sup> <a name="Udp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.udp"></a>

```csharp
public object Udp { get; set; }
```

- *Type:* object

Whether gateway proxy is enabled on gateway devices for UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#udp ZeroTrustGatewaySettings#udp}

---

##### `VirtualIp`<sup>Required</sup> <a name="VirtualIp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy.property.virtualIp"></a>

```csharp
public object VirtualIp { get; set; }
```

- *Type:* object

Whether virtual IP (CGNAT) is enabled account wide and will override existing local interface IP for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#virtual_ip ZeroTrustGatewaySettings#virtual_ip}

---

### ZeroTrustGatewaySettingsSshSessionLog <a name="ZeroTrustGatewaySettingsSshSessionLog" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsSshSessionLog {
    string PublicKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog.property.publicKey">PublicKey</a></code> | <code>string</code> | Public key used to encrypt ssh session. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Public key used to encrypt ssh session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.43.0/docs/resources/zero_trust_gateway_settings#public_key ZeroTrustGatewaySettings#public_key}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference <a name="ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.resetSupportUrl"></a>

```csharp
private void ResetSupportUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrlInput">SupportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrl">SupportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrlInput"></a>

```csharp
public string SupportUrlInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.supportUrl"></a>

```csharp
public string SupportUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsAntivirusNotificationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

---


### ZeroTrustGatewaySettingsAntivirusOutputReference <a name="ZeroTrustGatewaySettingsAntivirusOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsAntivirusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings">PutNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resetNotificationSettings">ResetNotificationSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationSettings` <a name="PutNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings"></a>

```csharp
private void PutNotificationSettings(ZeroTrustGatewaySettingsAntivirusNotificationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

---

##### `ResetNotificationSettings` <a name="ResetNotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.resetNotificationSettings"></a>

```csharp
private void ResetNotificationSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference">ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhaseInput">EnabledDownloadPhaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhaseInput">EnabledUploadPhaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosedInput">FailClosedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettingsInput">NotificationSettingsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhase">EnabledDownloadPhase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhase">EnabledUploadPhase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosed">FailClosed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettings"></a>

```csharp
public ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference NotificationSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference">ZeroTrustGatewaySettingsAntivirusNotificationSettingsOutputReference</a>

---

##### `EnabledDownloadPhaseInput`<sup>Optional</sup> <a name="EnabledDownloadPhaseInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhaseInput"></a>

```csharp
public object EnabledDownloadPhaseInput { get; }
```

- *Type:* object

---

##### `EnabledUploadPhaseInput`<sup>Optional</sup> <a name="EnabledUploadPhaseInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhaseInput"></a>

```csharp
public object EnabledUploadPhaseInput { get; }
```

- *Type:* object

---

##### `FailClosedInput`<sup>Optional</sup> <a name="FailClosedInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosedInput"></a>

```csharp
public object FailClosedInput { get; }
```

- *Type:* object

---

##### `NotificationSettingsInput`<sup>Optional</sup> <a name="NotificationSettingsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.notificationSettingsInput"></a>

```csharp
public ZeroTrustGatewaySettingsAntivirusNotificationSettings NotificationSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusNotificationSettings">ZeroTrustGatewaySettingsAntivirusNotificationSettings</a>

---

##### `EnabledDownloadPhase`<sup>Required</sup> <a name="EnabledDownloadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledDownloadPhase"></a>

```csharp
public object EnabledDownloadPhase { get; }
```

- *Type:* object

---

##### `EnabledUploadPhase`<sup>Required</sup> <a name="EnabledUploadPhase" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.enabledUploadPhase"></a>

```csharp
public object EnabledUploadPhase { get; }
```

- *Type:* object

---

##### `FailClosed`<sup>Required</sup> <a name="FailClosed" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.failClosed"></a>

```csharp
public object FailClosed { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirusOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsAntivirus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsAntivirus">ZeroTrustGatewaySettingsAntivirus</a>

---


### ZeroTrustGatewaySettingsBlockPageOutputReference <a name="ZeroTrustGatewaySettingsBlockPageOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsBlockPageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetFooterText">ResetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetHeaderText">ResetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetLogoPath">ResetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoAddress">ResetMailtoAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoSubject">ResetMailtoSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetBackgroundColor"></a>

```csharp
private void ResetBackgroundColor()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFooterText` <a name="ResetFooterText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetFooterText"></a>

```csharp
private void ResetFooterText()
```

##### `ResetHeaderText` <a name="ResetHeaderText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetHeaderText"></a>

```csharp
private void ResetHeaderText()
```

##### `ResetLogoPath` <a name="ResetLogoPath" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetLogoPath"></a>

```csharp
private void ResetLogoPath()
```

##### `ResetMailtoAddress` <a name="ResetMailtoAddress" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoAddress"></a>

```csharp
private void ResetMailtoAddress()
```

##### `ResetMailtoSubject` <a name="ResetMailtoSubject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetMailtoSubject"></a>

```csharp
private void ResetMailtoSubject()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerTextInput">FooterTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerTextInput">HeaderTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPathInput">LogoPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddressInput">MailtoAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubjectInput">MailtoSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerText">FooterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerText">HeaderText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPath">LogoPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddress">MailtoAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubject">MailtoSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColorInput"></a>

```csharp
public string BackgroundColorInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FooterTextInput`<sup>Optional</sup> <a name="FooterTextInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerTextInput"></a>

```csharp
public string FooterTextInput { get; }
```

- *Type:* string

---

##### `HeaderTextInput`<sup>Optional</sup> <a name="HeaderTextInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerTextInput"></a>

```csharp
public string HeaderTextInput { get; }
```

- *Type:* string

---

##### `LogoPathInput`<sup>Optional</sup> <a name="LogoPathInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPathInput"></a>

```csharp
public string LogoPathInput { get; }
```

- *Type:* string

---

##### `MailtoAddressInput`<sup>Optional</sup> <a name="MailtoAddressInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddressInput"></a>

```csharp
public string MailtoAddressInput { get; }
```

- *Type:* string

---

##### `MailtoSubjectInput`<sup>Optional</sup> <a name="MailtoSubjectInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubjectInput"></a>

```csharp
public string MailtoSubjectInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.footerText"></a>

```csharp
public string FooterText { get; }
```

- *Type:* string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.headerText"></a>

```csharp
public string HeaderText { get; }
```

- *Type:* string

---

##### `LogoPath`<sup>Required</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.logoPath"></a>

```csharp
public string LogoPath { get; }
```

- *Type:* string

---

##### `MailtoAddress`<sup>Required</sup> <a name="MailtoAddress" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoAddress"></a>

```csharp
public string MailtoAddress { get; }
```

- *Type:* string

---

##### `MailtoSubject`<sup>Required</sup> <a name="MailtoSubject" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.mailtoSubject"></a>

```csharp
public string MailtoSubject { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPageOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsBlockPage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBlockPage">ZeroTrustGatewaySettingsBlockPage</a>

---


### ZeroTrustGatewaySettingsBodyScanningOutputReference <a name="ZeroTrustGatewaySettingsBodyScanningOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsBodyScanningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionModeInput">InspectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionMode">InspectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InspectionModeInput`<sup>Optional</sup> <a name="InspectionModeInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionModeInput"></a>

```csharp
public string InspectionModeInput { get; }
```

- *Type:* string

---

##### `InspectionMode`<sup>Required</sup> <a name="InspectionMode" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.inspectionMode"></a>

```csharp
public string InspectionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanningOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsBodyScanning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsBodyScanning">ZeroTrustGatewaySettingsBodyScanning</a>

---


### ZeroTrustGatewaySettingsCertificateOutputReference <a name="ZeroTrustGatewaySettingsCertificateOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificateOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCertificate">ZeroTrustGatewaySettingsCertificate</a>

---


### ZeroTrustGatewaySettingsCustomCertificateOutputReference <a name="ZeroTrustGatewaySettingsCustomCertificateOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsCustomCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificateOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsCustomCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsCustomCertificate">ZeroTrustGatewaySettingsCustomCertificate</a>

---


### ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference <a name="ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatchingOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsExtendedEmailMatching InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsExtendedEmailMatching">ZeroTrustGatewaySettingsExtendedEmailMatching</a>

---


### ZeroTrustGatewaySettingsFipsOutputReference <a name="ZeroTrustGatewaySettingsFipsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsFipsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tlsInput">TlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tls">Tls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tlsInput"></a>

```csharp
public object TlsInput { get; }
```

- *Type:* object

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.tls"></a>

```csharp
public object Tls { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFipsOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsFips InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsFips">ZeroTrustGatewaySettingsFips</a>

---


### ZeroTrustGatewaySettingsLoggingOutputReference <a name="ZeroTrustGatewaySettingsLoggingOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType">PutSettingsByRuleType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettingsByRuleType` <a name="PutSettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType"></a>

```csharp
private void PutSettingsByRuleType(ZeroTrustGatewaySettingsLoggingSettingsByRuleType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.putSettingsByRuleType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPiiInput">RedactPiiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleTypeInput">SettingsByRuleTypeInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPii">RedactPii</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleType"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference SettingsByRuleType { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference</a>

---

##### `RedactPiiInput`<sup>Optional</sup> <a name="RedactPiiInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPiiInput"></a>

```csharp
public object RedactPiiInput { get; }
```

- *Type:* object

---

##### `SettingsByRuleTypeInput`<sup>Optional</sup> <a name="SettingsByRuleTypeInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.settingsByRuleTypeInput"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleType SettingsByRuleTypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.redactPii"></a>

```csharp
public object RedactPii { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLogging">ZeroTrustGatewaySettingsLogging</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput">LogAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAll">LogAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks">LogBlocks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput"></a>

```csharp
public object LogAllInput { get; }
```

- *Type:* object

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput"></a>

```csharp
public object LogBlocksInput { get; }
```

- *Type:* object

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logAll"></a>

```csharp
public object LogAll { get; }
```

- *Type:* object

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks"></a>

```csharp
public object LogBlocks { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput">LogAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAll">LogAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks">LogBlocks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput"></a>

```csharp
public object LogAllInput { get; }
```

- *Type:* object

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput"></a>

```csharp
public object LogBlocksInput { get; }
```

- *Type:* object

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logAll"></a>

```csharp
public object LogAll { get; }
```

- *Type:* object

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks"></a>

```csharp
public object LogBlocks { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput">LogAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAll">LogAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks">LogBlocks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput"></a>

```csharp
public object LogAllInput { get; }
```

- *Type:* object

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput"></a>

```csharp
public object LogBlocksInput { get; }
```

- *Type:* object

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logAll"></a>

```csharp
public object LogAll { get; }
```

- *Type:* object

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks"></a>

```csharp
public object LogBlocks { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

---


### ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference <a name="ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putL4">PutL4</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDns` <a name="PutDns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putDns"></a>

```csharp
private void PutDns(ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

---

##### `PutHttp` <a name="PutHttp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putHttp"></a>

```csharp
private void PutHttp(ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

---

##### `PutL4` <a name="PutL4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putL4"></a>

```csharp
private void PutL4(ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.putL4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.http">Http</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4">L4</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dnsInput">DnsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.httpInput">HttpInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4Input">L4Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dns"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference Dns { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDnsOutputReference</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.http"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference Http { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttpOutputReference</a>

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference L4 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4OutputReference</a>

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.dnsInput"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns DnsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeDns</a>

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.httpInput"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp HttpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeHttp</a>

---

##### `L4Input`<sup>Optional</sup> <a name="L4Input" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.l4Input"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4 L4Input { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4">ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeL4</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleTypeOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsLoggingSettingsByRuleType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsLoggingSettingsByRuleType">ZeroTrustGatewaySettingsLoggingSettingsByRuleType</a>

---


### ZeroTrustGatewaySettingsPayloadLogOutputReference <a name="ZeroTrustGatewaySettingsPayloadLogOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsPayloadLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLogOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsPayloadLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsPayloadLog">ZeroTrustGatewaySettingsPayloadLog</a>

---


### ZeroTrustGatewaySettingsProxyOutputReference <a name="ZeroTrustGatewaySettingsProxyOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsProxyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTimeInput">DisableForTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCaInput">RootCaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcpInput">TcpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udpInput">UdpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIpInput">VirtualIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTime">DisableForTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCa">RootCa</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcp">Tcp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udp">Udp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIp">VirtualIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableForTimeInput`<sup>Optional</sup> <a name="DisableForTimeInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTimeInput"></a>

```csharp
public double DisableForTimeInput { get; }
```

- *Type:* double

---

##### `RootCaInput`<sup>Optional</sup> <a name="RootCaInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCaInput"></a>

```csharp
public object RootCaInput { get; }
```

- *Type:* object

---

##### `TcpInput`<sup>Optional</sup> <a name="TcpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcpInput"></a>

```csharp
public object TcpInput { get; }
```

- *Type:* object

---

##### `UdpInput`<sup>Optional</sup> <a name="UdpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udpInput"></a>

```csharp
public object UdpInput { get; }
```

- *Type:* object

---

##### `VirtualIpInput`<sup>Optional</sup> <a name="VirtualIpInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIpInput"></a>

```csharp
public object VirtualIpInput { get; }
```

- *Type:* object

---

##### `DisableForTime`<sup>Required</sup> <a name="DisableForTime" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.disableForTime"></a>

```csharp
public double DisableForTime { get; }
```

- *Type:* double

---

##### `RootCa`<sup>Required</sup> <a name="RootCa" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.rootCa"></a>

```csharp
public object RootCa { get; }
```

- *Type:* object

---

##### `Tcp`<sup>Required</sup> <a name="Tcp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.tcp"></a>

```csharp
public object Tcp { get; }
```

- *Type:* object

---

##### `Udp`<sup>Required</sup> <a name="Udp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.udp"></a>

```csharp
public object Udp { get; }
```

- *Type:* object

---

##### `VirtualIp`<sup>Required</sup> <a name="VirtualIp" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.virtualIp"></a>

```csharp
public object VirtualIp { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxyOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsProxy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsProxy">ZeroTrustGatewaySettingsProxy</a>

---


### ZeroTrustGatewaySettingsSshSessionLogOutputReference <a name="ZeroTrustGatewaySettingsSshSessionLogOutputReference" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustGatewaySettingsSshSessionLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLogOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustGatewaySettingsSshSessionLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustGatewaySettings.ZeroTrustGatewaySettingsSshSessionLog">ZeroTrustGatewaySettingsSshSessionLog</a>

---



