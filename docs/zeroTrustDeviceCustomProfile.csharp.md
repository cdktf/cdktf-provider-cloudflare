# `zeroTrustDeviceCustomProfile` Submodule <a name="`zeroTrustDeviceCustomProfile` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceCustomProfile <a name="ZeroTrustDeviceCustomProfile" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile cloudflare_zero_trust_device_custom_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfile(Construct Scope, string Id, ZeroTrustDeviceCustomProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig">ZeroTrustDeviceCustomProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig">ZeroTrustDeviceCustomProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putExclude">PutExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putInclude">PutInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putServiceModeV2">PutServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAllowedToLeave">ResetAllowedToLeave</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAllowModeSwitch">ResetAllowModeSwitch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAllowUpdates">ResetAllowUpdates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAutoConnect">ResetAutoConnect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetCaptivePortal">ResetCaptivePortal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetDisableAutoFallback">ResetDisableAutoFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetExcludeOfficeIps">ResetExcludeOfficeIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetInclude">ResetInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetLanAllowMinutes">ResetLanAllowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetLanAllowSubnetSize">ResetLanAllowSubnetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetRegisterInterfaceIpWithDns">ResetRegisterInterfaceIpWithDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetSccmVpnBoundarySupport">ResetSccmVpnBoundarySupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetServiceModeV2">ResetServiceModeV2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetSupportUrl">ResetSupportUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetSwitchLocked">ResetSwitchLocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetTunnelProtocol">ResetTunnelProtocol</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExclude` <a name="PutExclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putExclude"></a>

