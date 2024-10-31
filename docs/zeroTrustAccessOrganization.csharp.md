# `zeroTrustAccessOrganization` Submodule <a name="`zeroTrustAccessOrganization` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessOrganization <a name="ZeroTrustAccessOrganization" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization cloudflare_zero_trust_access_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessOrganization(Construct Scope, string Id, ZeroTrustAccessOrganizationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig">ZeroTrustAccessOrganizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig">ZeroTrustAccessOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putCustomPages">PutCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putLoginDesign">PutLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAllowAuthenticateViaWarp">ResetAllowAuthenticateViaWarp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAutoRedirectToIdentity">ResetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetCustomPages">ResetCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetIsUiReadOnly">ResetIsUiReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetLoginDesign">ResetLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetUiReadOnlyToggleReason">ResetUiReadOnlyToggleReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetUserSeatExpirationInactiveTime">ResetUserSeatExpirationInactiveTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetWarpAuthSessionDuration">ResetWarpAuthSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomPages` <a name="PutCustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putCustomPages"></a>

```csharp
private void PutCustomPages(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putCustomPages.parameter.value"></a>

- *Type:* object

---

##### `PutLoginDesign` <a name="PutLoginDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putLoginDesign"></a>

```csharp
private void PutLoginDesign(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.putLoginDesign.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAllowAuthenticateViaWarp` <a name="ResetAllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAllowAuthenticateViaWarp"></a>

```csharp
private void ResetAllowAuthenticateViaWarp()
```

##### `ResetAutoRedirectToIdentity` <a name="ResetAutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetAutoRedirectToIdentity"></a>

```csharp
private void ResetAutoRedirectToIdentity()
```

##### `ResetCustomPages` <a name="ResetCustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetCustomPages"></a>

```csharp
private void ResetCustomPages()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsUiReadOnly` <a name="ResetIsUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetIsUiReadOnly"></a>

```csharp
private void ResetIsUiReadOnly()
```

##### `ResetLoginDesign` <a name="ResetLoginDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetLoginDesign"></a>

```csharp
private void ResetLoginDesign()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetSessionDuration"></a>

```csharp
private void ResetSessionDuration()
```

##### `ResetUiReadOnlyToggleReason` <a name="ResetUiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetUiReadOnlyToggleReason"></a>

```csharp
private void ResetUiReadOnlyToggleReason()
```

##### `ResetUserSeatExpirationInactiveTime` <a name="ResetUserSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetUserSeatExpirationInactiveTime"></a>

```csharp
private void ResetUserSeatExpirationInactiveTime()
```

##### `ResetWarpAuthSessionDuration` <a name="ResetWarpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetWarpAuthSessionDuration"></a>

```csharp
private void ResetWarpAuthSessionDuration()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessOrganization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessOrganization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessOrganization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessOrganization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustAccessOrganization resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustAccessOrganization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustAccessOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.customPages">CustomPages</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList">ZeroTrustAccessOrganizationCustomPagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.loginDesign">LoginDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList">ZeroTrustAccessOrganizationLoginDesignList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.allowAuthenticateViaWarpInput">AllowAuthenticateViaWarpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.authDomainInput">AuthDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.autoRedirectToIdentityInput">AutoRedirectToIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.customPagesInput">CustomPagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.isUiReadOnlyInput">IsUiReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.loginDesignInput">LoginDesignInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.sessionDurationInput">SessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.uiReadOnlyToggleReasonInput">UiReadOnlyToggleReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.userSeatExpirationInactiveTimeInput">UserSeatExpirationInactiveTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.warpAuthSessionDurationInput">WarpAuthSessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.allowAuthenticateViaWarp">AllowAuthenticateViaWarp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.authDomain">AuthDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.isUiReadOnly">IsUiReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.uiReadOnlyToggleReason">UiReadOnlyToggleReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.userSeatExpirationInactiveTime">UserSeatExpirationInactiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.warpAuthSessionDuration">WarpAuthSessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CustomPages`<sup>Required</sup> <a name="CustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.customPages"></a>

```csharp
public ZeroTrustAccessOrganizationCustomPagesList CustomPages { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList">ZeroTrustAccessOrganizationCustomPagesList</a>

---

##### `LoginDesign`<sup>Required</sup> <a name="LoginDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.loginDesign"></a>

```csharp
public ZeroTrustAccessOrganizationLoginDesignList LoginDesign { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList">ZeroTrustAccessOrganizationLoginDesignList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AllowAuthenticateViaWarpInput`<sup>Optional</sup> <a name="AllowAuthenticateViaWarpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.allowAuthenticateViaWarpInput"></a>

```csharp
public object AllowAuthenticateViaWarpInput { get; }
```

- *Type:* object

---

##### `AuthDomainInput`<sup>Optional</sup> <a name="AuthDomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.authDomainInput"></a>

```csharp
public string AuthDomainInput { get; }
```

- *Type:* string

---

##### `AutoRedirectToIdentityInput`<sup>Optional</sup> <a name="AutoRedirectToIdentityInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.autoRedirectToIdentityInput"></a>

```csharp
public object AutoRedirectToIdentityInput { get; }
```

- *Type:* object

---

##### `CustomPagesInput`<sup>Optional</sup> <a name="CustomPagesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.customPagesInput"></a>

```csharp
public object CustomPagesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsUiReadOnlyInput`<sup>Optional</sup> <a name="IsUiReadOnlyInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.isUiReadOnlyInput"></a>

```csharp
public object IsUiReadOnlyInput { get; }
```

- *Type:* object

---

##### `LoginDesignInput`<sup>Optional</sup> <a name="LoginDesignInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.loginDesignInput"></a>

```csharp
public object LoginDesignInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.sessionDurationInput"></a>

```csharp
public string SessionDurationInput { get; }
```

- *Type:* string

---

##### `UiReadOnlyToggleReasonInput`<sup>Optional</sup> <a name="UiReadOnlyToggleReasonInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.uiReadOnlyToggleReasonInput"></a>

```csharp
public string UiReadOnlyToggleReasonInput { get; }
```

- *Type:* string

---

##### `UserSeatExpirationInactiveTimeInput`<sup>Optional</sup> <a name="UserSeatExpirationInactiveTimeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.userSeatExpirationInactiveTimeInput"></a>

```csharp
public string UserSeatExpirationInactiveTimeInput { get; }
```

- *Type:* string

---

##### `WarpAuthSessionDurationInput`<sup>Optional</sup> <a name="WarpAuthSessionDurationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.warpAuthSessionDurationInput"></a>

```csharp
public string WarpAuthSessionDurationInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AllowAuthenticateViaWarp`<sup>Required</sup> <a name="AllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.allowAuthenticateViaWarp"></a>

```csharp
public object AllowAuthenticateViaWarp { get; }
```

- *Type:* object

---

##### `AuthDomain`<sup>Required</sup> <a name="AuthDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.authDomain"></a>

```csharp
public string AuthDomain { get; }
```

- *Type:* string

---

##### `AutoRedirectToIdentity`<sup>Required</sup> <a name="AutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.autoRedirectToIdentity"></a>

```csharp
public object AutoRedirectToIdentity { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsUiReadOnly`<sup>Required</sup> <a name="IsUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.isUiReadOnly"></a>

```csharp
public object IsUiReadOnly { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; }
```

- *Type:* string

---

##### `UiReadOnlyToggleReason`<sup>Required</sup> <a name="UiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.uiReadOnlyToggleReason"></a>

```csharp
public string UiReadOnlyToggleReason { get; }
```

- *Type:* string

---

##### `UserSeatExpirationInactiveTime`<sup>Required</sup> <a name="UserSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.userSeatExpirationInactiveTime"></a>

```csharp
public string UserSeatExpirationInactiveTime { get; }
```

- *Type:* string

---

##### `WarpAuthSessionDuration`<sup>Required</sup> <a name="WarpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.warpAuthSessionDuration"></a>

```csharp
public string WarpAuthSessionDuration { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessOrganizationConfig <a name="ZeroTrustAccessOrganizationConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessOrganizationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthDomain,
    string Name,
    string AccountId = null,
    object AllowAuthenticateViaWarp = null,
    object AutoRedirectToIdentity = null,
    object CustomPages = null,
    string Id = null,
    object IsUiReadOnly = null,
    object LoginDesign = null,
    string SessionDuration = null,
    string UiReadOnlyToggleReason = null,
    string UserSeatExpirationInactiveTime = null,
    string WarpAuthSessionDuration = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.authDomain">AuthDomain</a></code> | <code>string</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.name">Name</a></code> | <code>string</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.allowAuthenticateViaWarp">AllowAuthenticateViaWarp</a></code> | <code>object</code> | When set to true, users can authenticate via WARP for any application in your organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>object</code> | When set to true, users skip the identity provider selection step during login. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.customPages">CustomPages</a></code> | <code>object</code> | custom_pages block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#id ZeroTrustAccessOrganization#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.isUiReadOnly">IsUiReadOnly</a></code> | <code>object</code> | When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.loginDesign">LoginDesign</a></code> | <code>object</code> | login_design block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.uiReadOnlyToggleReason">UiReadOnlyToggleReason</a></code> | <code>string</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.userSeatExpirationInactiveTime">UserSeatExpirationInactiveTime</a></code> | <code>string</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.warpAuthSessionDuration">WarpAuthSessionDuration</a></code> | <code>string</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthDomain`<sup>Required</sup> <a name="AuthDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.authDomain"></a>

```csharp
public string AuthDomain { get; set; }
```

- *Type:* string

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#auth_domain ZeroTrustAccessOrganization#auth_domain}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#name ZeroTrustAccessOrganization#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#account_id ZeroTrustAccessOrganization#account_id}

---

##### `AllowAuthenticateViaWarp`<sup>Optional</sup> <a name="AllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.allowAuthenticateViaWarp"></a>

```csharp
public object AllowAuthenticateViaWarp { get; set; }
```

- *Type:* object

When set to true, users can authenticate via WARP for any application in your organization.

Application settings will take precedence over this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#allow_authenticate_via_warp ZeroTrustAccessOrganization#allow_authenticate_via_warp}

---

##### `AutoRedirectToIdentity`<sup>Optional</sup> <a name="AutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.autoRedirectToIdentity"></a>

```csharp
public object AutoRedirectToIdentity { get; set; }
```

- *Type:* object

When set to true, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#auto_redirect_to_identity ZeroTrustAccessOrganization#auto_redirect_to_identity}

---

##### `CustomPages`<sup>Optional</sup> <a name="CustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.customPages"></a>

```csharp
public object CustomPages { get; set; }
```

- *Type:* object

custom_pages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#custom_pages ZeroTrustAccessOrganization#custom_pages}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#id ZeroTrustAccessOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsUiReadOnly`<sup>Optional</sup> <a name="IsUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.isUiReadOnly"></a>

```csharp
public object IsUiReadOnly { get; set; }
```

- *Type:* object

When set to true, this will disable all editing of Access resources via the Zero Trust Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#is_ui_read_only ZeroTrustAccessOrganization#is_ui_read_only}

---

##### `LoginDesign`<sup>Optional</sup> <a name="LoginDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.loginDesign"></a>

```csharp
public object LoginDesign { get; set; }
```

- *Type:* object

login_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#login_design ZeroTrustAccessOrganization#login_design}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; set; }
```

- *Type:* string

How often a user will be forced to re-authorise. Must be in the format `48h` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#session_duration ZeroTrustAccessOrganization#session_duration}

---

##### `UiReadOnlyToggleReason`<sup>Optional</sup> <a name="UiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.uiReadOnlyToggleReason"></a>

```csharp
public string UiReadOnlyToggleReason { get; set; }
```

- *Type:* string

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#ui_read_only_toggle_reason ZeroTrustAccessOrganization#ui_read_only_toggle_reason}

---

##### `UserSeatExpirationInactiveTime`<sup>Optional</sup> <a name="UserSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.userSeatExpirationInactiveTime"></a>

```csharp
public string UserSeatExpirationInactiveTime { get; set; }
```

- *Type:* string

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count. Must be in the format `300ms` or `2h45m`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#user_seat_expiration_inactive_time ZeroTrustAccessOrganization#user_seat_expiration_inactive_time}

---

##### `WarpAuthSessionDuration`<sup>Optional</sup> <a name="WarpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.warpAuthSessionDuration"></a>

```csharp
public string WarpAuthSessionDuration { get; set; }
```

- *Type:* string

The amount of time that tokens issued for applications will be valid.

Must be in the format 30m or 2h45m. Valid time units are: m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#warp_auth_session_duration ZeroTrustAccessOrganization#warp_auth_session_duration}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#zone_id ZeroTrustAccessOrganization#zone_id}

---

### ZeroTrustAccessOrganizationCustomPages <a name="ZeroTrustAccessOrganizationCustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessOrganizationCustomPages {
    string Forbidden = null,
    string IdentityDenied = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.property.forbidden">Forbidden</a></code> | <code>string</code> | The id of the forbidden page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.property.identityDenied">IdentityDenied</a></code> | <code>string</code> | The id of the identity denied page. |

---

##### `Forbidden`<sup>Optional</sup> <a name="Forbidden" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.property.forbidden"></a>

```csharp
public string Forbidden { get; set; }
```

- *Type:* string

The id of the forbidden page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#forbidden ZeroTrustAccessOrganization#forbidden}

---

##### `IdentityDenied`<sup>Optional</sup> <a name="IdentityDenied" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPages.property.identityDenied"></a>

```csharp
public string IdentityDenied { get; set; }
```

- *Type:* string

The id of the identity denied page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#identity_denied ZeroTrustAccessOrganization#identity_denied}

---

### ZeroTrustAccessOrganizationLoginDesign <a name="ZeroTrustAccessOrganizationLoginDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessOrganizationLoginDesign {
    string BackgroundColor = null,
    string FooterText = null,
    string HeaderText = null,
    string LogoPath = null,
    string TextColor = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | The background color on the login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.footerText">FooterText</a></code> | <code>string</code> | The text at the bottom of the login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.headerText">HeaderText</a></code> | <code>string</code> | The text at the top of the login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.logoPath">LogoPath</a></code> | <code>string</code> | The URL of the logo on the login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.textColor">TextColor</a></code> | <code>string</code> | The text color on the login page. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; set; }
```

- *Type:* string

The background color on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#background_color ZeroTrustAccessOrganization#background_color}

---

##### `FooterText`<sup>Optional</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.footerText"></a>

```csharp
public string FooterText { get; set; }
```

- *Type:* string

The text at the bottom of the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#footer_text ZeroTrustAccessOrganization#footer_text}

---

##### `HeaderText`<sup>Optional</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.headerText"></a>

```csharp
public string HeaderText { get; set; }
```

- *Type:* string

The text at the top of the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#header_text ZeroTrustAccessOrganization#header_text}

---

##### `LogoPath`<sup>Optional</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.logoPath"></a>

```csharp
public string LogoPath { get; set; }
```

- *Type:* string

The URL of the logo on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#logo_path ZeroTrustAccessOrganization#logo_path}

---

##### `TextColor`<sup>Optional</sup> <a name="TextColor" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesign.property.textColor"></a>

```csharp
public string TextColor { get; set; }
```

- *Type:* string

The text color on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_organization#text_color ZeroTrustAccessOrganization#text_color}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessOrganizationCustomPagesList <a name="ZeroTrustAccessOrganizationCustomPagesList" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessOrganizationCustomPagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.get"></a>

```csharp
private ZeroTrustAccessOrganizationCustomPagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessOrganizationCustomPagesOutputReference <a name="ZeroTrustAccessOrganizationCustomPagesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessOrganizationCustomPagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resetForbidden">ResetForbidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resetIdentityDenied">ResetIdentityDenied</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForbidden` <a name="ResetForbidden" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resetForbidden"></a>

```csharp
private void ResetForbidden()
```

##### `ResetIdentityDenied` <a name="ResetIdentityDenied" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.resetIdentityDenied"></a>

```csharp
private void ResetIdentityDenied()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.forbiddenInput">ForbiddenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.identityDeniedInput">IdentityDeniedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.forbidden">Forbidden</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.identityDenied">IdentityDenied</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForbiddenInput`<sup>Optional</sup> <a name="ForbiddenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.forbiddenInput"></a>

```csharp
public string ForbiddenInput { get; }
```

- *Type:* string

---

##### `IdentityDeniedInput`<sup>Optional</sup> <a name="IdentityDeniedInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.identityDeniedInput"></a>

```csharp
public string IdentityDeniedInput { get; }
```

- *Type:* string

---

##### `Forbidden`<sup>Required</sup> <a name="Forbidden" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.forbidden"></a>

```csharp
public string Forbidden { get; }
```

- *Type:* string

---

##### `IdentityDenied`<sup>Required</sup> <a name="IdentityDenied" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.identityDenied"></a>

```csharp
public string IdentityDenied { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationCustomPagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessOrganizationLoginDesignList <a name="ZeroTrustAccessOrganizationLoginDesignList" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessOrganizationLoginDesignList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.get"></a>

```csharp
private ZeroTrustAccessOrganizationLoginDesignOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessOrganizationLoginDesignOutputReference <a name="ZeroTrustAccessOrganizationLoginDesignOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessOrganizationLoginDesignOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetFooterText">ResetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetHeaderText">ResetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetLogoPath">ResetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetTextColor">ResetTextColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetBackgroundColor"></a>

```csharp
private void ResetBackgroundColor()
```

##### `ResetFooterText` <a name="ResetFooterText" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetFooterText"></a>

```csharp
private void ResetFooterText()
```

##### `ResetHeaderText` <a name="ResetHeaderText" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetHeaderText"></a>

```csharp
private void ResetHeaderText()
```

##### `ResetLogoPath` <a name="ResetLogoPath" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetLogoPath"></a>

```csharp
private void ResetLogoPath()
```

##### `ResetTextColor` <a name="ResetTextColor" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.resetTextColor"></a>

```csharp
private void ResetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.footerTextInput">FooterTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.headerTextInput">HeaderTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.logoPathInput">LogoPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.textColorInput">TextColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.footerText">FooterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.headerText">HeaderText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.logoPath">LogoPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.backgroundColorInput"></a>

```csharp
public string BackgroundColorInput { get; }
```

- *Type:* string

---

##### `FooterTextInput`<sup>Optional</sup> <a name="FooterTextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.footerTextInput"></a>

```csharp
public string FooterTextInput { get; }
```

- *Type:* string

---

##### `HeaderTextInput`<sup>Optional</sup> <a name="HeaderTextInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.headerTextInput"></a>

```csharp
public string HeaderTextInput { get; }
```

- *Type:* string

---

##### `LogoPathInput`<sup>Optional</sup> <a name="LogoPathInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.logoPathInput"></a>

```csharp
public string LogoPathInput { get; }
```

- *Type:* string

---

##### `TextColorInput`<sup>Optional</sup> <a name="TextColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.textColorInput"></a>

```csharp
public string TextColorInput { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.footerText"></a>

```csharp
public string FooterText { get; }
```

- *Type:* string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.headerText"></a>

```csharp
public string HeaderText { get; }
```

- *Type:* string

---

##### `LogoPath`<sup>Required</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.logoPath"></a>

```csharp
public string LogoPath { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessOrganization.ZeroTrustAccessOrganizationLoginDesignOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



