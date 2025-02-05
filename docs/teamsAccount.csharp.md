# `teamsAccount` Submodule <a name="`teamsAccount` Submodule" id="@cdktf/provider-cloudflare.teamsAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamsAccount <a name="TeamsAccount" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account cloudflare_teams_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccount(Construct Scope, string Id, TeamsAccountConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig">TeamsAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig">TeamsAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus">PutAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage">PutBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBodyScanning">PutBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putCertificate">PutCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putCustomCertificate">PutCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putExtendedEmailMatching">PutExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips">PutFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putPayloadLog">PutPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy">PutProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putSshSessionLog">PutSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetActivityLogEnabled">ResetActivityLogEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetAntivirus">ResetAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetBlockPage">ResetBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetBodyScanning">ResetBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetCustomCertificate">ResetCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetExtendedEmailMatching">ResetExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetFips">ResetFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetNonIdentityBrowserIsolationEnabled">ResetNonIdentityBrowserIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetPayloadLog">ResetPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProtocolDetectionEnabled">ResetProtocolDetectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProxy">ResetProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetSshSessionLog">ResetSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetTlsDecryptEnabled">ResetTlsDecryptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetUrlBrowserIsolationEnabled">ResetUrlBrowserIsolationEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAntivirus` <a name="PutAntivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus"></a>

