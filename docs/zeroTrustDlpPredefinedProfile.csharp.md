# `zeroTrustDlpPredefinedProfile` Submodule <a name="`zeroTrustDlpPredefinedProfile` Submodule" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpPredefinedProfile <a name="ZeroTrustDlpPredefinedProfile" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile cloudflare_zero_trust_dlp_predefined_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpPredefinedProfile(Construct Scope, string Id, ZeroTrustDlpPredefinedProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig">ZeroTrustDlpPredefinedProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig">ZeroTrustDlpPredefinedProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putEntries">PutEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAiContextEnabled">ResetAiContextEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAllowedMatchCount">ResetAllowedMatchCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetConfidenceThreshold">ResetConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEnabledEntries">ResetEnabledEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEntries">ResetEntries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOcrEnabled">ResetOcrEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntries` <a name="PutEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putEntries"></a>

```csharp
private void PutEntries(IResolvable|ZeroTrustDlpPredefinedProfileEntries[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.putEntries.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]

---

##### `ResetAiContextEnabled` <a name="ResetAiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAiContextEnabled"></a>

```csharp
private void ResetAiContextEnabled()
```

##### `ResetAllowedMatchCount` <a name="ResetAllowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetAllowedMatchCount"></a>

```csharp
private void ResetAllowedMatchCount()
```

##### `ResetConfidenceThreshold` <a name="ResetConfidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetConfidenceThreshold"></a>

```csharp
private void ResetConfidenceThreshold()
```

##### `ResetEnabledEntries` <a name="ResetEnabledEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEnabledEntries"></a>

```csharp
private void ResetEnabledEntries()
```

##### `ResetEntries` <a name="ResetEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetEntries"></a>

```csharp
private void ResetEntries()
```

##### `ResetOcrEnabled` <a name="ResetOcrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.resetOcrEnabled"></a>

```csharp
private void ResetOcrEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDlpPredefinedProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDlpPredefinedProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDlpPredefinedProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustDlpPredefinedProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustDlpPredefinedProfile resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDlpPredefinedProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDlpPredefinedProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpPredefinedProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entries">Entries</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList">ZeroTrustDlpPredefinedProfileEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.openAccess">OpenAccess</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabledInput">AiContextEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCountInput">AllowedMatchCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThresholdInput">ConfidenceThresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.enabledEntriesInput">EnabledEntriesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entriesInput">EntriesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabledInput">OcrEnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileIdInput">ProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabled">AiContextEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCount">AllowedMatchCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.enabledEntries">EnabledEntries</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabled">OcrEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entries"></a>

```csharp
public ZeroTrustDlpPredefinedProfileEntriesList Entries { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList">ZeroTrustDlpPredefinedProfileEntriesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpenAccess`<sup>Required</sup> <a name="OpenAccess" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.openAccess"></a>

```csharp
public IResolvable OpenAccess { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AiContextEnabledInput`<sup>Optional</sup> <a name="AiContextEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabledInput"></a>

```csharp
public bool|IResolvable AiContextEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AllowedMatchCountInput`<sup>Optional</sup> <a name="AllowedMatchCountInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCountInput"></a>

```csharp
public double AllowedMatchCountInput { get; }
```

- *Type:* double

---

##### `ConfidenceThresholdInput`<sup>Optional</sup> <a name="ConfidenceThresholdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThresholdInput"></a>

```csharp
public string ConfidenceThresholdInput { get; }
```

- *Type:* string

---

##### `EnabledEntriesInput`<sup>Optional</sup> <a name="EnabledEntriesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.enabledEntriesInput"></a>

```csharp
public string[] EnabledEntriesInput { get; }
```

- *Type:* string[]

---

##### `EntriesInput`<sup>Optional</sup> <a name="EntriesInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.entriesInput"></a>

```csharp
public IResolvable|ZeroTrustDlpPredefinedProfileEntries[] EntriesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]

---

##### `OcrEnabledInput`<sup>Optional</sup> <a name="OcrEnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabledInput"></a>

```csharp
public bool|IResolvable OcrEnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileIdInput"></a>

```csharp
public string ProfileIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AiContextEnabled`<sup>Required</sup> <a name="AiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.aiContextEnabled"></a>

