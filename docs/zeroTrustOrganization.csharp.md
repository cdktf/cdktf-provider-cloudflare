# `zeroTrustOrganization` Submodule <a name="`zeroTrustOrganization` Submodule" id="@cdktf/provider-cloudflare.zeroTrustOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustOrganization <a name="ZeroTrustOrganization" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization cloudflare_zero_trust_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustOrganization(Construct Scope, string Id, ZeroTrustOrganizationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig">ZeroTrustOrganizationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig">ZeroTrustOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages">PutCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign">PutLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAllowAuthenticateViaWarp">ResetAllowAuthenticateViaWarp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAuthDomain">ResetAuthDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAutoRedirectToIdentity">ResetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetCustomPages">ResetCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetIsUiReadOnly">ResetIsUiReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetLoginDesign">ResetLoginDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUiReadOnlyToggleReason">ResetUiReadOnlyToggleReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUserSeatExpirationInactiveTime">ResetUserSeatExpirationInactiveTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetWarpAuthSessionDuration">ResetWarpAuthSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomPages` <a name="PutCustomPages" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages"></a>

```csharp
private void PutCustomPages(ZeroTrustOrganizationCustomPages Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putCustomPages.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

---

##### `PutLoginDesign` <a name="PutLoginDesign" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign"></a>

```csharp
private void PutLoginDesign(ZeroTrustOrganizationLoginDesign Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.putLoginDesign.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAllowAuthenticateViaWarp` <a name="ResetAllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAllowAuthenticateViaWarp"></a>

```csharp
private void ResetAllowAuthenticateViaWarp()
```

##### `ResetAuthDomain` <a name="ResetAuthDomain" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAuthDomain"></a>

```csharp
private void ResetAuthDomain()
```

##### `ResetAutoRedirectToIdentity` <a name="ResetAutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetAutoRedirectToIdentity"></a>

```csharp
private void ResetAutoRedirectToIdentity()
```

##### `ResetCustomPages` <a name="ResetCustomPages" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetCustomPages"></a>

```csharp
private void ResetCustomPages()
```

##### `ResetIsUiReadOnly` <a name="ResetIsUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetIsUiReadOnly"></a>

```csharp
private void ResetIsUiReadOnly()
```

##### `ResetLoginDesign` <a name="ResetLoginDesign" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetLoginDesign"></a>

```csharp
private void ResetLoginDesign()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetSessionDuration"></a>

```csharp
private void ResetSessionDuration()
```

##### `ResetUiReadOnlyToggleReason` <a name="ResetUiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUiReadOnlyToggleReason"></a>

```csharp
private void ResetUiReadOnlyToggleReason()
```

##### `ResetUserSeatExpirationInactiveTime` <a name="ResetUserSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetUserSeatExpirationInactiveTime"></a>

```csharp
private void ResetUserSeatExpirationInactiveTime()
```

##### `ResetWarpAuthSessionDuration` <a name="ResetWarpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetWarpAuthSessionDuration"></a>

```csharp
private void ResetWarpAuthSessionDuration()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustOrganization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustOrganization.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustOrganization.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustOrganization.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustOrganization.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustOrganization resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustOrganization to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustOrganization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustOrganization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPages">CustomPages</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference">ZeroTrustOrganizationCustomPagesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesign">LoginDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference">ZeroTrustOrganizationLoginDesignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarpInput">AllowAuthenticateViaWarpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomainInput">AuthDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentityInput">AutoRedirectToIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPagesInput">CustomPagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnlyInput">IsUiReadOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesignInput">LoginDesignInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDurationInput">SessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReasonInput">UiReadOnlyToggleReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTimeInput">UserSeatExpirationInactiveTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDurationInput">WarpAuthSessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarp">AllowAuthenticateViaWarp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomain">AuthDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnly">IsUiReadOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReason">UiReadOnlyToggleReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTime">UserSeatExpirationInactiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDuration">WarpAuthSessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CustomPages`<sup>Required</sup> <a name="CustomPages" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPages"></a>

```csharp
public ZeroTrustOrganizationCustomPagesOutputReference CustomPages { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference">ZeroTrustOrganizationCustomPagesOutputReference</a>

---

##### `LoginDesign`<sup>Required</sup> <a name="LoginDesign" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesign"></a>

```csharp
public ZeroTrustOrganizationLoginDesignOutputReference LoginDesign { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference">ZeroTrustOrganizationLoginDesignOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AllowAuthenticateViaWarpInput`<sup>Optional</sup> <a name="AllowAuthenticateViaWarpInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarpInput"></a>

```csharp
public object AllowAuthenticateViaWarpInput { get; }
```

- *Type:* object

---

##### `AuthDomainInput`<sup>Optional</sup> <a name="AuthDomainInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomainInput"></a>

```csharp
public string AuthDomainInput { get; }
```

- *Type:* string

---

##### `AutoRedirectToIdentityInput`<sup>Optional</sup> <a name="AutoRedirectToIdentityInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentityInput"></a>

```csharp
public object AutoRedirectToIdentityInput { get; }
```

- *Type:* object

---

##### `CustomPagesInput`<sup>Optional</sup> <a name="CustomPagesInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.customPagesInput"></a>

```csharp
public object CustomPagesInput { get; }
```

- *Type:* object

---

##### `IsUiReadOnlyInput`<sup>Optional</sup> <a name="IsUiReadOnlyInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnlyInput"></a>

```csharp
public object IsUiReadOnlyInput { get; }
```

- *Type:* object

---

##### `LoginDesignInput`<sup>Optional</sup> <a name="LoginDesignInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.loginDesignInput"></a>

```csharp
public object LoginDesignInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDurationInput"></a>

```csharp
public string SessionDurationInput { get; }
```

- *Type:* string

---

##### `UiReadOnlyToggleReasonInput`<sup>Optional</sup> <a name="UiReadOnlyToggleReasonInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReasonInput"></a>

```csharp
public string UiReadOnlyToggleReasonInput { get; }
```

- *Type:* string

---

##### `UserSeatExpirationInactiveTimeInput`<sup>Optional</sup> <a name="UserSeatExpirationInactiveTimeInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTimeInput"></a>

```csharp
public string UserSeatExpirationInactiveTimeInput { get; }
```

- *Type:* string

---

##### `WarpAuthSessionDurationInput`<sup>Optional</sup> <a name="WarpAuthSessionDurationInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDurationInput"></a>

```csharp
public string WarpAuthSessionDurationInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AllowAuthenticateViaWarp`<sup>Required</sup> <a name="AllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.allowAuthenticateViaWarp"></a>

```csharp
public object AllowAuthenticateViaWarp { get; }
```

- *Type:* object

---

##### `AuthDomain`<sup>Required</sup> <a name="AuthDomain" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.authDomain"></a>

```csharp
public string AuthDomain { get; }
```

- *Type:* string

---

##### `AutoRedirectToIdentity`<sup>Required</sup> <a name="AutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.autoRedirectToIdentity"></a>

```csharp
public object AutoRedirectToIdentity { get; }
```

- *Type:* object

---

##### `IsUiReadOnly`<sup>Required</sup> <a name="IsUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.isUiReadOnly"></a>

```csharp
public object IsUiReadOnly { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; }
```

- *Type:* string

---

##### `UiReadOnlyToggleReason`<sup>Required</sup> <a name="UiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.uiReadOnlyToggleReason"></a>

```csharp
public string UiReadOnlyToggleReason { get; }
```

- *Type:* string

---

##### `UserSeatExpirationInactiveTime`<sup>Required</sup> <a name="UserSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.userSeatExpirationInactiveTime"></a>

```csharp
public string UserSeatExpirationInactiveTime { get; }
```

- *Type:* string

---

##### `WarpAuthSessionDuration`<sup>Required</sup> <a name="WarpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.warpAuthSessionDuration"></a>

```csharp
public string WarpAuthSessionDuration { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganization.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustOrganizationConfig <a name="ZeroTrustOrganizationConfig" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustOrganizationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId = null,
    object AllowAuthenticateViaWarp = null,
    string AuthDomain = null,
    object AutoRedirectToIdentity = null,
    ZeroTrustOrganizationCustomPages CustomPages = null,
    object IsUiReadOnly = null,
    ZeroTrustOrganizationLoginDesign LoginDesign = null,
    string Name = null,
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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.accountId">AccountId</a></code> | <code>string</code> | The Account ID to use for this endpoint. Mutually exclusive with the Zone ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.allowAuthenticateViaWarp">AllowAuthenticateViaWarp</a></code> | <code>object</code> | When set to true, users can authenticate via WARP for any application in your organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.authDomain">AuthDomain</a></code> | <code>string</code> | The unique subdomain assigned to your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>object</code> | When set to `true`, users skip the identity provider selection step during login. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.customPages">CustomPages</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.isUiReadOnly">IsUiReadOnly</a></code> | <code>object</code> | Lock all settings as Read-Only in the Dashboard, regardless of user permission. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.loginDesign">LoginDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.name">Name</a></code> | <code>string</code> | The name of your Zero Trust organization. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.uiReadOnlyToggleReason">UiReadOnlyToggleReason</a></code> | <code>string</code> | A description of the reason why the UI read only field is being toggled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.userSeatExpirationInactiveTime">UserSeatExpirationInactiveTime</a></code> | <code>string</code> | The amount of time a user seat is inactive before it expires. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.warpAuthSessionDuration">WarpAuthSessionDuration</a></code> | <code>string</code> | The amount of time that tokens issued for applications will be valid. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The Zone ID to use for this endpoint. Mutually exclusive with the Account ID. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#account_id ZeroTrustOrganization#account_id}

---

##### `AllowAuthenticateViaWarp`<sup>Optional</sup> <a name="AllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.allowAuthenticateViaWarp"></a>

```csharp
public object AllowAuthenticateViaWarp { get; set; }
```

- *Type:* object

When set to true, users can authenticate via WARP for any application in your organization.

Application settings will take precedence over this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#allow_authenticate_via_warp ZeroTrustOrganization#allow_authenticate_via_warp}

---

##### `AuthDomain`<sup>Optional</sup> <a name="AuthDomain" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.authDomain"></a>

```csharp
public string AuthDomain { get; set; }
```

- *Type:* string

The unique subdomain assigned to your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#auth_domain ZeroTrustOrganization#auth_domain}

---

##### `AutoRedirectToIdentity`<sup>Optional</sup> <a name="AutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.autoRedirectToIdentity"></a>

```csharp
public object AutoRedirectToIdentity { get; set; }
```

- *Type:* object

When set to `true`, users skip the identity provider selection step during login.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#auto_redirect_to_identity ZeroTrustOrganization#auto_redirect_to_identity}

---

##### `CustomPages`<sup>Optional</sup> <a name="CustomPages" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.customPages"></a>

```csharp
public ZeroTrustOrganizationCustomPages CustomPages { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages">ZeroTrustOrganizationCustomPages</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#custom_pages ZeroTrustOrganization#custom_pages}.

---

##### `IsUiReadOnly`<sup>Optional</sup> <a name="IsUiReadOnly" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.isUiReadOnly"></a>

```csharp
public object IsUiReadOnly { get; set; }
```

- *Type:* object

Lock all settings as Read-Only in the Dashboard, regardless of user permission.

Updates may only be made via the API or Terraform for this account when enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#is_ui_read_only ZeroTrustOrganization#is_ui_read_only}

---

##### `LoginDesign`<sup>Optional</sup> <a name="LoginDesign" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.loginDesign"></a>

```csharp
public ZeroTrustOrganizationLoginDesign LoginDesign { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign">ZeroTrustOrganizationLoginDesign</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#login_design ZeroTrustOrganization#login_design}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of your Zero Trust organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#name ZeroTrustOrganization#name}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; set; }
```

- *Type:* string

The amount of time that tokens issued for applications will be valid.

Must be in the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#session_duration ZeroTrustOrganization#session_duration}

---

##### `UiReadOnlyToggleReason`<sup>Optional</sup> <a name="UiReadOnlyToggleReason" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.uiReadOnlyToggleReason"></a>

```csharp
public string UiReadOnlyToggleReason { get; set; }
```

- *Type:* string

A description of the reason why the UI read only field is being toggled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#ui_read_only_toggle_reason ZeroTrustOrganization#ui_read_only_toggle_reason}

---

##### `UserSeatExpirationInactiveTime`<sup>Optional</sup> <a name="UserSeatExpirationInactiveTime" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.userSeatExpirationInactiveTime"></a>

```csharp
public string UserSeatExpirationInactiveTime { get; set; }
```

- *Type:* string

The amount of time a user seat is inactive before it expires.

When the user seat exceeds the set time of inactivity, the user is removed as an active seat and no longer counts against your Teams seat count.  Minimum value for this setting is 1 month (730h). Must be in the format `300ms` or `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#user_seat_expiration_inactive_time ZeroTrustOrganization#user_seat_expiration_inactive_time}

---

##### `WarpAuthSessionDuration`<sup>Optional</sup> <a name="WarpAuthSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.warpAuthSessionDuration"></a>

```csharp
public string WarpAuthSessionDuration { get; set; }
```

- *Type:* string

The amount of time that tokens issued for applications will be valid.

Must be in the format `30m` or `2h45m`. Valid time units are: m, h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#warp_auth_session_duration ZeroTrustOrganization#warp_auth_session_duration}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#zone_id ZeroTrustOrganization#zone_id}

---

### ZeroTrustOrganizationCustomPages <a name="ZeroTrustOrganizationCustomPages" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustOrganizationCustomPages {
    string Forbidden = null,
    string IdentityDenied = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.forbidden">Forbidden</a></code> | <code>string</code> | The uid of the custom page to use when a user is denied access after failing a non-identity rule. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.identityDenied">IdentityDenied</a></code> | <code>string</code> | The uid of the custom page to use when a user is denied access. |

---

##### `Forbidden`<sup>Optional</sup> <a name="Forbidden" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.forbidden"></a>

```csharp
public string Forbidden { get; set; }
```

- *Type:* string

The uid of the custom page to use when a user is denied access after failing a non-identity rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#forbidden ZeroTrustOrganization#forbidden}

---

##### `IdentityDenied`<sup>Optional</sup> <a name="IdentityDenied" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPages.property.identityDenied"></a>

```csharp
public string IdentityDenied { get; set; }
```

- *Type:* string

The uid of the custom page to use when a user is denied access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#identity_denied ZeroTrustOrganization#identity_denied}

---

### ZeroTrustOrganizationLoginDesign <a name="ZeroTrustOrganizationLoginDesign" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustOrganizationLoginDesign {
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
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | The background color on your login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.footerText">FooterText</a></code> | <code>string</code> | The text at the bottom of your login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.headerText">HeaderText</a></code> | <code>string</code> | The text at the top of your login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.logoPath">LogoPath</a></code> | <code>string</code> | The URL of the logo on your login page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.textColor">TextColor</a></code> | <code>string</code> | The text color on your login page. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; set; }
```

- *Type:* string

The background color on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#background_color ZeroTrustOrganization#background_color}

---

##### `FooterText`<sup>Optional</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.footerText"></a>

```csharp
public string FooterText { get; set; }
```

- *Type:* string

The text at the bottom of your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#footer_text ZeroTrustOrganization#footer_text}

---

##### `HeaderText`<sup>Optional</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.headerText"></a>

```csharp
public string HeaderText { get; set; }
```

- *Type:* string

The text at the top of your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#header_text ZeroTrustOrganization#header_text}

---

##### `LogoPath`<sup>Optional</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.logoPath"></a>

```csharp
public string LogoPath { get; set; }
```

- *Type:* string

The URL of the logo on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#logo_path ZeroTrustOrganization#logo_path}

---

##### `TextColor`<sup>Optional</sup> <a name="TextColor" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesign.property.textColor"></a>

```csharp
public string TextColor { get; set; }
```

- *Type:* string

The text color on your login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.2.0/docs/resources/zero_trust_organization#text_color ZeroTrustOrganization#text_color}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustOrganizationCustomPagesOutputReference <a name="ZeroTrustOrganizationCustomPagesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustOrganizationCustomPagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetForbidden">ResetForbidden</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetIdentityDenied">ResetIdentityDenied</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetForbidden` <a name="ResetForbidden" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetForbidden"></a>

```csharp
private void ResetForbidden()
```

##### `ResetIdentityDenied` <a name="ResetIdentityDenied" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.resetIdentityDenied"></a>

```csharp
private void ResetIdentityDenied()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbiddenInput">ForbiddenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDeniedInput">IdentityDeniedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbidden">Forbidden</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied">IdentityDenied</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ForbiddenInput`<sup>Optional</sup> <a name="ForbiddenInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbiddenInput"></a>

```csharp
public string ForbiddenInput { get; }
```

- *Type:* string

---

##### `IdentityDeniedInput`<sup>Optional</sup> <a name="IdentityDeniedInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDeniedInput"></a>

```csharp
public string IdentityDeniedInput { get; }
```

- *Type:* string

---

##### `Forbidden`<sup>Required</sup> <a name="Forbidden" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.forbidden"></a>

```csharp
public string Forbidden { get; }
```

- *Type:* string

---

##### `IdentityDenied`<sup>Required</sup> <a name="IdentityDenied" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.identityDenied"></a>

```csharp
public string IdentityDenied { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationCustomPagesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustOrganizationLoginDesignOutputReference <a name="ZeroTrustOrganizationLoginDesignOutputReference" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustOrganizationLoginDesignOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetFooterText">ResetFooterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetHeaderText">ResetHeaderText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetLogoPath">ResetLogoPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetTextColor">ResetTextColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetBackgroundColor"></a>

```csharp
private void ResetBackgroundColor()
```

##### `ResetFooterText` <a name="ResetFooterText" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetFooterText"></a>

```csharp
private void ResetFooterText()
```

##### `ResetHeaderText` <a name="ResetHeaderText" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetHeaderText"></a>

```csharp
private void ResetHeaderText()
```

##### `ResetLogoPath` <a name="ResetLogoPath" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetLogoPath"></a>

```csharp
private void ResetLogoPath()
```

##### `ResetTextColor` <a name="ResetTextColor" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.resetTextColor"></a>

```csharp
private void ResetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerTextInput">FooterTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerTextInput">HeaderTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPathInput">LogoPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColorInput">TextColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerText">FooterText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerText">HeaderText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPath">LogoPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColor">TextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColorInput"></a>

```csharp
public string BackgroundColorInput { get; }
```

- *Type:* string

---

##### `FooterTextInput`<sup>Optional</sup> <a name="FooterTextInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerTextInput"></a>

```csharp
public string FooterTextInput { get; }
```

- *Type:* string

---

##### `HeaderTextInput`<sup>Optional</sup> <a name="HeaderTextInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerTextInput"></a>

```csharp
public string HeaderTextInput { get; }
```

- *Type:* string

---

##### `LogoPathInput`<sup>Optional</sup> <a name="LogoPathInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPathInput"></a>

```csharp
public string LogoPathInput { get; }
```

- *Type:* string

---

##### `TextColorInput`<sup>Optional</sup> <a name="TextColorInput" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColorInput"></a>

```csharp
public string TextColorInput { get; }
```

- *Type:* string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.backgroundColor"></a>

```csharp
public string BackgroundColor { get; }
```

- *Type:* string

---

##### `FooterText`<sup>Required</sup> <a name="FooterText" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.footerText"></a>

```csharp
public string FooterText { get; }
```

- *Type:* string

---

##### `HeaderText`<sup>Required</sup> <a name="HeaderText" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.headerText"></a>

```csharp
public string HeaderText { get; }
```

- *Type:* string

---

##### `LogoPath`<sup>Required</sup> <a name="LogoPath" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.logoPath"></a>

```csharp
public string LogoPath { get; }
```

- *Type:* string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.textColor"></a>

```csharp
public string TextColor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustOrganization.ZeroTrustOrganizationLoginDesignOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