```csharp
private void PutAntivirus(TeamsAccountAntivirus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putAntivirus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---

##### `PutBlockPage` <a name="PutBlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage"></a>

```csharp
private void PutBlockPage(TeamsAccountBlockPage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBlockPage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---

##### `PutBodyScanning` <a name="PutBodyScanning" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBodyScanning"></a>

```csharp
private void PutBodyScanning(TeamsAccountBodyScanning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putBodyScanning.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a>

---

##### `PutCertificate` <a name="PutCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putCertificate"></a>

```csharp
private void PutCertificate(TeamsAccountCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a>

---

##### `PutCustomCertificate` <a name="PutCustomCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putCustomCertificate"></a>

```csharp
private void PutCustomCertificate(TeamsAccountCustomCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putCustomCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a>

---

##### `PutExtendedEmailMatching` <a name="PutExtendedEmailMatching" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putExtendedEmailMatching"></a>

```csharp
private void PutExtendedEmailMatching(TeamsAccountExtendedEmailMatching Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putExtendedEmailMatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a>

---

##### `PutFips` <a name="PutFips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips"></a>

```csharp
private void PutFips(TeamsAccountFips Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putFips.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging"></a>

```csharp
private void PutLogging(TeamsAccountLogging Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---

##### `PutPayloadLog` <a name="PutPayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putPayloadLog"></a>

```csharp
private void PutPayloadLog(TeamsAccountPayloadLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putPayloadLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

---

##### `PutProxy` <a name="PutProxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy"></a>

```csharp
private void PutProxy(TeamsAccountProxy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---

##### `PutSshSessionLog` <a name="PutSshSessionLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putSshSessionLog"></a>

```csharp
private void PutSshSessionLog(TeamsAccountSshSessionLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.putSshSessionLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a>

---

##### `ResetActivityLogEnabled` <a name="ResetActivityLogEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetActivityLogEnabled"></a>

```csharp
private void ResetActivityLogEnabled()
```

##### `ResetAntivirus` <a name="ResetAntivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetAntivirus"></a>

```csharp
private void ResetAntivirus()
```

##### `ResetBlockPage` <a name="ResetBlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetBlockPage"></a>

```csharp
private void ResetBlockPage()
```

##### `ResetBodyScanning` <a name="ResetBodyScanning" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetBodyScanning"></a>

```csharp
private void ResetBodyScanning()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetCertificate"></a>

```csharp
private void ResetCertificate()
```

##### `ResetCustomCertificate` <a name="ResetCustomCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetCustomCertificate"></a>

```csharp
private void ResetCustomCertificate()
```

##### `ResetExtendedEmailMatching` <a name="ResetExtendedEmailMatching" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetExtendedEmailMatching"></a>

```csharp
private void ResetExtendedEmailMatching()
```

##### `ResetFips` <a name="ResetFips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetFips"></a>

```csharp
private void ResetFips()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetLogging"></a>

```csharp
private void ResetLogging()
```

##### `ResetNonIdentityBrowserIsolationEnabled` <a name="ResetNonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetNonIdentityBrowserIsolationEnabled"></a>

```csharp
private void ResetNonIdentityBrowserIsolationEnabled()
```

##### `ResetPayloadLog` <a name="ResetPayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetPayloadLog"></a>

```csharp
private void ResetPayloadLog()
```

##### `ResetProtocolDetectionEnabled` <a name="ResetProtocolDetectionEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProtocolDetectionEnabled"></a>

```csharp
private void ResetProtocolDetectionEnabled()
```

##### `ResetProxy` <a name="ResetProxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetProxy"></a>

```csharp
private void ResetProxy()
```

##### `ResetSshSessionLog` <a name="ResetSshSessionLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetSshSessionLog"></a>

```csharp
private void ResetSshSessionLog()
```

##### `ResetTlsDecryptEnabled` <a name="ResetTlsDecryptEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetTlsDecryptEnabled"></a>

```csharp
private void ResetTlsDecryptEnabled()
```

##### `ResetUrlBrowserIsolationEnabled` <a name="ResetUrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.resetUrlBrowserIsolationEnabled"></a>

```csharp
private void ResetUrlBrowserIsolationEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TeamsAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

TeamsAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TeamsAccount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TeamsAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TeamsAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TeamsAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirus">Antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference">TeamsAccountAntivirusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference">TeamsAccountBlockPageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.bodyScanning">BodyScanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference">TeamsAccountBodyScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference">TeamsAccountCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.customCertificate">CustomCertificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference">TeamsAccountCustomCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.extendedEmailMatching">ExtendedEmailMatching</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference">TeamsAccountExtendedEmailMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fips">Fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference">TeamsAccountFipsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference">TeamsAccountLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLog">PayloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference">TeamsAccountPayloadLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference">TeamsAccountProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.sshSessionLog">SshSessionLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference">TeamsAccountSshSessionLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabledInput">ActivityLogEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirusInput">AntivirusInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPageInput">BlockPageInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.bodyScanningInput">BodyScanningInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.certificateInput">CertificateInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.customCertificateInput">CustomCertificateInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.extendedEmailMatchingInput">ExtendedEmailMatchingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fipsInput">FipsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.nonIdentityBrowserIsolationEnabledInput">NonIdentityBrowserIsolationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLogInput">PayloadLogInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.protocolDetectionEnabledInput">ProtocolDetectionEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxyInput">ProxyInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.sshSessionLogInput">SshSessionLogInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabledInput">TlsDecryptEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabledInput">UrlBrowserIsolationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.nonIdentityBrowserIsolationEnabled">NonIdentityBrowserIsolationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.protocolDetectionEnabled">ProtocolDetectionEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabled">TlsDecryptEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabled">UrlBrowserIsolationEnabled</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Antivirus`<sup>Required</sup> <a name="Antivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirus"></a>

```csharp
public TeamsAccountAntivirusOutputReference Antivirus { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference">TeamsAccountAntivirusOutputReference</a>

---

##### `BlockPage`<sup>Required</sup> <a name="BlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPage"></a>

```csharp
public TeamsAccountBlockPageOutputReference BlockPage { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference">TeamsAccountBlockPageOutputReference</a>

---

##### `BodyScanning`<sup>Required</sup> <a name="BodyScanning" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.bodyScanning"></a>

```csharp
public TeamsAccountBodyScanningOutputReference BodyScanning { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference">TeamsAccountBodyScanningOutputReference</a>

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.certificate"></a>

```csharp
public TeamsAccountCertificateOutputReference Certificate { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference">TeamsAccountCertificateOutputReference</a>

---

##### `CustomCertificate`<sup>Required</sup> <a name="CustomCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.customCertificate"></a>

```csharp
public TeamsAccountCustomCertificateOutputReference CustomCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference">TeamsAccountCustomCertificateOutputReference</a>

---

##### `ExtendedEmailMatching`<sup>Required</sup> <a name="ExtendedEmailMatching" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.extendedEmailMatching"></a>

```csharp
public TeamsAccountExtendedEmailMatchingOutputReference ExtendedEmailMatching { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference">TeamsAccountExtendedEmailMatchingOutputReference</a>

---

##### `Fips`<sup>Required</sup> <a name="Fips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fips"></a>

```csharp
public TeamsAccountFipsOutputReference Fips { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference">TeamsAccountFipsOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.logging"></a>

```csharp
public TeamsAccountLoggingOutputReference Logging { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference">TeamsAccountLoggingOutputReference</a>

---

##### `PayloadLog`<sup>Required</sup> <a name="PayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLog"></a>

```csharp
public TeamsAccountPayloadLogOutputReference PayloadLog { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference">TeamsAccountPayloadLogOutputReference</a>

---

##### `Proxy`<sup>Required</sup> <a name="Proxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxy"></a>

```csharp
public TeamsAccountProxyOutputReference Proxy { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference">TeamsAccountProxyOutputReference</a>

---

##### `SshSessionLog`<sup>Required</sup> <a name="SshSessionLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.sshSessionLog"></a>

```csharp
public TeamsAccountSshSessionLogOutputReference SshSessionLog { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference">TeamsAccountSshSessionLogOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ActivityLogEnabledInput`<sup>Optional</sup> <a name="ActivityLogEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabledInput"></a>

```csharp
public object ActivityLogEnabledInput { get; }
```

- *Type:* object

---

##### `AntivirusInput`<sup>Optional</sup> <a name="AntivirusInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.antivirusInput"></a>

```csharp
public TeamsAccountAntivirus AntivirusInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---

##### `BlockPageInput`<sup>Optional</sup> <a name="BlockPageInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.blockPageInput"></a>

```csharp
public TeamsAccountBlockPage BlockPageInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---

##### `BodyScanningInput`<sup>Optional</sup> <a name="BodyScanningInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.bodyScanningInput"></a>

```csharp
public TeamsAccountBodyScanning BodyScanningInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a>

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.certificateInput"></a>

```csharp
public TeamsAccountCertificate CertificateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a>

---

##### `CustomCertificateInput`<sup>Optional</sup> <a name="CustomCertificateInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.customCertificateInput"></a>

```csharp
public TeamsAccountCustomCertificate CustomCertificateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a>

---

##### `ExtendedEmailMatchingInput`<sup>Optional</sup> <a name="ExtendedEmailMatchingInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.extendedEmailMatchingInput"></a>

```csharp
public TeamsAccountExtendedEmailMatching ExtendedEmailMatchingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a>

---

##### `FipsInput`<sup>Optional</sup> <a name="FipsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.fipsInput"></a>

```csharp
public TeamsAccountFips FipsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.loggingInput"></a>

```csharp
public TeamsAccountLogging LoggingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---

##### `NonIdentityBrowserIsolationEnabledInput`<sup>Optional</sup> <a name="NonIdentityBrowserIsolationEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.nonIdentityBrowserIsolationEnabledInput"></a>

```csharp
public object NonIdentityBrowserIsolationEnabledInput { get; }
```

- *Type:* object

---

##### `PayloadLogInput`<sup>Optional</sup> <a name="PayloadLogInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.payloadLogInput"></a>

```csharp
public TeamsAccountPayloadLog PayloadLogInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

---

##### `ProtocolDetectionEnabledInput`<sup>Optional</sup> <a name="ProtocolDetectionEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.protocolDetectionEnabledInput"></a>

```csharp
public object ProtocolDetectionEnabledInput { get; }
```

- *Type:* object

---

##### `ProxyInput`<sup>Optional</sup> <a name="ProxyInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.proxyInput"></a>

```csharp
public TeamsAccountProxy ProxyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---

##### `SshSessionLogInput`<sup>Optional</sup> <a name="SshSessionLogInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.sshSessionLogInput"></a>

```csharp
public TeamsAccountSshSessionLog SshSessionLogInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a>

---

##### `TlsDecryptEnabledInput`<sup>Optional</sup> <a name="TlsDecryptEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabledInput"></a>

```csharp
public object TlsDecryptEnabledInput { get; }
```

- *Type:* object

---

##### `UrlBrowserIsolationEnabledInput`<sup>Optional</sup> <a name="UrlBrowserIsolationEnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabledInput"></a>

```csharp
public object UrlBrowserIsolationEnabledInput { get; }
```

- *Type:* object

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ActivityLogEnabled`<sup>Required</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.activityLogEnabled"></a>

```csharp
public object ActivityLogEnabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NonIdentityBrowserIsolationEnabled`<sup>Required</sup> <a name="NonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.nonIdentityBrowserIsolationEnabled"></a>

```csharp
public object NonIdentityBrowserIsolationEnabled { get; }
```

- *Type:* object

---

##### `ProtocolDetectionEnabled`<sup>Required</sup> <a name="ProtocolDetectionEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.protocolDetectionEnabled"></a>

```csharp
public object ProtocolDetectionEnabled { get; }
```

- *Type:* object

---

##### `TlsDecryptEnabled`<sup>Required</sup> <a name="TlsDecryptEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tlsDecryptEnabled"></a>

```csharp
public object TlsDecryptEnabled { get; }
```

- *Type:* object

---

##### `UrlBrowserIsolationEnabled`<sup>Required</sup> <a name="UrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.urlBrowserIsolationEnabled"></a>

```csharp
public object UrlBrowserIsolationEnabled { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamsAccountAntivirus <a name="TeamsAccountAntivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountAntivirus {
    object EnabledDownloadPhase,
    object EnabledUploadPhase,
    object FailClosed,
    TeamsAccountAntivirusNotificationSettings NotificationSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledDownloadPhase">EnabledDownloadPhase</a></code> | <code>object</code> | Scan on file download. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledUploadPhase">EnabledUploadPhase</a></code> | <code>object</code> | Scan on file upload. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.failClosed">FailClosed</a></code> | <code>object</code> | Block requests for files that cannot be scanned. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a></code> | notification_settings block. |

---

##### `EnabledDownloadPhase`<sup>Required</sup> <a name="EnabledDownloadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledDownloadPhase"></a>

```csharp
public object EnabledDownloadPhase { get; set; }
```

- *Type:* object

Scan on file download.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#enabled_download_phase TeamsAccount#enabled_download_phase}

---

##### `EnabledUploadPhase`<sup>Required</sup> <a name="EnabledUploadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.enabledUploadPhase"></a>

```csharp
public object EnabledUploadPhase { get; set; }
```

- *Type:* object

Scan on file upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#enabled_upload_phase TeamsAccount#enabled_upload_phase}

---

##### `FailClosed`<sup>Required</sup> <a name="FailClosed" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.failClosed"></a>

```csharp
public object FailClosed { get; set; }
```

- *Type:* object

Block requests for files that cannot be scanned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#fail_closed TeamsAccount#fail_closed}

---

##### `NotificationSettings`<sup>Optional</sup> <a name="NotificationSettings" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus.property.notificationSettings"></a>

```csharp
public TeamsAccountAntivirusNotificationSettings NotificationSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a>

notification_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#notification_settings TeamsAccount#notification_settings}

---

### TeamsAccountAntivirusNotificationSettings <a name="TeamsAccountAntivirusNotificationSettings" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountAntivirusNotificationSettings {
    object Enabled = null,
    string Message = null,
    string SupportUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.property.enabled">Enabled</a></code> | <code>object</code> | Enable notification settings. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.property.message">Message</a></code> | <code>string</code> | Notification content. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.property.supportUrl">SupportUrl</a></code> | <code>string</code> | Support URL to show in the notification. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Enable notification settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#enabled TeamsAccount#enabled}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Notification content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#message TeamsAccount#message}

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings.property.supportUrl"></a>

```csharp
public string SupportUrl { get; set; }
```

- *Type:* string

Support URL to show in the notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#support_url TeamsAccount#support_url}

---

### TeamsAccountBlockPage <a name="TeamsAccountBlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountBlockPage {
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
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | Hex code of block page background color. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.enabled">Enabled</a></code> | <code>object</code> | Indicator of enablement. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.footerText">FooterText</a></code> | <code>string</code> | Block page footer text. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.headerText">HeaderText</a></code> | <code>string</code> | Block page header text. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.logoPath">LogoPath</a></code> | <code>string</code> | URL of block page logo. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoAddress">MailtoAddress</a></code> | <code>string</code> | Admin email for users to contact. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoSubject">MailtoSubject</a></code> | <code>string</code> | Subject line for emails created from block page. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.name">Name</a></code> | <code>string</code> | Name of block page configuration. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; set; }
```

- *Type:* string

Hex code of block page background color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#background_color TeamsAccount#background_color}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Indicator of enablement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#enabled TeamsAccount#enabled}

---

##### `FooterText`<sup>Optional</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.footerText"></a>

```csharp
public string FooterText { get; set; }
```

- *Type:* string

Block page footer text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#footer_text TeamsAccount#footer_text}

---

##### `HeaderText`<sup>Optional</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.headerText"></a>

```csharp
public string HeaderText { get; set; }
```

- *Type:* string

Block page header text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#header_text TeamsAccount#header_text}

---

##### `LogoPath`<sup>Optional</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.logoPath"></a>

```csharp
public string LogoPath { get; set; }
```

- *Type:* string

URL of block page logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#logo_path TeamsAccount#logo_path}

---

##### `MailtoAddress`<sup>Optional</sup> <a name="MailtoAddress" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoAddress"></a>

```csharp
public string MailtoAddress { get; set; }
```

- *Type:* string

Admin email for users to contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#mailto_address TeamsAccount#mailto_address}

---

##### `MailtoSubject`<sup>Optional</sup> <a name="MailtoSubject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.mailtoSubject"></a>

```csharp
public string MailtoSubject { get; set; }
```

- *Type:* string

Subject line for emails created from block page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#mailto_subject TeamsAccount#mailto_subject}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of block page configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#name TeamsAccount#name}

---

### TeamsAccountBodyScanning <a name="TeamsAccountBodyScanning" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountBodyScanning {
    string InspectionMode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning.property.inspectionMode">InspectionMode</a></code> | <code>string</code> | Body scanning inspection mode. Available values: `deep`, `shallow`. |

---

##### `InspectionMode`<sup>Required</sup> <a name="InspectionMode" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning.property.inspectionMode"></a>

```csharp
public string InspectionMode { get; set; }
```

- *Type:* string

Body scanning inspection mode. Available values: `deep`, `shallow`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#inspection_mode TeamsAccount#inspection_mode}

---

### TeamsAccountCertificate <a name="TeamsAccountCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountCertificate {
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate.property.id">Id</a></code> | <code>string</code> | ID of certificate for TLS interception. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID of certificate for TLS interception.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#id TeamsAccount#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TeamsAccountConfig <a name="TeamsAccountConfig" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    object ActivityLogEnabled = null,
    TeamsAccountAntivirus Antivirus = null,
    TeamsAccountBlockPage BlockPage = null,
    TeamsAccountBodyScanning BodyScanning = null,
    TeamsAccountCertificate Certificate = null,
    TeamsAccountCustomCertificate CustomCertificate = null,
    TeamsAccountExtendedEmailMatching ExtendedEmailMatching = null,
    TeamsAccountFips Fips = null,
    string Id = null,
    TeamsAccountLogging Logging = null,
    object NonIdentityBrowserIsolationEnabled = null,
    TeamsAccountPayloadLog PayloadLog = null,
    object ProtocolDetectionEnabled = null,
    TeamsAccountProxy Proxy = null,
    TeamsAccountSshSessionLog SshSessionLog = null,
    object TlsDecryptEnabled = null,
    object UrlBrowserIsolationEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.activityLogEnabled">ActivityLogEnabled</a></code> | <code>object</code> | Whether to enable the activity log. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.antivirus">Antivirus</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | antivirus block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.blockPage">BlockPage</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | block_page block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.bodyScanning">BodyScanning</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a></code> | body_scanning block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.certificate">Certificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a></code> | certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.customCertificate">CustomCertificate</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a></code> | custom_certificate block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.extendedEmailMatching">ExtendedEmailMatching</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a></code> | extended_email_matching block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.fips">Fips</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | fips block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#id TeamsAccount#id}. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | logging block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.nonIdentityBrowserIsolationEnabled">NonIdentityBrowserIsolationEnabled</a></code> | <code>object</code> | Enable non-identity onramp for Browser Isolation. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.payloadLog">PayloadLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a></code> | payload_log block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.protocolDetectionEnabled">ProtocolDetectionEnabled</a></code> | <code>object</code> | Indicator that protocol detection is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.proxy">Proxy</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | proxy block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.sshSessionLog">SshSessionLog</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a></code> | ssh_session_log block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.tlsDecryptEnabled">TlsDecryptEnabled</a></code> | <code>object</code> | Indicator that decryption of TLS traffic is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.urlBrowserIsolationEnabled">UrlBrowserIsolationEnabled</a></code> | <code>object</code> | Safely browse websites in Browser Isolation through a URL. Defaults to `false`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#account_id TeamsAccount#account_id}

---

##### `ActivityLogEnabled`<sup>Optional</sup> <a name="ActivityLogEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.activityLogEnabled"></a>

```csharp
public object ActivityLogEnabled { get; set; }
```

- *Type:* object

Whether to enable the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#activity_log_enabled TeamsAccount#activity_log_enabled}

---

##### `Antivirus`<sup>Optional</sup> <a name="Antivirus" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.antivirus"></a>

```csharp
public TeamsAccountAntivirus Antivirus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

antivirus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#antivirus TeamsAccount#antivirus}

---

##### `BlockPage`<sup>Optional</sup> <a name="BlockPage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.blockPage"></a>

```csharp
public TeamsAccountBlockPage BlockPage { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

block_page block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#block_page TeamsAccount#block_page}

---

##### `BodyScanning`<sup>Optional</sup> <a name="BodyScanning" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.bodyScanning"></a>

```csharp
public TeamsAccountBodyScanning BodyScanning { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a>

body_scanning block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#body_scanning TeamsAccount#body_scanning}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.certificate"></a>

```csharp
public TeamsAccountCertificate Certificate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a>

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#certificate TeamsAccount#certificate}

---

##### `CustomCertificate`<sup>Optional</sup> <a name="CustomCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.customCertificate"></a>

```csharp
public TeamsAccountCustomCertificate CustomCertificate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a>

custom_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#custom_certificate TeamsAccount#custom_certificate}

---

##### `ExtendedEmailMatching`<sup>Optional</sup> <a name="ExtendedEmailMatching" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.extendedEmailMatching"></a>

```csharp
public TeamsAccountExtendedEmailMatching ExtendedEmailMatching { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a>

extended_email_matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#extended_email_matching TeamsAccount#extended_email_matching}

---

##### `Fips`<sup>Optional</sup> <a name="Fips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.fips"></a>

```csharp
public TeamsAccountFips Fips { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

fips block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#fips TeamsAccount#fips}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#id TeamsAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.logging"></a>

```csharp
public TeamsAccountLogging Logging { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#logging TeamsAccount#logging}

---

##### `NonIdentityBrowserIsolationEnabled`<sup>Optional</sup> <a name="NonIdentityBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.nonIdentityBrowserIsolationEnabled"></a>

```csharp
public object NonIdentityBrowserIsolationEnabled { get; set; }
```

- *Type:* object

Enable non-identity onramp for Browser Isolation. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#non_identity_browser_isolation_enabled TeamsAccount#non_identity_browser_isolation_enabled}

---

##### `PayloadLog`<sup>Optional</sup> <a name="PayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.payloadLog"></a>

```csharp
public TeamsAccountPayloadLog PayloadLog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

payload_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#payload_log TeamsAccount#payload_log}

---

##### `ProtocolDetectionEnabled`<sup>Optional</sup> <a name="ProtocolDetectionEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.protocolDetectionEnabled"></a>

```csharp
public object ProtocolDetectionEnabled { get; set; }
```

- *Type:* object

Indicator that protocol detection is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#protocol_detection_enabled TeamsAccount#protocol_detection_enabled}

---

##### `Proxy`<sup>Optional</sup> <a name="Proxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.proxy"></a>

```csharp
public TeamsAccountProxy Proxy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

proxy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#proxy TeamsAccount#proxy}

---

##### `SshSessionLog`<sup>Optional</sup> <a name="SshSessionLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.sshSessionLog"></a>

```csharp
public TeamsAccountSshSessionLog SshSessionLog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a>

ssh_session_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#ssh_session_log TeamsAccount#ssh_session_log}

---

##### `TlsDecryptEnabled`<sup>Optional</sup> <a name="TlsDecryptEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.tlsDecryptEnabled"></a>

```csharp
public object TlsDecryptEnabled { get; set; }
```

- *Type:* object

Indicator that decryption of TLS traffic is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#tls_decrypt_enabled TeamsAccount#tls_decrypt_enabled}

---

##### `UrlBrowserIsolationEnabled`<sup>Optional</sup> <a name="UrlBrowserIsolationEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountConfig.property.urlBrowserIsolationEnabled"></a>

```csharp
public object UrlBrowserIsolationEnabled { get; set; }
```

- *Type:* object

Safely browse websites in Browser Isolation through a URL. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#url_browser_isolation_enabled TeamsAccount#url_browser_isolation_enabled}

---

### TeamsAccountCustomCertificate <a name="TeamsAccountCustomCertificate" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountCustomCertificate {
    object Enabled,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate.property.enabled">Enabled</a></code> | <code>object</code> | Whether TLS encryption should use a custom certificate. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate.property.id">Id</a></code> | <code>string</code> | ID of custom certificate. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether TLS encryption should use a custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#enabled TeamsAccount#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID of custom certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#id TeamsAccount#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TeamsAccountExtendedEmailMatching <a name="TeamsAccountExtendedEmailMatching" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountExtendedEmailMatching {
    object Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching.property.enabled">Enabled</a></code> | <code>object</code> | Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether e-mails should be matched on all variants of user emails (with + or . modifiers) in Firewall policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#enabled TeamsAccount#enabled}

---

### TeamsAccountFips <a name="TeamsAccountFips" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountFips {
    object Tls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.property.tls">Tls</a></code> | <code>object</code> | Only allow FIPS-compliant TLS configuration. |

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips.property.tls"></a>

```csharp
public object Tls { get; set; }
```

- *Type:* object

Only allow FIPS-compliant TLS configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#tls TeamsAccount#tls}

---

### TeamsAccountLogging <a name="TeamsAccountLogging" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLogging {
    object RedactPii,
    TeamsAccountLoggingSettingsByRuleType SettingsByRuleType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.redactPii">RedactPii</a></code> | <code>object</code> | Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent). |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | settings_by_rule_type block. |

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.redactPii"></a>

```csharp
public object RedactPii { get; set; }
```

- *Type:* object

Redact personally identifiable information from activity logging (PII fields are: source IP, user email, user ID, device ID, URL, referrer, user agent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#redact_pii TeamsAccount#redact_pii}

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging.property.settingsByRuleType"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleType SettingsByRuleType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

settings_by_rule_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#settings_by_rule_type TeamsAccount#settings_by_rule_type}

---

### TeamsAccountLoggingSettingsByRuleType <a name="TeamsAccountLoggingSettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleType {
    TeamsAccountLoggingSettingsByRuleTypeDns Dns,
    TeamsAccountLoggingSettingsByRuleTypeHttp Http,
    TeamsAccountLoggingSettingsByRuleTypeL4 L4
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | dns block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.http">Http</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | http block. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.l4">L4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | l4 block. |

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.dns"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeDns Dns { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#dns TeamsAccount#dns}

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.http"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeHttp Http { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#http TeamsAccount#http}

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType.property.l4"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeL4 L4 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

l4 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#l4 TeamsAccount#l4}

---

### TeamsAccountLoggingSettingsByRuleTypeDns <a name="TeamsAccountLoggingSettingsByRuleTypeDns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeDns {
    object LogAll,
    object LogBlocks
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logAll">LogAll</a></code> | <code>object</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logBlocks">LogBlocks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logAll"></a>

```csharp
public object LogAll { get; set; }
```

- *Type:* object

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns.property.logBlocks"></a>

```csharp
public object LogBlocks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountLoggingSettingsByRuleTypeHttp <a name="TeamsAccountLoggingSettingsByRuleTypeHttp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeHttp {
    object LogAll,
    object LogBlocks
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logAll">LogAll</a></code> | <code>object</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logBlocks">LogBlocks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logAll"></a>

```csharp
public object LogAll { get; set; }
```

- *Type:* object

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp.property.logBlocks"></a>

```csharp
public object LogBlocks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountLoggingSettingsByRuleTypeL4 <a name="TeamsAccountLoggingSettingsByRuleTypeL4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeL4 {
    object LogAll,
    object LogBlocks
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logAll">LogAll</a></code> | <code>object</code> | Whether to log all activity. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logBlocks">LogBlocks</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}. |

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logAll"></a>

```csharp
public object LogAll { get; set; }
```

- *Type:* object

Whether to log all activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#log_all TeamsAccount#log_all}

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4.property.logBlocks"></a>

```csharp
public object LogBlocks { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#log_blocks TeamsAccount#log_blocks}.

---

### TeamsAccountPayloadLog <a name="TeamsAccountPayloadLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountPayloadLog {
    string PublicKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog.property.publicKey">PublicKey</a></code> | <code>string</code> | Public key used to encrypt matched payloads. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Public key used to encrypt matched payloads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#public_key TeamsAccount#public_key}

---

### TeamsAccountProxy <a name="TeamsAccountProxy" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountProxy {
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
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.disableForTime">DisableForTime</a></code> | <code>double</code> | Sets the time limit in seconds that a user can use an override code to bypass WARP. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.rootCa">RootCa</a></code> | <code>object</code> | Whether root ca is enabled account wide for ZT clients. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.tcp">Tcp</a></code> | <code>object</code> | Whether gateway proxy is enabled on gateway devices for TCP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.udp">Udp</a></code> | <code>object</code> | Whether gateway proxy is enabled on gateway devices for UDP traffic. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.virtualIp">VirtualIp</a></code> | <code>object</code> | Whether virtual IP (CGNAT) is enabled account wide and will override existing local interface IP for ZT clients. |

---

##### `DisableForTime`<sup>Required</sup> <a name="DisableForTime" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.disableForTime"></a>

```csharp
public double DisableForTime { get; set; }
```

- *Type:* double

Sets the time limit in seconds that a user can use an override code to bypass WARP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#disable_for_time TeamsAccount#disable_for_time}

---

##### `RootCa`<sup>Required</sup> <a name="RootCa" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.rootCa"></a>

```csharp
public object RootCa { get; set; }
```

- *Type:* object

Whether root ca is enabled account wide for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#root_ca TeamsAccount#root_ca}

---

##### `Tcp`<sup>Required</sup> <a name="Tcp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.tcp"></a>

```csharp
public object Tcp { get; set; }
```

- *Type:* object

Whether gateway proxy is enabled on gateway devices for TCP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#tcp TeamsAccount#tcp}

---

##### `Udp`<sup>Required</sup> <a name="Udp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.udp"></a>

```csharp
public object Udp { get; set; }
```

- *Type:* object

Whether gateway proxy is enabled on gateway devices for UDP traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#udp TeamsAccount#udp}

---

##### `VirtualIp`<sup>Required</sup> <a name="VirtualIp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy.property.virtualIp"></a>

```csharp
public object VirtualIp { get; set; }
```

- *Type:* object

Whether virtual IP (CGNAT) is enabled account wide and will override existing local interface IP for ZT clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#virtual_ip TeamsAccount#virtual_ip}

---

### TeamsAccountSshSessionLog <a name="TeamsAccountSshSessionLog" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountSshSessionLog {
    string PublicKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog.property.publicKey">PublicKey</a></code> | <code>string</code> | Public key used to encrypt ssh session. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog.property.publicKey"></a>

```csharp
public string PublicKey { get; set; }
```

- *Type:* string

Public key used to encrypt ssh session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.52.0/docs/resources/teams_account#public_key TeamsAccount#public_key}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamsAccountAntivirusNotificationSettingsOutputReference <a name="TeamsAccountAntivirusNotificationSettingsOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountAntivirusNotificationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.resetSupportUrl"></a>

```csharp
private void ResetSupportUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.supportUrlInput">SupportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.supportUrl">SupportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.supportUrlInput"></a>

```csharp
public string SupportUrlInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.supportUrl"></a>

```csharp
public string SupportUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountAntivirusNotificationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a>

---


### TeamsAccountAntivirusOutputReference <a name="TeamsAccountAntivirusOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountAntivirusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.putNotificationSettings">PutNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resetNotificationSettings">ResetNotificationSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotificationSettings` <a name="PutNotificationSettings" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.putNotificationSettings"></a>

```csharp
private void PutNotificationSettings(TeamsAccountAntivirusNotificationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a>

---

##### `ResetNotificationSettings` <a name="ResetNotificationSettings" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.resetNotificationSettings"></a>

```csharp
private void ResetNotificationSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference">TeamsAccountAntivirusNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhaseInput">EnabledDownloadPhaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhaseInput">EnabledUploadPhaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosedInput">FailClosedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.notificationSettingsInput">NotificationSettingsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhase">EnabledDownloadPhase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhase">EnabledUploadPhase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosed">FailClosed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.notificationSettings"></a>

```csharp
public TeamsAccountAntivirusNotificationSettingsOutputReference NotificationSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettingsOutputReference">TeamsAccountAntivirusNotificationSettingsOutputReference</a>

---

##### `EnabledDownloadPhaseInput`<sup>Optional</sup> <a name="EnabledDownloadPhaseInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhaseInput"></a>

```csharp
public object EnabledDownloadPhaseInput { get; }
```

- *Type:* object

---

##### `EnabledUploadPhaseInput`<sup>Optional</sup> <a name="EnabledUploadPhaseInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhaseInput"></a>

```csharp
public object EnabledUploadPhaseInput { get; }
```

- *Type:* object

---

##### `FailClosedInput`<sup>Optional</sup> <a name="FailClosedInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosedInput"></a>

```csharp
public object FailClosedInput { get; }
```

- *Type:* object

---

##### `NotificationSettingsInput`<sup>Optional</sup> <a name="NotificationSettingsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.notificationSettingsInput"></a>

```csharp
public TeamsAccountAntivirusNotificationSettings NotificationSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusNotificationSettings">TeamsAccountAntivirusNotificationSettings</a>

---

##### `EnabledDownloadPhase`<sup>Required</sup> <a name="EnabledDownloadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledDownloadPhase"></a>

```csharp
public object EnabledDownloadPhase { get; }
```

- *Type:* object

---

##### `EnabledUploadPhase`<sup>Required</sup> <a name="EnabledUploadPhase" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.enabledUploadPhase"></a>

```csharp
public object EnabledUploadPhase { get; }
```

- *Type:* object

---

##### `FailClosed`<sup>Required</sup> <a name="FailClosed" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.failClosed"></a>

```csharp
public object FailClosed { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirusOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountAntivirus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountAntivirus">TeamsAccountAntivirus</a>

---


### TeamsAccountBlockPageOutputReference <a name="TeamsAccountBlockPageOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountBlockPageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetFooterText">ResetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetHeaderText">ResetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetLogoPath">ResetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoAddress">ResetMailtoAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoSubject">ResetMailtoSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetBackgroundColor"></a>

```csharp
private void ResetBackgroundColor()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFooterText` <a name="ResetFooterText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetFooterText"></a>

```csharp
private void ResetFooterText()
```

##### `ResetHeaderText` <a name="ResetHeaderText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetHeaderText"></a>

```csharp
private void ResetHeaderText()
```

##### `ResetLogoPath` <a name="ResetLogoPath" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetLogoPath"></a>

```csharp
private void ResetLogoPath()
```

##### `ResetMailtoAddress` <a name="ResetMailtoAddress" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoAddress"></a>

```csharp
private void ResetMailtoAddress()
```

##### `ResetMailtoSubject` <a name="ResetMailtoSubject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetMailtoSubject"></a>

```csharp
private void ResetMailtoSubject()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerTextInput">FooterTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerTextInput">HeaderTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPathInput">LogoPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddressInput">MailtoAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubjectInput">MailtoSubjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerText">FooterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerText">HeaderText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPath">LogoPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddress">MailtoAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubject">MailtoSubject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColorInput"></a>

```csharp
public string BackgroundColorInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FooterTextInput`<sup>Optional</sup> <a name="FooterTextInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerTextInput"></a>

```csharp
public string FooterTextInput { get; }
```

- *Type:* string

---

##### `HeaderTextInput`<sup>Optional</sup> <a name="HeaderTextInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerTextInput"></a>

```csharp
public string HeaderTextInput { get; }
```

- *Type:* string

---

##### `LogoPathInput`<sup>Optional</sup> <a name="LogoPathInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPathInput"></a>

```csharp
public string LogoPathInput { get; }
```

- *Type:* string

---

##### `MailtoAddressInput`<sup>Optional</sup> <a name="MailtoAddressInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddressInput"></a>

```csharp
public string MailtoAddressInput { get; }
```

- *Type:* string

---

##### `MailtoSubjectInput`<sup>Optional</sup> <a name="MailtoSubjectInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubjectInput"></a>

```csharp
public string MailtoSubjectInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.footerText"></a>

```csharp
public string FooterText { get; }
```

- *Type:* string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.headerText"></a>

```csharp
public string HeaderText { get; }
```

- *Type:* string

---

##### `LogoPath`<sup>Required</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.logoPath"></a>

```csharp
public string LogoPath { get; }
```

- *Type:* string

---

##### `MailtoAddress`<sup>Required</sup> <a name="MailtoAddress" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoAddress"></a>

```csharp
public string MailtoAddress { get; }
```

- *Type:* string

---

##### `MailtoSubject`<sup>Required</sup> <a name="MailtoSubject" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.mailtoSubject"></a>

```csharp
public string MailtoSubject { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPageOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountBlockPage InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBlockPage">TeamsAccountBlockPage</a>

---


### TeamsAccountBodyScanningOutputReference <a name="TeamsAccountBodyScanningOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountBodyScanningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.inspectionModeInput">InspectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.inspectionMode">InspectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InspectionModeInput`<sup>Optional</sup> <a name="InspectionModeInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.inspectionModeInput"></a>

```csharp
public string InspectionModeInput { get; }
```

- *Type:* string

---

##### `InspectionMode`<sup>Required</sup> <a name="InspectionMode" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.inspectionMode"></a>

```csharp
public string InspectionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanningOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountBodyScanning InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountBodyScanning">TeamsAccountBodyScanning</a>

---


### TeamsAccountCertificateOutputReference <a name="TeamsAccountCertificateOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificateOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCertificate">TeamsAccountCertificate</a>

---


### TeamsAccountCustomCertificateOutputReference <a name="TeamsAccountCustomCertificateOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountCustomCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificateOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountCustomCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountCustomCertificate">TeamsAccountCustomCertificate</a>

---


### TeamsAccountExtendedEmailMatchingOutputReference <a name="TeamsAccountExtendedEmailMatchingOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountExtendedEmailMatchingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatchingOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountExtendedEmailMatching InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountExtendedEmailMatching">TeamsAccountExtendedEmailMatching</a>

---


### TeamsAccountFipsOutputReference <a name="TeamsAccountFipsOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountFipsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTls` <a name="ResetTls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tlsInput">TlsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tls">Tls</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tlsInput"></a>

```csharp
public object TlsInput { get; }
```

- *Type:* object

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.tls"></a>

```csharp
public object Tls { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFipsOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountFips InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountFips">TeamsAccountFips</a>

---


### TeamsAccountLoggingOutputReference <a name="TeamsAccountLoggingOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType">PutSettingsByRuleType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettingsByRuleType` <a name="PutSettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType"></a>

```csharp
private void PutSettingsByRuleType(TeamsAccountLoggingSettingsByRuleType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.putSettingsByRuleType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleType">SettingsByRuleType</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference">TeamsAccountLoggingSettingsByRuleTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPiiInput">RedactPiiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleTypeInput">SettingsByRuleTypeInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPii">RedactPii</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SettingsByRuleType`<sup>Required</sup> <a name="SettingsByRuleType" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleType"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeOutputReference SettingsByRuleType { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference">TeamsAccountLoggingSettingsByRuleTypeOutputReference</a>

---

##### `RedactPiiInput`<sup>Optional</sup> <a name="RedactPiiInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPiiInput"></a>

```csharp
public object RedactPiiInput { get; }
```

- *Type:* object

---

##### `SettingsByRuleTypeInput`<sup>Optional</sup> <a name="SettingsByRuleTypeInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.settingsByRuleTypeInput"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleType SettingsByRuleTypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---

##### `RedactPii`<sup>Required</sup> <a name="RedactPii" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.redactPii"></a>

```csharp
public object RedactPii { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLogging">TeamsAccountLogging</a>

---


### TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput">LogAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAll">LogAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks">LogBlocks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAllInput"></a>

```csharp
public object LogAllInput { get; }
```

- *Type:* object

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocksInput"></a>

```csharp
public object LogBlocksInput { get; }
```

- *Type:* object

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logAll"></a>

```csharp
public object LogAll { get; }
```

- *Type:* object

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.logBlocks"></a>

```csharp
public object LogBlocks { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeDns InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---


### TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput">LogAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAll">LogAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks">LogBlocks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAllInput"></a>

```csharp
public object LogAllInput { get; }
```

- *Type:* object

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocksInput"></a>

```csharp
public object LogBlocksInput { get; }
```

- *Type:* object

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logAll"></a>

```csharp
public object LogAll { get; }
```

- *Type:* object

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.logBlocks"></a>

```csharp
public object LogBlocks { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeHttp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---


### TeamsAccountLoggingSettingsByRuleTypeL4OutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeL4OutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeL4OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput">LogAllInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput">LogBlocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAll">LogAll</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks">LogBlocks</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogAllInput`<sup>Optional</sup> <a name="LogAllInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAllInput"></a>

```csharp
public object LogAllInput { get; }
```

- *Type:* object

---

##### `LogBlocksInput`<sup>Optional</sup> <a name="LogBlocksInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocksInput"></a>

```csharp
public object LogBlocksInput { get; }
```

- *Type:* object

---

##### `LogAll`<sup>Required</sup> <a name="LogAll" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logAll"></a>

```csharp
public object LogAll { get; }
```

- *Type:* object

---

##### `LogBlocks`<sup>Required</sup> <a name="LogBlocks" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.logBlocks"></a>

```csharp
public object LogBlocks { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference.property.internalValue"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeL4 InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---


### TeamsAccountLoggingSettingsByRuleTypeOutputReference <a name="TeamsAccountLoggingSettingsByRuleTypeOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountLoggingSettingsByRuleTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns">PutDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4">PutL4</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDns` <a name="PutDns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns"></a>

```csharp
private void PutDns(TeamsAccountLoggingSettingsByRuleTypeDns Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---

##### `PutHttp` <a name="PutHttp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp"></a>

```csharp
private void PutHttp(TeamsAccountLoggingSettingsByRuleTypeHttp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---

##### `PutL4` <a name="PutL4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4"></a>

```csharp
private void PutL4(TeamsAccountLoggingSettingsByRuleTypeL4 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.putL4.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dns">Dns</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference">TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.http">Http</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference">TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4">L4</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference">TeamsAccountLoggingSettingsByRuleTypeL4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dnsInput">DnsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.httpInput">HttpInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4Input">L4Input</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dns"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference Dns { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference">TeamsAccountLoggingSettingsByRuleTypeDnsOutputReference</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.http"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference Http { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference">TeamsAccountLoggingSettingsByRuleTypeHttpOutputReference</a>

---

##### `L4`<sup>Required</sup> <a name="L4" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeL4OutputReference L4 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4OutputReference">TeamsAccountLoggingSettingsByRuleTypeL4OutputReference</a>

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.dnsInput"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeDns DnsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeDns">TeamsAccountLoggingSettingsByRuleTypeDns</a>

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.httpInput"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeHttp HttpInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeHttp">TeamsAccountLoggingSettingsByRuleTypeHttp</a>

---

##### `L4Input`<sup>Optional</sup> <a name="L4Input" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.l4Input"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleTypeL4 L4Input { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeL4">TeamsAccountLoggingSettingsByRuleTypeL4</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleTypeOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountLoggingSettingsByRuleType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountLoggingSettingsByRuleType">TeamsAccountLoggingSettingsByRuleType</a>

---


### TeamsAccountPayloadLogOutputReference <a name="TeamsAccountPayloadLogOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountPayloadLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLogOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountPayloadLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountPayloadLog">TeamsAccountPayloadLog</a>

---


### TeamsAccountProxyOutputReference <a name="TeamsAccountProxyOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountProxyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.disableForTimeInput">DisableForTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCaInput">RootCaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcpInput">TcpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udpInput">UdpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.virtualIpInput">VirtualIpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.disableForTime">DisableForTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCa">RootCa</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcp">Tcp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udp">Udp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.virtualIp">VirtualIp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableForTimeInput`<sup>Optional</sup> <a name="DisableForTimeInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.disableForTimeInput"></a>

```csharp
public double DisableForTimeInput { get; }
```

- *Type:* double

---

##### `RootCaInput`<sup>Optional</sup> <a name="RootCaInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCaInput"></a>

```csharp
public object RootCaInput { get; }
```

- *Type:* object

---

##### `TcpInput`<sup>Optional</sup> <a name="TcpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcpInput"></a>

```csharp
public object TcpInput { get; }
```

- *Type:* object

---

##### `UdpInput`<sup>Optional</sup> <a name="UdpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udpInput"></a>

```csharp
public object UdpInput { get; }
```

- *Type:* object

---

##### `VirtualIpInput`<sup>Optional</sup> <a name="VirtualIpInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.virtualIpInput"></a>

```csharp
public object VirtualIpInput { get; }
```

- *Type:* object

---

##### `DisableForTime`<sup>Required</sup> <a name="DisableForTime" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.disableForTime"></a>

```csharp
public double DisableForTime { get; }
```

- *Type:* double

---

##### `RootCa`<sup>Required</sup> <a name="RootCa" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.rootCa"></a>

```csharp
public object RootCa { get; }
```

- *Type:* object

---

##### `Tcp`<sup>Required</sup> <a name="Tcp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.tcp"></a>

```csharp
public object Tcp { get; }
```

- *Type:* object

---

##### `Udp`<sup>Required</sup> <a name="Udp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.udp"></a>

```csharp
public object Udp { get; }
```

- *Type:* object

---

##### `VirtualIp`<sup>Required</sup> <a name="VirtualIp" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.virtualIp"></a>

```csharp
public object VirtualIp { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxyOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountProxy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountProxy">TeamsAccountProxy</a>

---


### TeamsAccountSshSessionLogOutputReference <a name="TeamsAccountSshSessionLogOutputReference" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new TeamsAccountSshSessionLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.publicKeyInput"></a>

```csharp
public string PublicKeyInput { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLogOutputReference.property.internalValue"></a>

```csharp
public TeamsAccountSshSessionLog InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.teamsAccount.TeamsAccountSshSessionLog">TeamsAccountSshSessionLog</a>

---