```csharp
public bool|IResolvable AiContextEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `AllowedMatchCount`<sup>Required</sup> <a name="AllowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.allowedMatchCount"></a>

```csharp
public double AllowedMatchCount { get; }
```

- *Type:* double

---

##### `ConfidenceThreshold`<sup>Required</sup> <a name="ConfidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.confidenceThreshold"></a>

```csharp
public string ConfidenceThreshold { get; }
```

- *Type:* string

---

##### `EnabledEntries`<sup>Required</sup> <a name="EnabledEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.enabledEntries"></a>

```csharp
public string[] EnabledEntries { get; }
```

- *Type:* string[]

---

##### `OcrEnabled`<sup>Required</sup> <a name="OcrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.ocrEnabled"></a>

```csharp
public bool|IResolvable OcrEnabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpPredefinedProfileConfig <a name="ZeroTrustDlpPredefinedProfileConfig" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpPredefinedProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string ProfileId,
    bool|IResolvable AiContextEnabled = null,
    double AllowedMatchCount = null,
    string ConfidenceThreshold = null,
    string[] EnabledEntries = null,
    IResolvable|ZeroTrustDlpPredefinedProfileEntries[] Entries = null,
    bool|IResolvable OcrEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#account_id ZeroTrustDlpPredefinedProfile#account_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.profileId">ProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#profile_id ZeroTrustDlpPredefinedProfile#profile_id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.aiContextEnabled">AiContextEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#ai_context_enabled ZeroTrustDlpPredefinedProfile#ai_context_enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.allowedMatchCount">AllowedMatchCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#allowed_match_count ZeroTrustDlpPredefinedProfile#allowed_match_count}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.confidenceThreshold">ConfidenceThreshold</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#confidence_threshold ZeroTrustDlpPredefinedProfile#confidence_threshold}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.enabledEntries">EnabledEntries</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#enabled_entries ZeroTrustDlpPredefinedProfile#enabled_entries}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.entries">Entries</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#entries ZeroTrustDlpPredefinedProfile#entries}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.ocrEnabled">OcrEnabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#ocr_enabled ZeroTrustDlpPredefinedProfile#ocr_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#account_id ZeroTrustDlpPredefinedProfile#account_id}.

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.profileId"></a>

```csharp
public string ProfileId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#profile_id ZeroTrustDlpPredefinedProfile#profile_id}.

---

##### `AiContextEnabled`<sup>Optional</sup> <a name="AiContextEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.aiContextEnabled"></a>

```csharp
public bool|IResolvable AiContextEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#ai_context_enabled ZeroTrustDlpPredefinedProfile#ai_context_enabled}.

---

##### `AllowedMatchCount`<sup>Optional</sup> <a name="AllowedMatchCount" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.allowedMatchCount"></a>

```csharp
public double AllowedMatchCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#allowed_match_count ZeroTrustDlpPredefinedProfile#allowed_match_count}.

---

##### `ConfidenceThreshold`<sup>Optional</sup> <a name="ConfidenceThreshold" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.confidenceThreshold"></a>

```csharp
public string ConfidenceThreshold { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#confidence_threshold ZeroTrustDlpPredefinedProfile#confidence_threshold}.

---

##### `EnabledEntries`<sup>Optional</sup> <a name="EnabledEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.enabledEntries"></a>

```csharp
public string[] EnabledEntries { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#enabled_entries ZeroTrustDlpPredefinedProfile#enabled_entries}.

---

##### `Entries`<sup>Optional</sup> <a name="Entries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.entries"></a>

```csharp
public IResolvable|ZeroTrustDlpPredefinedProfileEntries[] Entries { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#entries ZeroTrustDlpPredefinedProfile#entries}.

---

##### `OcrEnabled`<sup>Optional</sup> <a name="OcrEnabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileConfig.property.ocrEnabled"></a>

```csharp
public bool|IResolvable OcrEnabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#ocr_enabled ZeroTrustDlpPredefinedProfile#ocr_enabled}.

---

### ZeroTrustDlpPredefinedProfileEntries <a name="ZeroTrustDlpPredefinedProfileEntries" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpPredefinedProfileEntries {
    bool|IResolvable Enabled,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#enabled ZeroTrustDlpPredefinedProfile#enabled}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#id ZeroTrustDlpPredefinedProfile#id}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#enabled ZeroTrustDlpPredefinedProfile#enabled}.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.14.0/docs/resources/zero_trust_dlp_predefined_profile#id ZeroTrustDlpPredefinedProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpPredefinedProfileEntriesList <a name="ZeroTrustDlpPredefinedProfileEntriesList" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpPredefinedProfileEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.get"></a>

```csharp
private ZeroTrustDlpPredefinedProfileEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesList.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustDlpPredefinedProfileEntries[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>[]

---


### ZeroTrustDlpPredefinedProfileEntriesOutputReference <a name="ZeroTrustDlpPredefinedProfileEntriesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustDlpPredefinedProfileEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabled">Enabled</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustDlpPredefinedProfileEntries InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-cloudflare.zeroTrustDlpPredefinedProfile.ZeroTrustDlpPredefinedProfileEntries">ZeroTrustDlpPredefinedProfileEntries</a>

---