```csharp
private void PutExclude(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putExclude.parameter.value"></a>

- *Type:* object

---

##### `PutInclude` <a name="PutInclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putInclude"></a>

```csharp
private void PutInclude(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putInclude.parameter.value"></a>

- *Type:* object

---

##### `PutServiceModeV2` <a name="PutServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putServiceModeV2"></a>

```csharp
private void PutServiceModeV2(ZeroTrustDeviceCustomProfileServiceModeV2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.putServiceModeV2.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2">ZeroTrustDeviceCustomProfileServiceModeV2</a>

---

##### `ResetAllowedToLeave` <a name="ResetAllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAllowedToLeave"></a>

```csharp
private void ResetAllowedToLeave()
```

##### `ResetAllowModeSwitch` <a name="ResetAllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAllowModeSwitch"></a>

```csharp
private void ResetAllowModeSwitch()
```

##### `ResetAllowUpdates` <a name="ResetAllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAllowUpdates"></a>

```csharp
private void ResetAllowUpdates()
```

##### `ResetAutoConnect` <a name="ResetAutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetAutoConnect"></a>

```csharp
private void ResetAutoConnect()
```

##### `ResetCaptivePortal` <a name="ResetCaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetCaptivePortal"></a>

```csharp
private void ResetCaptivePortal()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisableAutoFallback` <a name="ResetDisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetDisableAutoFallback"></a>

```csharp
private void ResetDisableAutoFallback()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetExclude"></a>

```csharp
private void ResetExclude()
```

##### `ResetExcludeOfficeIps` <a name="ResetExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetExcludeOfficeIps"></a>

```csharp
private void ResetExcludeOfficeIps()
```

##### `ResetInclude` <a name="ResetInclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetInclude"></a>

```csharp
private void ResetInclude()
```

##### `ResetLanAllowMinutes` <a name="ResetLanAllowMinutes" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetLanAllowMinutes"></a>

```csharp
private void ResetLanAllowMinutes()
```

##### `ResetLanAllowSubnetSize` <a name="ResetLanAllowSubnetSize" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetLanAllowSubnetSize"></a>

```csharp
private void ResetLanAllowSubnetSize()
```

##### `ResetRegisterInterfaceIpWithDns` <a name="ResetRegisterInterfaceIpWithDns" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetRegisterInterfaceIpWithDns"></a>

```csharp
private void ResetRegisterInterfaceIpWithDns()
```

##### `ResetSccmVpnBoundarySupport` <a name="ResetSccmVpnBoundarySupport" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetSccmVpnBoundarySupport"></a>

```csharp
private void ResetSccmVpnBoundarySupport()
```

##### `ResetServiceModeV2` <a name="ResetServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetServiceModeV2"></a>

```csharp
private void ResetServiceModeV2()
```

##### `ResetSupportUrl` <a name="ResetSupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetSupportUrl"></a>

```csharp
private void ResetSupportUrl()
```

##### `ResetSwitchLocked` <a name="ResetSwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetSwitchLocked"></a>

```csharp
private void ResetSwitchLocked()
```

##### `ResetTunnelProtocol` <a name="ResetTunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.resetTunnelProtocol"></a>

```csharp
private void ResetTunnelProtocol()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDeviceCustomProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDeviceCustomProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDeviceCustomProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDeviceCustomProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDeviceCustomProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustDeviceCustomProfile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDeviceCustomProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDeviceCustomProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceCustomProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.default">Default</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.exclude">Exclude</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList">ZeroTrustDeviceCustomProfileExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.fallbackDomains">FallbackDomains</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList">ZeroTrustDeviceCustomProfileFallbackDomainsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.gatewayUniqueId">GatewayUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.include">Include</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList">ZeroTrustDeviceCustomProfileIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.serviceModeV2">ServiceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference">ZeroTrustDeviceCustomProfileServiceModeV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.targetTests">TargetTests</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList">ZeroTrustDeviceCustomProfileTargetTestsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowedToLeaveInput">AllowedToLeaveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowModeSwitchInput">AllowModeSwitchInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowUpdatesInput">AllowUpdatesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.autoConnectInput">AutoConnectInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.captivePortalInput">CaptivePortalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.disableAutoFallbackInput">DisableAutoFallbackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.excludeInput">ExcludeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.excludeOfficeIpsInput">ExcludeOfficeIpsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.includeInput">IncludeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowMinutesInput">LanAllowMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowSubnetSizeInput">LanAllowSubnetSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.matchInput">MatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.precedenceInput">PrecedenceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.registerInterfaceIpWithDnsInput">RegisterInterfaceIpWithDnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.sccmVpnBoundarySupportInput">SccmVpnBoundarySupportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.serviceModeV2Input">ServiceModeV2Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.supportUrlInput">SupportUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.switchLockedInput">SwitchLockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.tunnelProtocolInput">TunnelProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowedToLeave">AllowedToLeave</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowModeSwitch">AllowModeSwitch</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowUpdates">AllowUpdates</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.autoConnect">AutoConnect</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.captivePortal">CaptivePortal</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.disableAutoFallback">DisableAutoFallback</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.excludeOfficeIps">ExcludeOfficeIps</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowMinutes">LanAllowMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowSubnetSize">LanAllowSubnetSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.match">Match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.precedence">Precedence</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.registerInterfaceIpWithDns">RegisterInterfaceIpWithDns</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.sccmVpnBoundarySupport">SccmVpnBoundarySupport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.supportUrl">SupportUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.switchLocked">SwitchLocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.tunnelProtocol">TunnelProtocol</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.default"></a>

```csharp
public IResolvable Default { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.exclude"></a>

```csharp
public ZeroTrustDeviceCustomProfileExcludeList Exclude { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList">ZeroTrustDeviceCustomProfileExcludeList</a>

---

##### `FallbackDomains`<sup>Required</sup> <a name="FallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.fallbackDomains"></a>

```csharp
public ZeroTrustDeviceCustomProfileFallbackDomainsList FallbackDomains { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList">ZeroTrustDeviceCustomProfileFallbackDomainsList</a>

---

##### `GatewayUniqueId`<sup>Required</sup> <a name="GatewayUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.gatewayUniqueId"></a>

```csharp
public string GatewayUniqueId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.include"></a>

```csharp
public ZeroTrustDeviceCustomProfileIncludeList Include { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList">ZeroTrustDeviceCustomProfileIncludeList</a>

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `ServiceModeV2`<sup>Required</sup> <a name="ServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.serviceModeV2"></a>

```csharp
public ZeroTrustDeviceCustomProfileServiceModeV2OutputReference ServiceModeV2 { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference">ZeroTrustDeviceCustomProfileServiceModeV2OutputReference</a>

---

##### `TargetTests`<sup>Required</sup> <a name="TargetTests" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.targetTests"></a>

```csharp
public ZeroTrustDeviceCustomProfileTargetTestsList TargetTests { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList">ZeroTrustDeviceCustomProfileTargetTestsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AllowedToLeaveInput`<sup>Optional</sup> <a name="AllowedToLeaveInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowedToLeaveInput"></a>

```csharp
public object AllowedToLeaveInput { get; }
```

- *Type:* object

---

##### `AllowModeSwitchInput`<sup>Optional</sup> <a name="AllowModeSwitchInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowModeSwitchInput"></a>

```csharp
public object AllowModeSwitchInput { get; }
```

- *Type:* object

---

##### `AllowUpdatesInput`<sup>Optional</sup> <a name="AllowUpdatesInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowUpdatesInput"></a>

```csharp
public object AllowUpdatesInput { get; }
```

- *Type:* object

---

##### `AutoConnectInput`<sup>Optional</sup> <a name="AutoConnectInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.autoConnectInput"></a>

```csharp
public double AutoConnectInput { get; }
```

- *Type:* double

---

##### `CaptivePortalInput`<sup>Optional</sup> <a name="CaptivePortalInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.captivePortalInput"></a>

```csharp
public double CaptivePortalInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisableAutoFallbackInput`<sup>Optional</sup> <a name="DisableAutoFallbackInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.disableAutoFallbackInput"></a>

```csharp
public object DisableAutoFallbackInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.excludeInput"></a>

```csharp
public object ExcludeInput { get; }
```

- *Type:* object

---

##### `ExcludeOfficeIpsInput`<sup>Optional</sup> <a name="ExcludeOfficeIpsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.excludeOfficeIpsInput"></a>

```csharp
public object ExcludeOfficeIpsInput { get; }
```

- *Type:* object

---

##### `IncludeInput`<sup>Optional</sup> <a name="IncludeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.includeInput"></a>

```csharp
public object IncludeInput { get; }
```

- *Type:* object

---

##### `LanAllowMinutesInput`<sup>Optional</sup> <a name="LanAllowMinutesInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowMinutesInput"></a>

```csharp
public double LanAllowMinutesInput { get; }
```

- *Type:* double

---

##### `LanAllowSubnetSizeInput`<sup>Optional</sup> <a name="LanAllowSubnetSizeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowSubnetSizeInput"></a>

```csharp
public double LanAllowSubnetSizeInput { get; }
```

- *Type:* double

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.matchInput"></a>

```csharp
public string MatchInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrecedenceInput`<sup>Optional</sup> <a name="PrecedenceInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.precedenceInput"></a>

```csharp
public double PrecedenceInput { get; }
```

- *Type:* double

---

##### `RegisterInterfaceIpWithDnsInput`<sup>Optional</sup> <a name="RegisterInterfaceIpWithDnsInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.registerInterfaceIpWithDnsInput"></a>

```csharp
public object RegisterInterfaceIpWithDnsInput { get; }
```

- *Type:* object

---

##### `SccmVpnBoundarySupportInput`<sup>Optional</sup> <a name="SccmVpnBoundarySupportInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.sccmVpnBoundarySupportInput"></a>

```csharp
public object SccmVpnBoundarySupportInput { get; }
```

- *Type:* object

---

##### `ServiceModeV2Input`<sup>Optional</sup> <a name="ServiceModeV2Input" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.serviceModeV2Input"></a>

```csharp
public object ServiceModeV2Input { get; }
```

- *Type:* object

---

##### `SupportUrlInput`<sup>Optional</sup> <a name="SupportUrlInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.supportUrlInput"></a>

```csharp
public string SupportUrlInput { get; }
```

- *Type:* string

---

##### `SwitchLockedInput`<sup>Optional</sup> <a name="SwitchLockedInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.switchLockedInput"></a>

```csharp
public object SwitchLockedInput { get; }
```

- *Type:* object

---

##### `TunnelProtocolInput`<sup>Optional</sup> <a name="TunnelProtocolInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.tunnelProtocolInput"></a>

```csharp
public string TunnelProtocolInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AllowedToLeave`<sup>Required</sup> <a name="AllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowedToLeave"></a>

```csharp
public object AllowedToLeave { get; }
```

- *Type:* object

---

##### `AllowModeSwitch`<sup>Required</sup> <a name="AllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowModeSwitch"></a>

```csharp
public object AllowModeSwitch { get; }
```

- *Type:* object

---

##### `AllowUpdates`<sup>Required</sup> <a name="AllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.allowUpdates"></a>

```csharp
public object AllowUpdates { get; }
```

- *Type:* object

---

##### `AutoConnect`<sup>Required</sup> <a name="AutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.autoConnect"></a>

```csharp
public double AutoConnect { get; }
```

- *Type:* double

---

##### `CaptivePortal`<sup>Required</sup> <a name="CaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.captivePortal"></a>

```csharp
public double CaptivePortal { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisableAutoFallback`<sup>Required</sup> <a name="DisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.disableAutoFallback"></a>

```csharp
public object DisableAutoFallback { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `ExcludeOfficeIps`<sup>Required</sup> <a name="ExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.excludeOfficeIps"></a>

```csharp
public object ExcludeOfficeIps { get; }
```

- *Type:* object

---

##### `LanAllowMinutes`<sup>Required</sup> <a name="LanAllowMinutes" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowMinutes"></a>

```csharp
public double LanAllowMinutes { get; }
```

- *Type:* double

---

##### `LanAllowSubnetSize`<sup>Required</sup> <a name="LanAllowSubnetSize" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.lanAllowSubnetSize"></a>

```csharp
public double LanAllowSubnetSize { get; }
```

- *Type:* double

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.match"></a>

```csharp
public string Match { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.precedence"></a>

```csharp
public double Precedence { get; }
```

- *Type:* double

---

##### `RegisterInterfaceIpWithDns`<sup>Required</sup> <a name="RegisterInterfaceIpWithDns" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.registerInterfaceIpWithDns"></a>

```csharp
public object RegisterInterfaceIpWithDns { get; }
```

- *Type:* object

---

##### `SccmVpnBoundarySupport`<sup>Required</sup> <a name="SccmVpnBoundarySupport" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.sccmVpnBoundarySupport"></a>

```csharp
public object SccmVpnBoundarySupport { get; }
```

- *Type:* object

---

##### `SupportUrl`<sup>Required</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.supportUrl"></a>

```csharp
public string SupportUrl { get; }
```

- *Type:* string

---

##### `SwitchLocked`<sup>Required</sup> <a name="SwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.switchLocked"></a>

```csharp
public object SwitchLocked { get; }
```

- *Type:* object

---

##### `TunnelProtocol`<sup>Required</sup> <a name="TunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.tunnelProtocol"></a>

```csharp
public string TunnelProtocol { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceCustomProfileConfig <a name="ZeroTrustDeviceCustomProfileConfig" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId,
    string Match,
    string Name,
    double Precedence,
    object AllowedToLeave = null,
    object AllowModeSwitch = null,
    object AllowUpdates = null,
    double AutoConnect = null,
    double CaptivePortal = null,
    string Description = null,
    object DisableAutoFallback = null,
    object Enabled = null,
    object Exclude = null,
    object ExcludeOfficeIps = null,
    object Include = null,
    double LanAllowMinutes = null,
    double LanAllowSubnetSize = null,
    object RegisterInterfaceIpWithDns = null,
    object SccmVpnBoundarySupport = null,
    ZeroTrustDeviceCustomProfileServiceModeV2 ServiceModeV2 = null,
    string SupportUrl = null,
    object SwitchLocked = null,
    string TunnelProtocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#account_id ZeroTrustDeviceCustomProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.match">Match</a></code> | <code>string</code> | The wirefilter expression to match devices. Available values: "identity.email", "identity.groups.id", "identity.groups.name", "identity.groups.email", "identity.service_token_uuid", "identity.saml_attributes", "network", "os.name", "os.version". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.name">Name</a></code> | <code>string</code> | The name of the device settings profile. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.precedence">Precedence</a></code> | <code>double</code> | The precedence of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.allowedToLeave">AllowedToLeave</a></code> | <code>object</code> | Whether to allow devices to leave the organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.allowModeSwitch">AllowModeSwitch</a></code> | <code>object</code> | Whether to allow the user to switch WARP between modes. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.allowUpdates">AllowUpdates</a></code> | <code>object</code> | Whether to receive update notifications when a new version of the client is available. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.autoConnect">AutoConnect</a></code> | <code>double</code> | The amount of time in seconds to reconnect after having been disabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.captivePortal">CaptivePortal</a></code> | <code>double</code> | Turn on the captive portal after the specified amount of time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.description">Description</a></code> | <code>string</code> | A description of the policy. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.disableAutoFallback">DisableAutoFallback</a></code> | <code>object</code> | If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether the policy will be applied to matching devices. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.exclude">Exclude</a></code> | <code>object</code> | List of routes excluded in the WARP client's tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.excludeOfficeIps">ExcludeOfficeIps</a></code> | <code>object</code> | Whether to add Microsoft IPs to Split Tunnel exclusions. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.include">Include</a></code> | <code>object</code> | List of routes included in the WARP client's tunnel. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.lanAllowMinutes">LanAllowMinutes</a></code> | <code>double</code> | The amount of time in minutes a user is allowed access to their LAN. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.lanAllowSubnetSize">LanAllowSubnetSize</a></code> | <code>double</code> | The size of the subnet for the local access network. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.registerInterfaceIpWithDns">RegisterInterfaceIpWithDns</a></code> | <code>object</code> | Determines if the operating system will register WARP's local interface IP with your on-premises DNS server. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.sccmVpnBoundarySupport">SccmVpnBoundarySupport</a></code> | <code>object</code> | Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. (Windows only). |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.serviceModeV2">ServiceModeV2</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2">ZeroTrustDeviceCustomProfileServiceModeV2</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#service_mode_v2 ZeroTrustDeviceCustomProfile#service_mode_v2}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.supportUrl">SupportUrl</a></code> | <code>string</code> | The URL to launch when the Send Feedback button is clicked. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.switchLocked">SwitchLocked</a></code> | <code>object</code> | Whether to allow the user to turn off the WARP switch and disconnect the client. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.tunnelProtocol">TunnelProtocol</a></code> | <code>string</code> | Determines which tunnel protocol to use. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#account_id ZeroTrustDeviceCustomProfile#account_id}.

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.match"></a>

```csharp
public string Match { get; set; }
```

- *Type:* string

The wirefilter expression to match devices. Available values: "identity.email", "identity.groups.id", "identity.groups.name", "identity.groups.email", "identity.service_token_uuid", "identity.saml_attributes", "network", "os.name", "os.version".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#match ZeroTrustDeviceCustomProfile#match}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the device settings profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#name ZeroTrustDeviceCustomProfile#name}

---

##### `Precedence`<sup>Required</sup> <a name="Precedence" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.precedence"></a>

```csharp
public double Precedence { get; set; }
```

- *Type:* double

The precedence of the policy.

Lower values indicate higher precedence. Policies will be evaluated in ascending order of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#precedence ZeroTrustDeviceCustomProfile#precedence}

---

##### `AllowedToLeave`<sup>Optional</sup> <a name="AllowedToLeave" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.allowedToLeave"></a>

```csharp
public object AllowedToLeave { get; set; }
```

- *Type:* object

Whether to allow devices to leave the organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#allowed_to_leave ZeroTrustDeviceCustomProfile#allowed_to_leave}

---

##### `AllowModeSwitch`<sup>Optional</sup> <a name="AllowModeSwitch" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.allowModeSwitch"></a>

```csharp
public object AllowModeSwitch { get; set; }
```

- *Type:* object

Whether to allow the user to switch WARP between modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#allow_mode_switch ZeroTrustDeviceCustomProfile#allow_mode_switch}

---

##### `AllowUpdates`<sup>Optional</sup> <a name="AllowUpdates" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.allowUpdates"></a>

```csharp
public object AllowUpdates { get; set; }
```

- *Type:* object

Whether to receive update notifications when a new version of the client is available.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#allow_updates ZeroTrustDeviceCustomProfile#allow_updates}

---

##### `AutoConnect`<sup>Optional</sup> <a name="AutoConnect" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.autoConnect"></a>

```csharp
public double AutoConnect { get; set; }
```

- *Type:* double

The amount of time in seconds to reconnect after having been disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#auto_connect ZeroTrustDeviceCustomProfile#auto_connect}

---

##### `CaptivePortal`<sup>Optional</sup> <a name="CaptivePortal" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.captivePortal"></a>

```csharp
public double CaptivePortal { get; set; }
```

- *Type:* double

Turn on the captive portal after the specified amount of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#captive_portal ZeroTrustDeviceCustomProfile#captive_portal}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#description ZeroTrustDeviceCustomProfile#description}

---

##### `DisableAutoFallback`<sup>Optional</sup> <a name="DisableAutoFallback" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.disableAutoFallback"></a>

```csharp
public object DisableAutoFallback { get; set; }
```

- *Type:* object

If the `dns_server` field of a fallback domain is not present, the client will fall back to a best guess of the default/system DNS resolvers unless this policy option is set to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#disable_auto_fallback ZeroTrustDeviceCustomProfile#disable_auto_fallback}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether the policy will be applied to matching devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#enabled ZeroTrustDeviceCustomProfile#enabled}

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.exclude"></a>

```csharp
public object Exclude { get; set; }
```

- *Type:* object

List of routes excluded in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#exclude ZeroTrustDeviceCustomProfile#exclude}

---

##### `ExcludeOfficeIps`<sup>Optional</sup> <a name="ExcludeOfficeIps" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.excludeOfficeIps"></a>

```csharp
public object ExcludeOfficeIps { get; set; }
```

- *Type:* object

Whether to add Microsoft IPs to Split Tunnel exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#exclude_office_ips ZeroTrustDeviceCustomProfile#exclude_office_ips}

---

##### `Include`<sup>Optional</sup> <a name="Include" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.include"></a>

```csharp
public object Include { get; set; }
```

- *Type:* object

List of routes included in the WARP client's tunnel.

Both 'exclude' and 'include' cannot be set in the same request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#include ZeroTrustDeviceCustomProfile#include}

---

##### `LanAllowMinutes`<sup>Optional</sup> <a name="LanAllowMinutes" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.lanAllowMinutes"></a>

```csharp
public double LanAllowMinutes { get; set; }
```

- *Type:* double

The amount of time in minutes a user is allowed access to their LAN.

A value of 0 will allow LAN access until the next WARP reconnection, such as a reboot or a laptop waking from sleep. Note that this field is omitted from the response if null or unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#lan_allow_minutes ZeroTrustDeviceCustomProfile#lan_allow_minutes}

---

##### `LanAllowSubnetSize`<sup>Optional</sup> <a name="LanAllowSubnetSize" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.lanAllowSubnetSize"></a>

```csharp
public double LanAllowSubnetSize { get; set; }
```

- *Type:* double

The size of the subnet for the local access network.

Note that this field is omitted from the response if null or unset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#lan_allow_subnet_size ZeroTrustDeviceCustomProfile#lan_allow_subnet_size}

---

##### `RegisterInterfaceIpWithDns`<sup>Optional</sup> <a name="RegisterInterfaceIpWithDns" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.registerInterfaceIpWithDns"></a>

```csharp
public object RegisterInterfaceIpWithDns { get; set; }
```

- *Type:* object

Determines if the operating system will register WARP's local interface IP with your on-premises DNS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#register_interface_ip_with_dns ZeroTrustDeviceCustomProfile#register_interface_ip_with_dns}

---

##### `SccmVpnBoundarySupport`<sup>Optional</sup> <a name="SccmVpnBoundarySupport" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.sccmVpnBoundarySupport"></a>

```csharp
public object SccmVpnBoundarySupport { get; set; }
```

- *Type:* object

Determines whether the WARP client indicates to SCCM that it is inside a VPN boundary. (Windows only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#sccm_vpn_boundary_support ZeroTrustDeviceCustomProfile#sccm_vpn_boundary_support}

---

##### `ServiceModeV2`<sup>Optional</sup> <a name="ServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.serviceModeV2"></a>

```csharp
public ZeroTrustDeviceCustomProfileServiceModeV2 ServiceModeV2 { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2">ZeroTrustDeviceCustomProfileServiceModeV2</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#service_mode_v2 ZeroTrustDeviceCustomProfile#service_mode_v2}.

---

##### `SupportUrl`<sup>Optional</sup> <a name="SupportUrl" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.supportUrl"></a>

```csharp
public string SupportUrl { get; set; }
```

- *Type:* string

The URL to launch when the Send Feedback button is clicked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#support_url ZeroTrustDeviceCustomProfile#support_url}

---

##### `SwitchLocked`<sup>Optional</sup> <a name="SwitchLocked" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.switchLocked"></a>

```csharp
public object SwitchLocked { get; set; }
```

- *Type:* object

Whether to allow the user to turn off the WARP switch and disconnect the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#switch_locked ZeroTrustDeviceCustomProfile#switch_locked}

---

##### `TunnelProtocol`<sup>Optional</sup> <a name="TunnelProtocol" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileConfig.property.tunnelProtocol"></a>

```csharp
public string TunnelProtocol { get; set; }
```

- *Type:* string

Determines which tunnel protocol to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#tunnel_protocol ZeroTrustDeviceCustomProfile#tunnel_protocol}

---

### ZeroTrustDeviceCustomProfileExclude <a name="ZeroTrustDeviceCustomProfileExclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileExclude {
    string Address = null,
    string Description = null,
    string Host = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.property.address">Address</a></code> | <code>string</code> | The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.property.description">Description</a></code> | <code>string</code> | A description of the Split Tunnel item, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.property.host">Host</a></code> | <code>string</code> | The domain name to exclude from the tunnel. If `host` is present, `address` must not be present. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The address in CIDR format to exclude from the tunnel. If `address` is present, `host` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#address ZeroTrustDeviceCustomProfile#address}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the Split Tunnel item, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#description ZeroTrustDeviceCustomProfile#description}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExclude.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The domain name to exclude from the tunnel. If `host` is present, `address` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#host ZeroTrustDeviceCustomProfile#host}

---

### ZeroTrustDeviceCustomProfileFallbackDomains <a name="ZeroTrustDeviceCustomProfileFallbackDomains" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomains"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomains.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileFallbackDomains {

};
```


### ZeroTrustDeviceCustomProfileInclude <a name="ZeroTrustDeviceCustomProfileInclude" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileInclude {
    string Address = null,
    string Description = null,
    string Host = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.property.address">Address</a></code> | <code>string</code> | The address in CIDR format to include in the tunnel. If `address` is present, `host` must not be present. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.property.description">Description</a></code> | <code>string</code> | A description of the Split Tunnel item, displayed in the client UI. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.property.host">Host</a></code> | <code>string</code> | The domain name to include in the tunnel. If `host` is present, `address` must not be present. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

The address in CIDR format to include in the tunnel. If `address` is present, `host` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#address ZeroTrustDeviceCustomProfile#address}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the Split Tunnel item, displayed in the client UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#description ZeroTrustDeviceCustomProfile#description}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileInclude.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The domain name to include in the tunnel. If `host` is present, `address` must not be present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#host ZeroTrustDeviceCustomProfile#host}

---

### ZeroTrustDeviceCustomProfileServiceModeV2 <a name="ZeroTrustDeviceCustomProfileServiceModeV2" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileServiceModeV2 {
    string Mode = null,
    double Port = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2.property.mode">Mode</a></code> | <code>string</code> | The mode to run the WARP client under. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2.property.port">Port</a></code> | <code>double</code> | The port number when used with proxy mode. |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode to run the WARP client under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#mode ZeroTrustDeviceCustomProfile#mode}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number when used with proxy mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.11.0/docs/resources/zero_trust_device_custom_profile#port ZeroTrustDeviceCustomProfile#port}

---

### ZeroTrustDeviceCustomProfileTargetTests <a name="ZeroTrustDeviceCustomProfileTargetTests" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTests"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTests.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileTargetTests {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceCustomProfileExcludeList <a name="ZeroTrustDeviceCustomProfileExcludeList" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileExcludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.get"></a>

```csharp
private ZeroTrustDeviceCustomProfileExcludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDeviceCustomProfileExcludeOutputReference <a name="ZeroTrustDeviceCustomProfileExcludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileExcludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resetHost">ResetHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileExcludeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDeviceCustomProfileFallbackDomainsList <a name="ZeroTrustDeviceCustomProfileFallbackDomainsList" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileFallbackDomainsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.get"></a>

```csharp
private ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference <a name="ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.dnsServer">DnsServer</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomains">ZeroTrustDeviceCustomProfileFallbackDomains</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.dnsServer"></a>

```csharp
public string[] DnsServer { get; }
```

- *Type:* string[]

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomainsOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDeviceCustomProfileFallbackDomains InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileFallbackDomains">ZeroTrustDeviceCustomProfileFallbackDomains</a>

---


### ZeroTrustDeviceCustomProfileIncludeList <a name="ZeroTrustDeviceCustomProfileIncludeList" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileIncludeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.get"></a>

```csharp
private ZeroTrustDeviceCustomProfileIncludeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDeviceCustomProfileIncludeOutputReference <a name="ZeroTrustDeviceCustomProfileIncludeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileIncludeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resetHost">ResetHost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resetAddress"></a>

```csharp
private void ResetAddress()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileIncludeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDeviceCustomProfileServiceModeV2OutputReference <a name="ZeroTrustDeviceCustomProfileServiceModeV2OutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileServiceModeV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.resetPort"></a>

```csharp
private void ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileServiceModeV2OutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustDeviceCustomProfileTargetTestsList <a name="ZeroTrustDeviceCustomProfileTargetTestsList" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileTargetTestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.get"></a>

```csharp
private ZeroTrustDeviceCustomProfileTargetTestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ZeroTrustDeviceCustomProfileTargetTestsOutputReference <a name="ZeroTrustDeviceCustomProfileTargetTestsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDeviceCustomProfileTargetTestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTests">ZeroTrustDeviceCustomProfileTargetTests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTestsOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDeviceCustomProfileTargetTests InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDeviceCustomProfile.ZeroTrustDeviceCustomProfileTargetTests">ZeroTrustDeviceCustomProfileTargetTests</a>

---



