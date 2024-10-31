# `zeroTrustAccessApplication` Submodule <a name="`zeroTrustAccessApplication` Submodule" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustAccessApplication <a name="ZeroTrustAccessApplication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application cloudflare_zero_trust_access_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplication(Construct Scope, string Id, ZeroTrustAccessApplicationConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig">ZeroTrustAccessApplicationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig">ZeroTrustAccessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putCorsHeaders">PutCorsHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putFooterLinks">PutFooterLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putLandingPageDesign">PutLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putSaasApp">PutSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putScimConfig">PutScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putTargetCriteria">PutTargetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAllowAuthenticateViaWarp">ResetAllowAuthenticateViaWarp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAllowedIdps">ResetAllowedIdps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAppLauncherLogoUrl">ResetAppLauncherLogoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAppLauncherVisible">ResetAppLauncherVisible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAutoRedirectToIdentity">ResetAutoRedirectToIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetBgColor">ResetBgColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCorsHeaders">ResetCorsHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomDenyMessage">ResetCustomDenyMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomDenyUrl">ResetCustomDenyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomNonIdentityDenyUrl">ResetCustomNonIdentityDenyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomPages">ResetCustomPages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetEnableBindingCookie">ResetEnableBindingCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetFooterLinks">ResetFooterLinks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetHeaderBgColor">ResetHeaderBgColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetHttpOnlyCookieAttribute">ResetHttpOnlyCookieAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetLandingPageDesign">ResetLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetLogoUrl">ResetLogoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetOptionsPreflightBypass">ResetOptionsPreflightBypass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSaasApp">ResetSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSameSiteCookieAttribute">ResetSameSiteCookieAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetScimConfig">ResetScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSelfHostedDomains">ResetSelfHostedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetServiceAuth401Redirect">ResetServiceAuth401Redirect</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSkipAppLauncherLoginPage">ResetSkipAppLauncherLoginPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSkipInterstitial">ResetSkipInterstitial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetTargetCriteria">ResetTargetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCorsHeaders` <a name="PutCorsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putCorsHeaders"></a>

```csharp
private void PutCorsHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putCorsHeaders.parameter.value"></a>

- *Type:* object

---

##### `PutFooterLinks` <a name="PutFooterLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putFooterLinks"></a>

```csharp
private void PutFooterLinks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putFooterLinks.parameter.value"></a>

- *Type:* object

---

##### `PutLandingPageDesign` <a name="PutLandingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putLandingPageDesign"></a>

```csharp
private void PutLandingPageDesign(ZeroTrustAccessApplicationLandingPageDesign Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putLandingPageDesign.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a>

---

##### `PutSaasApp` <a name="PutSaasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putSaasApp"></a>

```csharp
private void PutSaasApp(ZeroTrustAccessApplicationSaasApp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putSaasApp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a>

---

##### `PutScimConfig` <a name="PutScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putScimConfig"></a>

```csharp
private void PutScimConfig(ZeroTrustAccessApplicationScimConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putScimConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a>

---

##### `PutTargetCriteria` <a name="PutTargetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putTargetCriteria"></a>

```csharp
private void PutTargetCriteria(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.putTargetCriteria.parameter.value"></a>

- *Type:* object

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAllowAuthenticateViaWarp` <a name="ResetAllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAllowAuthenticateViaWarp"></a>

```csharp
private void ResetAllowAuthenticateViaWarp()
```

##### `ResetAllowedIdps` <a name="ResetAllowedIdps" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAllowedIdps"></a>

```csharp
private void ResetAllowedIdps()
```

##### `ResetAppLauncherLogoUrl` <a name="ResetAppLauncherLogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAppLauncherLogoUrl"></a>

```csharp
private void ResetAppLauncherLogoUrl()
```

##### `ResetAppLauncherVisible` <a name="ResetAppLauncherVisible" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAppLauncherVisible"></a>

```csharp
private void ResetAppLauncherVisible()
```

##### `ResetAutoRedirectToIdentity` <a name="ResetAutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetAutoRedirectToIdentity"></a>

```csharp
private void ResetAutoRedirectToIdentity()
```

##### `ResetBgColor` <a name="ResetBgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetBgColor"></a>

```csharp
private void ResetBgColor()
```

##### `ResetCorsHeaders` <a name="ResetCorsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCorsHeaders"></a>

```csharp
private void ResetCorsHeaders()
```

##### `ResetCustomDenyMessage` <a name="ResetCustomDenyMessage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomDenyMessage"></a>

```csharp
private void ResetCustomDenyMessage()
```

##### `ResetCustomDenyUrl` <a name="ResetCustomDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomDenyUrl"></a>

```csharp
private void ResetCustomDenyUrl()
```

##### `ResetCustomNonIdentityDenyUrl` <a name="ResetCustomNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomNonIdentityDenyUrl"></a>

```csharp
private void ResetCustomNonIdentityDenyUrl()
```

##### `ResetCustomPages` <a name="ResetCustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetCustomPages"></a>

```csharp
private void ResetCustomPages()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetEnableBindingCookie` <a name="ResetEnableBindingCookie" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetEnableBindingCookie"></a>

```csharp
private void ResetEnableBindingCookie()
```

##### `ResetFooterLinks` <a name="ResetFooterLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetFooterLinks"></a>

```csharp
private void ResetFooterLinks()
```

##### `ResetHeaderBgColor` <a name="ResetHeaderBgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetHeaderBgColor"></a>

```csharp
private void ResetHeaderBgColor()
```

##### `ResetHttpOnlyCookieAttribute` <a name="ResetHttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetHttpOnlyCookieAttribute"></a>

```csharp
private void ResetHttpOnlyCookieAttribute()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLandingPageDesign` <a name="ResetLandingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetLandingPageDesign"></a>

```csharp
private void ResetLandingPageDesign()
```

##### `ResetLogoUrl` <a name="ResetLogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetLogoUrl"></a>

```csharp
private void ResetLogoUrl()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOptionsPreflightBypass` <a name="ResetOptionsPreflightBypass" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetOptionsPreflightBypass"></a>

```csharp
private void ResetOptionsPreflightBypass()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

##### `ResetSaasApp` <a name="ResetSaasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSaasApp"></a>

```csharp
private void ResetSaasApp()
```

##### `ResetSameSiteCookieAttribute` <a name="ResetSameSiteCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSameSiteCookieAttribute"></a>

```csharp
private void ResetSameSiteCookieAttribute()
```

##### `ResetScimConfig` <a name="ResetScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetScimConfig"></a>

```csharp
private void ResetScimConfig()
```

##### `ResetSelfHostedDomains` <a name="ResetSelfHostedDomains" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSelfHostedDomains"></a>

```csharp
private void ResetSelfHostedDomains()
```

##### `ResetServiceAuth401Redirect` <a name="ResetServiceAuth401Redirect" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetServiceAuth401Redirect"></a>

```csharp
private void ResetServiceAuth401Redirect()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSessionDuration"></a>

```csharp
private void ResetSessionDuration()
```

##### `ResetSkipAppLauncherLoginPage` <a name="ResetSkipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSkipAppLauncherLoginPage"></a>

```csharp
private void ResetSkipAppLauncherLoginPage()
```

##### `ResetSkipInterstitial` <a name="ResetSkipInterstitial" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetSkipInterstitial"></a>

```csharp
private void ResetSkipInterstitial()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargetCriteria` <a name="ResetTargetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetTargetCriteria"></a>

```csharp
private void ResetTargetCriteria()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ZeroTrustAccessApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessApplication.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessApplication.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessApplication.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

ZeroTrustAccessApplication.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ZeroTrustAccessApplication resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustAccessApplication to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustAccessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ZeroTrustAccessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.aud">Aud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.corsHeaders">CorsHeaders</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList">ZeroTrustAccessApplicationCorsHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.footerLinks">FooterLinks</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList">ZeroTrustAccessApplicationFooterLinksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.landingPageDesign">LandingPageDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference">ZeroTrustAccessApplicationLandingPageDesignOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.saasApp">SaasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference">ZeroTrustAccessApplicationSaasAppOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.scimConfig">ScimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference">ZeroTrustAccessApplicationScimConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.targetCriteria">TargetCriteria</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList">ZeroTrustAccessApplicationTargetCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowAuthenticateViaWarpInput">AllowAuthenticateViaWarpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowedIdpsInput">AllowedIdpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherLogoUrlInput">AppLauncherLogoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherVisibleInput">AppLauncherVisibleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.autoRedirectToIdentityInput">AutoRedirectToIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.bgColorInput">BgColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.corsHeadersInput">CorsHeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyMessageInput">CustomDenyMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyUrlInput">CustomDenyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customNonIdentityDenyUrlInput">CustomNonIdentityDenyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customPagesInput">CustomPagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.enableBindingCookieInput">EnableBindingCookieInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.footerLinksInput">FooterLinksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.headerBgColorInput">HeaderBgColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.httpOnlyCookieAttributeInput">HttpOnlyCookieAttributeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.landingPageDesignInput">LandingPageDesignInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.logoUrlInput">LogoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.optionsPreflightBypassInput">OptionsPreflightBypassInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.saasAppInput">SaasAppInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sameSiteCookieAttributeInput">SameSiteCookieAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.scimConfigInput">ScimConfigInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.selfHostedDomainsInput">SelfHostedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.serviceAuth401RedirectInput">ServiceAuth401RedirectInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sessionDurationInput">SessionDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipAppLauncherLoginPageInput">SkipAppLauncherLoginPageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipInterstitialInput">SkipInterstitialInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.targetCriteriaInput">TargetCriteriaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowAuthenticateViaWarp">AllowAuthenticateViaWarp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowedIdps">AllowedIdps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherLogoUrl">AppLauncherLogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherVisible">AppLauncherVisible</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.bgColor">BgColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyMessage">CustomDenyMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyUrl">CustomDenyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customNonIdentityDenyUrl">CustomNonIdentityDenyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customPages">CustomPages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.enableBindingCookie">EnableBindingCookie</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.headerBgColor">HeaderBgColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.httpOnlyCookieAttribute">HttpOnlyCookieAttribute</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.logoUrl">LogoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.optionsPreflightBypass">OptionsPreflightBypass</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sameSiteCookieAttribute">SameSiteCookieAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.selfHostedDomains">SelfHostedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.serviceAuth401Redirect">ServiceAuth401Redirect</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipAppLauncherLoginPage">SkipAppLauncherLoginPage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipInterstitial">SkipInterstitial</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Aud`<sup>Required</sup> <a name="Aud" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.aud"></a>

```csharp
public string Aud { get; }
```

- *Type:* string

---

##### `CorsHeaders`<sup>Required</sup> <a name="CorsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.corsHeaders"></a>

```csharp
public ZeroTrustAccessApplicationCorsHeadersList CorsHeaders { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList">ZeroTrustAccessApplicationCorsHeadersList</a>

---

##### `FooterLinks`<sup>Required</sup> <a name="FooterLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.footerLinks"></a>

```csharp
public ZeroTrustAccessApplicationFooterLinksList FooterLinks { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList">ZeroTrustAccessApplicationFooterLinksList</a>

---

##### `LandingPageDesign`<sup>Required</sup> <a name="LandingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.landingPageDesign"></a>

```csharp
public ZeroTrustAccessApplicationLandingPageDesignOutputReference LandingPageDesign { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference">ZeroTrustAccessApplicationLandingPageDesignOutputReference</a>

---

##### `SaasApp`<sup>Required</sup> <a name="SaasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.saasApp"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppOutputReference SaasApp { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference">ZeroTrustAccessApplicationSaasAppOutputReference</a>

---

##### `ScimConfig`<sup>Required</sup> <a name="ScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.scimConfig"></a>

```csharp
public ZeroTrustAccessApplicationScimConfigOutputReference ScimConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference">ZeroTrustAccessApplicationScimConfigOutputReference</a>

---

##### `TargetCriteria`<sup>Required</sup> <a name="TargetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.targetCriteria"></a>

```csharp
public ZeroTrustAccessApplicationTargetCriteriaList TargetCriteria { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList">ZeroTrustAccessApplicationTargetCriteriaList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AllowAuthenticateViaWarpInput`<sup>Optional</sup> <a name="AllowAuthenticateViaWarpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowAuthenticateViaWarpInput"></a>

```csharp
public object AllowAuthenticateViaWarpInput { get; }
```

- *Type:* object

---

##### `AllowedIdpsInput`<sup>Optional</sup> <a name="AllowedIdpsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowedIdpsInput"></a>

```csharp
public string[] AllowedIdpsInput { get; }
```

- *Type:* string[]

---

##### `AppLauncherLogoUrlInput`<sup>Optional</sup> <a name="AppLauncherLogoUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherLogoUrlInput"></a>

```csharp
public string AppLauncherLogoUrlInput { get; }
```

- *Type:* string

---

##### `AppLauncherVisibleInput`<sup>Optional</sup> <a name="AppLauncherVisibleInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherVisibleInput"></a>

```csharp
public object AppLauncherVisibleInput { get; }
```

- *Type:* object

---

##### `AutoRedirectToIdentityInput`<sup>Optional</sup> <a name="AutoRedirectToIdentityInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.autoRedirectToIdentityInput"></a>

```csharp
public object AutoRedirectToIdentityInput { get; }
```

- *Type:* object

---

##### `BgColorInput`<sup>Optional</sup> <a name="BgColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.bgColorInput"></a>

```csharp
public string BgColorInput { get; }
```

- *Type:* string

---

##### `CorsHeadersInput`<sup>Optional</sup> <a name="CorsHeadersInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.corsHeadersInput"></a>

```csharp
public object CorsHeadersInput { get; }
```

- *Type:* object

---

##### `CustomDenyMessageInput`<sup>Optional</sup> <a name="CustomDenyMessageInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyMessageInput"></a>

```csharp
public string CustomDenyMessageInput { get; }
```

- *Type:* string

---

##### `CustomDenyUrlInput`<sup>Optional</sup> <a name="CustomDenyUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyUrlInput"></a>

```csharp
public string CustomDenyUrlInput { get; }
```

- *Type:* string

---

##### `CustomNonIdentityDenyUrlInput`<sup>Optional</sup> <a name="CustomNonIdentityDenyUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customNonIdentityDenyUrlInput"></a>

```csharp
public string CustomNonIdentityDenyUrlInput { get; }
```

- *Type:* string

---

##### `CustomPagesInput`<sup>Optional</sup> <a name="CustomPagesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customPagesInput"></a>

```csharp
public string[] CustomPagesInput { get; }
```

- *Type:* string[]

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `EnableBindingCookieInput`<sup>Optional</sup> <a name="EnableBindingCookieInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.enableBindingCookieInput"></a>

```csharp
public object EnableBindingCookieInput { get; }
```

- *Type:* object

---

##### `FooterLinksInput`<sup>Optional</sup> <a name="FooterLinksInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.footerLinksInput"></a>

```csharp
public object FooterLinksInput { get; }
```

- *Type:* object

---

##### `HeaderBgColorInput`<sup>Optional</sup> <a name="HeaderBgColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.headerBgColorInput"></a>

```csharp
public string HeaderBgColorInput { get; }
```

- *Type:* string

---

##### `HttpOnlyCookieAttributeInput`<sup>Optional</sup> <a name="HttpOnlyCookieAttributeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.httpOnlyCookieAttributeInput"></a>

```csharp
public object HttpOnlyCookieAttributeInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LandingPageDesignInput`<sup>Optional</sup> <a name="LandingPageDesignInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.landingPageDesignInput"></a>

```csharp
public ZeroTrustAccessApplicationLandingPageDesign LandingPageDesignInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a>

---

##### `LogoUrlInput`<sup>Optional</sup> <a name="LogoUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.logoUrlInput"></a>

```csharp
public string LogoUrlInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionsPreflightBypassInput`<sup>Optional</sup> <a name="OptionsPreflightBypassInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.optionsPreflightBypassInput"></a>

```csharp
public object OptionsPreflightBypassInput { get; }
```

- *Type:* object

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `SaasAppInput`<sup>Optional</sup> <a name="SaasAppInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.saasAppInput"></a>

```csharp
public ZeroTrustAccessApplicationSaasApp SaasAppInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a>

---

##### `SameSiteCookieAttributeInput`<sup>Optional</sup> <a name="SameSiteCookieAttributeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sameSiteCookieAttributeInput"></a>

```csharp
public string SameSiteCookieAttributeInput { get; }
```

- *Type:* string

---

##### `ScimConfigInput`<sup>Optional</sup> <a name="ScimConfigInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.scimConfigInput"></a>

```csharp
public ZeroTrustAccessApplicationScimConfig ScimConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a>

---

##### `SelfHostedDomainsInput`<sup>Optional</sup> <a name="SelfHostedDomainsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.selfHostedDomainsInput"></a>

```csharp
public string[] SelfHostedDomainsInput { get; }
```

- *Type:* string[]

---

##### `ServiceAuth401RedirectInput`<sup>Optional</sup> <a name="ServiceAuth401RedirectInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.serviceAuth401RedirectInput"></a>

```csharp
public object ServiceAuth401RedirectInput { get; }
```

- *Type:* object

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sessionDurationInput"></a>

```csharp
public string SessionDurationInput { get; }
```

- *Type:* string

---

##### `SkipAppLauncherLoginPageInput`<sup>Optional</sup> <a name="SkipAppLauncherLoginPageInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipAppLauncherLoginPageInput"></a>

```csharp
public object SkipAppLauncherLoginPageInput { get; }
```

- *Type:* object

---

##### `SkipInterstitialInput`<sup>Optional</sup> <a name="SkipInterstitialInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipInterstitialInput"></a>

```csharp
public object SkipInterstitialInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TargetCriteriaInput`<sup>Optional</sup> <a name="TargetCriteriaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.targetCriteriaInput"></a>

```csharp
public object TargetCriteriaInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AllowAuthenticateViaWarp`<sup>Required</sup> <a name="AllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowAuthenticateViaWarp"></a>

```csharp
public object AllowAuthenticateViaWarp { get; }
```

- *Type:* object

---

##### `AllowedIdps`<sup>Required</sup> <a name="AllowedIdps" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.allowedIdps"></a>

```csharp
public string[] AllowedIdps { get; }
```

- *Type:* string[]

---

##### `AppLauncherLogoUrl`<sup>Required</sup> <a name="AppLauncherLogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherLogoUrl"></a>

```csharp
public string AppLauncherLogoUrl { get; }
```

- *Type:* string

---

##### `AppLauncherVisible`<sup>Required</sup> <a name="AppLauncherVisible" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.appLauncherVisible"></a>

```csharp
public object AppLauncherVisible { get; }
```

- *Type:* object

---

##### `AutoRedirectToIdentity`<sup>Required</sup> <a name="AutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.autoRedirectToIdentity"></a>

```csharp
public object AutoRedirectToIdentity { get; }
```

- *Type:* object

---

##### `BgColor`<sup>Required</sup> <a name="BgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.bgColor"></a>

```csharp
public string BgColor { get; }
```

- *Type:* string

---

##### `CustomDenyMessage`<sup>Required</sup> <a name="CustomDenyMessage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyMessage"></a>

```csharp
public string CustomDenyMessage { get; }
```

- *Type:* string

---

##### `CustomDenyUrl`<sup>Required</sup> <a name="CustomDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customDenyUrl"></a>

```csharp
public string CustomDenyUrl { get; }
```

- *Type:* string

---

##### `CustomNonIdentityDenyUrl`<sup>Required</sup> <a name="CustomNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customNonIdentityDenyUrl"></a>

```csharp
public string CustomNonIdentityDenyUrl { get; }
```

- *Type:* string

---

##### `CustomPages`<sup>Required</sup> <a name="CustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.customPages"></a>

```csharp
public string[] CustomPages { get; }
```

- *Type:* string[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `EnableBindingCookie`<sup>Required</sup> <a name="EnableBindingCookie" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.enableBindingCookie"></a>

```csharp
public object EnableBindingCookie { get; }
```

- *Type:* object

---

##### `HeaderBgColor`<sup>Required</sup> <a name="HeaderBgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.headerBgColor"></a>

```csharp
public string HeaderBgColor { get; }
```

- *Type:* string

---

##### `HttpOnlyCookieAttribute`<sup>Required</sup> <a name="HttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.httpOnlyCookieAttribute"></a>

```csharp
public object HttpOnlyCookieAttribute { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogoUrl`<sup>Required</sup> <a name="LogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.logoUrl"></a>

```csharp
public string LogoUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OptionsPreflightBypass`<sup>Required</sup> <a name="OptionsPreflightBypass" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.optionsPreflightBypass"></a>

```csharp
public object OptionsPreflightBypass { get; }
```

- *Type:* object

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `SameSiteCookieAttribute`<sup>Required</sup> <a name="SameSiteCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sameSiteCookieAttribute"></a>

```csharp
public string SameSiteCookieAttribute { get; }
```

- *Type:* string

---

##### `SelfHostedDomains`<sup>Required</sup> <a name="SelfHostedDomains" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.selfHostedDomains"></a>

```csharp
public string[] SelfHostedDomains { get; }
```

- *Type:* string[]

---

##### `ServiceAuth401Redirect`<sup>Required</sup> <a name="ServiceAuth401Redirect" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.serviceAuth401Redirect"></a>

```csharp
public object ServiceAuth401Redirect { get; }
```

- *Type:* object

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; }
```

- *Type:* string

---

##### `SkipAppLauncherLoginPage`<sup>Required</sup> <a name="SkipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipAppLauncherLoginPage"></a>

```csharp
public object SkipAppLauncherLoginPage { get; }
```

- *Type:* object

---

##### `SkipInterstitial`<sup>Required</sup> <a name="SkipInterstitial" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.skipInterstitial"></a>

```csharp
public object SkipInterstitial { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplication.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustAccessApplicationConfig <a name="ZeroTrustAccessApplicationConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AccountId = null,
    object AllowAuthenticateViaWarp = null,
    string[] AllowedIdps = null,
    string AppLauncherLogoUrl = null,
    object AppLauncherVisible = null,
    object AutoRedirectToIdentity = null,
    string BgColor = null,
    object CorsHeaders = null,
    string CustomDenyMessage = null,
    string CustomDenyUrl = null,
    string CustomNonIdentityDenyUrl = null,
    string[] CustomPages = null,
    string Domain = null,
    object EnableBindingCookie = null,
    object FooterLinks = null,
    string HeaderBgColor = null,
    object HttpOnlyCookieAttribute = null,
    string Id = null,
    ZeroTrustAccessApplicationLandingPageDesign LandingPageDesign = null,
    string LogoUrl = null,
    string Name = null,
    object OptionsPreflightBypass = null,
    string[] Policies = null,
    ZeroTrustAccessApplicationSaasApp SaasApp = null,
    string SameSiteCookieAttribute = null,
    ZeroTrustAccessApplicationScimConfig ScimConfig = null,
    string[] SelfHostedDomains = null,
    object ServiceAuth401Redirect = null,
    string SessionDuration = null,
    object SkipAppLauncherLoginPage = null,
    object SkipInterstitial = null,
    string[] Tags = null,
    object TargetCriteria = null,
    string Type = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier to target for the resource. Conflicts with `zone_id`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.allowAuthenticateViaWarp">AllowAuthenticateViaWarp</a></code> | <code>object</code> | When set to true, users can authenticate to this application using their WARP session. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.allowedIdps">AllowedIdps</a></code> | <code>string[]</code> | The identity providers selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.appLauncherLogoUrl">AppLauncherLogoUrl</a></code> | <code>string</code> | The logo URL of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.appLauncherVisible">AppLauncherVisible</a></code> | <code>object</code> | Option to show/hide applications in App Launcher. Defaults to `true`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.autoRedirectToIdentity">AutoRedirectToIdentity</a></code> | <code>object</code> | Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.bgColor">BgColor</a></code> | <code>string</code> | The background color of the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.corsHeaders">CorsHeaders</a></code> | <code>object</code> | cors_headers block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customDenyMessage">CustomDenyMessage</a></code> | <code>string</code> | Option that returns a custom error message when a user is denied access to the application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customDenyUrl">CustomDenyUrl</a></code> | <code>string</code> | Option that redirects to a custom URL when a user is denied access to the application via identity based rules. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customNonIdentityDenyUrl">CustomNonIdentityDenyUrl</a></code> | <code>string</code> | Option that redirects to a custom URL when a user is denied access to the application via non identity rules. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customPages">CustomPages</a></code> | <code>string[]</code> | The custom pages selected for the application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.domain">Domain</a></code> | <code>string</code> | The primary hostname and path that Access will secure. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.enableBindingCookie">EnableBindingCookie</a></code> | <code>object</code> | Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.footerLinks">FooterLinks</a></code> | <code>object</code> | footer_links block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.headerBgColor">HeaderBgColor</a></code> | <code>string</code> | The background color of the header bar in the app launcher. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.httpOnlyCookieAttribute">HttpOnlyCookieAttribute</a></code> | <code>object</code> | Option to add the `HttpOnly` cookie flag to access tokens. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.landingPageDesign">LandingPageDesign</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a></code> | landing_page_design block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.logoUrl">LogoUrl</a></code> | <code>string</code> | Image URL for the logo shown in the app launcher dashboard. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.name">Name</a></code> | <code>string</code> | Friendly name of the Access Application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.optionsPreflightBypass">OptionsPreflightBypass</a></code> | <code>object</code> | Allows options preflight requests to bypass Access authentication and go directly to the origin. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.policies">Policies</a></code> | <code>string[]</code> | The policies associated with the application, in ascending order of precedence. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.saasApp">SaasApp</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a></code> | saas_app block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.sameSiteCookieAttribute">SameSiteCookieAttribute</a></code> | <code>string</code> | Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.scimConfig">ScimConfig</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a></code> | scim_config block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.selfHostedDomains">SelfHostedDomains</a></code> | <code>string[]</code> | List of domains that access will secure. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.serviceAuth401Redirect">ServiceAuth401Redirect</a></code> | <code>object</code> | Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.sessionDuration">SessionDuration</a></code> | <code>string</code> | How often a user will be forced to re-authorise. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.skipAppLauncherLoginPage">SkipAppLauncherLoginPage</a></code> | <code>object</code> | Option to skip the App Launcher landing page. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.skipInterstitial">SkipInterstitial</a></code> | <code>object</code> | Option to skip the authorization interstitial when using the CLI. Defaults to `false`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.tags">Tags</a></code> | <code>string[]</code> | The itags associated with the application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.targetCriteria">TargetCriteria</a></code> | <code>object</code> | target_criteria block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.type">Type</a></code> | <code>string</code> | The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | The zone identifier to target for the resource. Conflicts with `account_id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier to target for the resource. Conflicts with `zone_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#account_id ZeroTrustAccessApplication#account_id}

---

##### `AllowAuthenticateViaWarp`<sup>Optional</sup> <a name="AllowAuthenticateViaWarp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.allowAuthenticateViaWarp"></a>

```csharp
public object AllowAuthenticateViaWarp { get; set; }
```

- *Type:* object

When set to true, users can authenticate to this application using their WARP session.

When set to false this application will always require direct IdP authentication. This setting always overrides the organization setting for WARP authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#allow_authenticate_via_warp ZeroTrustAccessApplication#allow_authenticate_via_warp}

---

##### `AllowedIdps`<sup>Optional</sup> <a name="AllowedIdps" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.allowedIdps"></a>

```csharp
public string[] AllowedIdps { get; set; }
```

- *Type:* string[]

The identity providers selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#allowed_idps ZeroTrustAccessApplication#allowed_idps}

---

##### `AppLauncherLogoUrl`<sup>Optional</sup> <a name="AppLauncherLogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.appLauncherLogoUrl"></a>

```csharp
public string AppLauncherLogoUrl { get; set; }
```

- *Type:* string

The logo URL of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#app_launcher_logo_url ZeroTrustAccessApplication#app_launcher_logo_url}

---

##### `AppLauncherVisible`<sup>Optional</sup> <a name="AppLauncherVisible" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.appLauncherVisible"></a>

```csharp
public object AppLauncherVisible { get; set; }
```

- *Type:* object

Option to show/hide applications in App Launcher. Defaults to `true`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#app_launcher_visible ZeroTrustAccessApplication#app_launcher_visible}

---

##### `AutoRedirectToIdentity`<sup>Optional</sup> <a name="AutoRedirectToIdentity" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.autoRedirectToIdentity"></a>

```csharp
public object AutoRedirectToIdentity { get; set; }
```

- *Type:* object

Option to skip identity provider selection if only one is configured in `allowed_idps`. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#auto_redirect_to_identity ZeroTrustAccessApplication#auto_redirect_to_identity}

---

##### `BgColor`<sup>Optional</sup> <a name="BgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.bgColor"></a>

```csharp
public string BgColor { get; set; }
```

- *Type:* string

The background color of the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#bg_color ZeroTrustAccessApplication#bg_color}

---

##### `CorsHeaders`<sup>Optional</sup> <a name="CorsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.corsHeaders"></a>

```csharp
public object CorsHeaders { get; set; }
```

- *Type:* object

cors_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#cors_headers ZeroTrustAccessApplication#cors_headers}

---

##### `CustomDenyMessage`<sup>Optional</sup> <a name="CustomDenyMessage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customDenyMessage"></a>

```csharp
public string CustomDenyMessage { get; set; }
```

- *Type:* string

Option that returns a custom error message when a user is denied access to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#custom_deny_message ZeroTrustAccessApplication#custom_deny_message}

---

##### `CustomDenyUrl`<sup>Optional</sup> <a name="CustomDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customDenyUrl"></a>

```csharp
public string CustomDenyUrl { get; set; }
```

- *Type:* string

Option that redirects to a custom URL when a user is denied access to the application via identity based rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#custom_deny_url ZeroTrustAccessApplication#custom_deny_url}

---

##### `CustomNonIdentityDenyUrl`<sup>Optional</sup> <a name="CustomNonIdentityDenyUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customNonIdentityDenyUrl"></a>

```csharp
public string CustomNonIdentityDenyUrl { get; set; }
```

- *Type:* string

Option that redirects to a custom URL when a user is denied access to the application via non identity rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#custom_non_identity_deny_url ZeroTrustAccessApplication#custom_non_identity_deny_url}

---

##### `CustomPages`<sup>Optional</sup> <a name="CustomPages" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.customPages"></a>

```csharp
public string[] CustomPages { get; set; }
```

- *Type:* string[]

The custom pages selected for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#custom_pages ZeroTrustAccessApplication#custom_pages}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The primary hostname and path that Access will secure.

If the app is visible in the App Launcher dashboard, this is the domain that will be displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#domain ZeroTrustAccessApplication#domain}

---

##### `EnableBindingCookie`<sup>Optional</sup> <a name="EnableBindingCookie" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.enableBindingCookie"></a>

```csharp
public object EnableBindingCookie { get; set; }
```

- *Type:* object

Option to provide increased security against compromised authorization tokens and CSRF attacks by requiring an additional "binding" cookie on requests.

Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#enable_binding_cookie ZeroTrustAccessApplication#enable_binding_cookie}

---

##### `FooterLinks`<sup>Optional</sup> <a name="FooterLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.footerLinks"></a>

```csharp
public object FooterLinks { get; set; }
```

- *Type:* object

footer_links block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#footer_links ZeroTrustAccessApplication#footer_links}

---

##### `HeaderBgColor`<sup>Optional</sup> <a name="HeaderBgColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.headerBgColor"></a>

```csharp
public string HeaderBgColor { get; set; }
```

- *Type:* string

The background color of the header bar in the app launcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#header_bg_color ZeroTrustAccessApplication#header_bg_color}

---

##### `HttpOnlyCookieAttribute`<sup>Optional</sup> <a name="HttpOnlyCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.httpOnlyCookieAttribute"></a>

```csharp
public object HttpOnlyCookieAttribute { get; set; }
```

- *Type:* object

Option to add the `HttpOnly` cookie flag to access tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#http_only_cookie_attribute ZeroTrustAccessApplication#http_only_cookie_attribute}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#id ZeroTrustAccessApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LandingPageDesign`<sup>Optional</sup> <a name="LandingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.landingPageDesign"></a>

```csharp
public ZeroTrustAccessApplicationLandingPageDesign LandingPageDesign { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a>

landing_page_design block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#landing_page_design ZeroTrustAccessApplication#landing_page_design}

---

##### `LogoUrl`<sup>Optional</sup> <a name="LogoUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.logoUrl"></a>

```csharp
public string LogoUrl { get; set; }
```

- *Type:* string

Image URL for the logo shown in the app launcher dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#logo_url ZeroTrustAccessApplication#logo_url}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Friendly name of the Access Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `OptionsPreflightBypass`<sup>Optional</sup> <a name="OptionsPreflightBypass" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.optionsPreflightBypass"></a>

```csharp
public object OptionsPreflightBypass { get; set; }
```

- *Type:* object

Allows options preflight requests to bypass Access authentication and go directly to the origin.

Cannot turn on if cors_headers is set. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#options_preflight_bypass ZeroTrustAccessApplication#options_preflight_bypass}

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

The policies associated with the application, in ascending order of precedence.

Warning: Do not use this field while you still have this application ID referenced as `application_id` in any `cloudflare_access_policy` resource, as it can result in an inconsistent state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#policies ZeroTrustAccessApplication#policies}

---

##### `SaasApp`<sup>Optional</sup> <a name="SaasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.saasApp"></a>

```csharp
public ZeroTrustAccessApplicationSaasApp SaasApp { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a>

saas_app block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#saas_app ZeroTrustAccessApplication#saas_app}

---

##### `SameSiteCookieAttribute`<sup>Optional</sup> <a name="SameSiteCookieAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.sameSiteCookieAttribute"></a>

```csharp
public string SameSiteCookieAttribute { get; set; }
```

- *Type:* string

Defines the same-site cookie setting for access tokens. Available values: `none`, `lax`, `strict`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#same_site_cookie_attribute ZeroTrustAccessApplication#same_site_cookie_attribute}

---

##### `ScimConfig`<sup>Optional</sup> <a name="ScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.scimConfig"></a>

```csharp
public ZeroTrustAccessApplicationScimConfig ScimConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a>

scim_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#scim_config ZeroTrustAccessApplication#scim_config}

---

##### `SelfHostedDomains`<sup>Optional</sup> <a name="SelfHostedDomains" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.selfHostedDomains"></a>

```csharp
public string[] SelfHostedDomains { get; set; }
```

- *Type:* string[]

List of domains that access will secure.

Only present for self_hosted, vnc, and ssh applications. Always includes the value set as `domain`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#self_hosted_domains ZeroTrustAccessApplication#self_hosted_domains}

---

##### `ServiceAuth401Redirect`<sup>Optional</sup> <a name="ServiceAuth401Redirect" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.serviceAuth401Redirect"></a>

```csharp
public object ServiceAuth401Redirect { get; set; }
```

- *Type:* object

Option to return a 401 status code in service authentication rules on failed requests. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#service_auth_401_redirect ZeroTrustAccessApplication#service_auth_401_redirect}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.sessionDuration"></a>

```csharp
public string SessionDuration { get; set; }
```

- *Type:* string

How often a user will be forced to re-authorise.

Must be in the format `48h` or `2h45m`. Defaults to `24h`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#session_duration ZeroTrustAccessApplication#session_duration}

---

##### `SkipAppLauncherLoginPage`<sup>Optional</sup> <a name="SkipAppLauncherLoginPage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.skipAppLauncherLoginPage"></a>

```csharp
public object SkipAppLauncherLoginPage { get; set; }
```

- *Type:* object

Option to skip the App Launcher landing page. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#skip_app_launcher_login_page ZeroTrustAccessApplication#skip_app_launcher_login_page}

---

##### `SkipInterstitial`<sup>Optional</sup> <a name="SkipInterstitial" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.skipInterstitial"></a>

```csharp
public object SkipInterstitial { get; set; }
```

- *Type:* object

Option to skip the authorization interstitial when using the CLI. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#skip_interstitial ZeroTrustAccessApplication#skip_interstitial}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

The itags associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#tags ZeroTrustAccessApplication#tags}

---

##### `TargetCriteria`<sup>Optional</sup> <a name="TargetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.targetCriteria"></a>

```csharp
public object TargetCriteria { get; set; }
```

- *Type:* object

target_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#target_criteria ZeroTrustAccessApplication#target_criteria}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The application type. Available values: `app_launcher`, `bookmark`, `biso`, `dash_sso`, `saas`, `self_hosted`, `ssh`, `vnc`, `warp`, `infrastructure`. Defaults to `self_hosted`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#type ZeroTrustAccessApplication#type}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

The zone identifier to target for the resource. Conflicts with `account_id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#zone_id ZeroTrustAccessApplication#zone_id}

---

### ZeroTrustAccessApplicationCorsHeaders <a name="ZeroTrustAccessApplicationCorsHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationCorsHeaders {
    object AllowAllHeaders = null,
    object AllowAllMethods = null,
    object AllowAllOrigins = null,
    object AllowCredentials = null,
    string[] AllowedHeaders = null,
    string[] AllowedMethods = null,
    string[] AllowedOrigins = null,
    double MaxAge = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllHeaders">AllowAllHeaders</a></code> | <code>object</code> | Value to determine whether all HTTP headers are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllMethods">AllowAllMethods</a></code> | <code>object</code> | Value to determine whether all methods are exposed. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllOrigins">AllowAllOrigins</a></code> | <code>object</code> | Value to determine whether all origins are permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowCredentials">AllowCredentials</a></code> | <code>object</code> | Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | List of HTTP headers to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | List of methods to expose via CORS. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | List of origins permitted to make CORS requests. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.maxAge">MaxAge</a></code> | <code>double</code> | The maximum time a preflight request will be cached. |

---

##### `AllowAllHeaders`<sup>Optional</sup> <a name="AllowAllHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllHeaders"></a>

```csharp
public object AllowAllHeaders { get; set; }
```

- *Type:* object

Value to determine whether all HTTP headers are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#allow_all_headers ZeroTrustAccessApplication#allow_all_headers}

---

##### `AllowAllMethods`<sup>Optional</sup> <a name="AllowAllMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllMethods"></a>

```csharp
public object AllowAllMethods { get; set; }
```

- *Type:* object

Value to determine whether all methods are exposed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#allow_all_methods ZeroTrustAccessApplication#allow_all_methods}

---

##### `AllowAllOrigins`<sup>Optional</sup> <a name="AllowAllOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowAllOrigins"></a>

```csharp
public object AllowAllOrigins { get; set; }
```

- *Type:* object

Value to determine whether all origins are permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#allow_all_origins ZeroTrustAccessApplication#allow_all_origins}

---

##### `AllowCredentials`<sup>Optional</sup> <a name="AllowCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowCredentials"></a>

```csharp
public object AllowCredentials { get; set; }
```

- *Type:* object

Value to determine if credentials (cookies, authorization headers, or TLS client certificates) are included with requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#allow_credentials ZeroTrustAccessApplication#allow_credentials}

---

##### `AllowedHeaders`<sup>Optional</sup> <a name="AllowedHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; set; }
```

- *Type:* string[]

List of HTTP headers to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#allowed_headers ZeroTrustAccessApplication#allowed_headers}

---

##### `AllowedMethods`<sup>Optional</sup> <a name="AllowedMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; set; }
```

- *Type:* string[]

List of methods to expose via CORS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#allowed_methods ZeroTrustAccessApplication#allowed_methods}

---

##### `AllowedOrigins`<sup>Optional</sup> <a name="AllowedOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

List of origins permitted to make CORS requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#allowed_origins ZeroTrustAccessApplication#allowed_origins}

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeaders.property.maxAge"></a>

```csharp
public double MaxAge { get; set; }
```

- *Type:* double

The maximum time a preflight request will be cached.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#max_age ZeroTrustAccessApplication#max_age}

---

### ZeroTrustAccessApplicationFooterLinks <a name="ZeroTrustAccessApplicationFooterLinks" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationFooterLinks {
    string Name = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.property.name">Name</a></code> | <code>string</code> | The name of the footer link. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.property.url">Url</a></code> | <code>string</code> | The URL of the footer link. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the footer link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinks.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL of the footer link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#url ZeroTrustAccessApplication#url}

---

### ZeroTrustAccessApplicationLandingPageDesign <a name="ZeroTrustAccessApplicationLandingPageDesign" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationLandingPageDesign {
    string ButtonColor = null,
    string ButtonTextColor = null,
    string ImageUrl = null,
    string Message = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.buttonColor">ButtonColor</a></code> | <code>string</code> | The button color of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.buttonTextColor">ButtonTextColor</a></code> | <code>string</code> | The button text color of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.imageUrl">ImageUrl</a></code> | <code>string</code> | The URL of the image to be displayed in the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.message">Message</a></code> | <code>string</code> | The message of the landing page. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.title">Title</a></code> | <code>string</code> | The title of the landing page. |

---

##### `ButtonColor`<sup>Optional</sup> <a name="ButtonColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.buttonColor"></a>

```csharp
public string ButtonColor { get; set; }
```

- *Type:* string

The button color of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#button_color ZeroTrustAccessApplication#button_color}

---

##### `ButtonTextColor`<sup>Optional</sup> <a name="ButtonTextColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.buttonTextColor"></a>

```csharp
public string ButtonTextColor { get; set; }
```

- *Type:* string

The button text color of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#button_text_color ZeroTrustAccessApplication#button_text_color}

---

##### `ImageUrl`<sup>Optional</sup> <a name="ImageUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.imageUrl"></a>

```csharp
public string ImageUrl { get; set; }
```

- *Type:* string

The URL of the image to be displayed in the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#image_url ZeroTrustAccessApplication#image_url}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

The message of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#message ZeroTrustAccessApplication#message}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

The title of the landing page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#title ZeroTrustAccessApplication#title}

---

### ZeroTrustAccessApplicationSaasApp <a name="ZeroTrustAccessApplicationSaasApp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasApp {
    string AccessTokenLifetime = null,
    object AllowPkceWithoutClientSecret = null,
    string AppLauncherUrl = null,
    string AuthType = null,
    string ConsumerServiceUrl = null,
    object CustomAttribute = null,
    object CustomClaim = null,
    string DefaultRelayState = null,
    string[] GrantTypes = null,
    string GroupFilterRegex = null,
    ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions HybridAndImplicitOptions = null,
    string NameIdFormat = null,
    string NameIdTransformJsonata = null,
    string[] RedirectUris = null,
    object RefreshTokenOptions = null,
    string SamlAttributeTransformJsonata = null,
    string[] Scopes = null,
    string SpEntityId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.accessTokenLifetime">AccessTokenLifetime</a></code> | <code>string</code> | The lifetime of the Access Token after creation. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.allowPkceWithoutClientSecret">AllowPkceWithoutClientSecret</a></code> | <code>object</code> | Allow PKCE flow without a client secret. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.appLauncherUrl">AppLauncherUrl</a></code> | <code>string</code> | The URL where this applications tile redirects users. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.authType">AuthType</a></code> | <code>string</code> | **Modifying this attribute will force creation of a new resource.**. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.consumerServiceUrl">ConsumerServiceUrl</a></code> | <code>string</code> | The service provider's endpoint that is responsible for receiving and parsing a SAML assertion. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.customAttribute">CustomAttribute</a></code> | <code>object</code> | custom_attribute block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.customClaim">CustomClaim</a></code> | <code>object</code> | custom_claim block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.defaultRelayState">DefaultRelayState</a></code> | <code>string</code> | The relay state used if not provided by the identity provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.grantTypes">GrantTypes</a></code> | <code>string[]</code> | The OIDC flows supported by this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.groupFilterRegex">GroupFilterRegex</a></code> | <code>string</code> | A regex to filter Cloudflare groups returned in ID token and userinfo endpoint. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.hybridAndImplicitOptions">HybridAndImplicitOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a></code> | hybrid_and_implicit_options block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.nameIdFormat">NameIdFormat</a></code> | <code>string</code> | The format of the name identifier sent to the SaaS application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.nameIdTransformJsonata">NameIdTransformJsonata</a></code> | <code>string</code> | A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.refreshTokenOptions">RefreshTokenOptions</a></code> | <code>object</code> | refresh_token_options block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.samlAttributeTransformJsonata">SamlAttributeTransformJsonata</a></code> | <code>string</code> | A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.scopes">Scopes</a></code> | <code>string[]</code> | Define the user information shared with access. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.spEntityId">SpEntityId</a></code> | <code>string</code> | A globally unique name for an identity or service provider. |

---

##### `AccessTokenLifetime`<sup>Optional</sup> <a name="AccessTokenLifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.accessTokenLifetime"></a>

```csharp
public string AccessTokenLifetime { get; set; }
```

- *Type:* string

The lifetime of the Access Token after creation.

Valid units are `m` and `h`. Must be greater than or equal to 1m and less than or equal to 24h.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#access_token_lifetime ZeroTrustAccessApplication#access_token_lifetime}

---

##### `AllowPkceWithoutClientSecret`<sup>Optional</sup> <a name="AllowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.allowPkceWithoutClientSecret"></a>

```csharp
public object AllowPkceWithoutClientSecret { get; set; }
```

- *Type:* object

Allow PKCE flow without a client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#allow_pkce_without_client_secret ZeroTrustAccessApplication#allow_pkce_without_client_secret}

---

##### `AppLauncherUrl`<sup>Optional</sup> <a name="AppLauncherUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.appLauncherUrl"></a>

```csharp
public string AppLauncherUrl { get; set; }
```

- *Type:* string

The URL where this applications tile redirects users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#app_launcher_url ZeroTrustAccessApplication#app_launcher_url}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

**Modifying this attribute will force creation of a new resource.**.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#auth_type ZeroTrustAccessApplication#auth_type}

---

##### `ConsumerServiceUrl`<sup>Optional</sup> <a name="ConsumerServiceUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.consumerServiceUrl"></a>

```csharp
public string ConsumerServiceUrl { get; set; }
```

- *Type:* string

The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#consumer_service_url ZeroTrustAccessApplication#consumer_service_url}

---

##### `CustomAttribute`<sup>Optional</sup> <a name="CustomAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.customAttribute"></a>

```csharp
public object CustomAttribute { get; set; }
```

- *Type:* object

custom_attribute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#custom_attribute ZeroTrustAccessApplication#custom_attribute}

---

##### `CustomClaim`<sup>Optional</sup> <a name="CustomClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.customClaim"></a>

```csharp
public object CustomClaim { get; set; }
```

- *Type:* object

custom_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#custom_claim ZeroTrustAccessApplication#custom_claim}

---

##### `DefaultRelayState`<sup>Optional</sup> <a name="DefaultRelayState" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.defaultRelayState"></a>

```csharp
public string DefaultRelayState { get; set; }
```

- *Type:* string

The relay state used if not provided by the identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#default_relay_state ZeroTrustAccessApplication#default_relay_state}

---

##### `GrantTypes`<sup>Optional</sup> <a name="GrantTypes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.grantTypes"></a>

```csharp
public string[] GrantTypes { get; set; }
```

- *Type:* string[]

The OIDC flows supported by this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#grant_types ZeroTrustAccessApplication#grant_types}

---

##### `GroupFilterRegex`<sup>Optional</sup> <a name="GroupFilterRegex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.groupFilterRegex"></a>

```csharp
public string GroupFilterRegex { get; set; }
```

- *Type:* string

A regex to filter Cloudflare groups returned in ID token and userinfo endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#group_filter_regex ZeroTrustAccessApplication#group_filter_regex}

---

##### `HybridAndImplicitOptions`<sup>Optional</sup> <a name="HybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.hybridAndImplicitOptions"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions HybridAndImplicitOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a>

hybrid_and_implicit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#hybrid_and_implicit_options ZeroTrustAccessApplication#hybrid_and_implicit_options}

---

##### `NameIdFormat`<sup>Optional</sup> <a name="NameIdFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.nameIdFormat"></a>

```csharp
public string NameIdFormat { get; set; }
```

- *Type:* string

The format of the name identifier sent to the SaaS application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#name_id_format ZeroTrustAccessApplication#name_id_format}

---

##### `NameIdTransformJsonata`<sup>Optional</sup> <a name="NameIdTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.nameIdTransformJsonata"></a>

```csharp
public string NameIdTransformJsonata { get; set; }
```

- *Type:* string

A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into a NameID value for its SAML assertion. This expression should evaluate to a singular string. The output of this expression can override the `name_id_format` setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#name_id_transform_jsonata ZeroTrustAccessApplication#name_id_transform_jsonata}

---

##### `RedirectUris`<sup>Optional</sup> <a name="RedirectUris" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; set; }
```

- *Type:* string[]

The permitted URL's for Cloudflare to return Authorization codes and Access/ID tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#redirect_uris ZeroTrustAccessApplication#redirect_uris}

---

##### `RefreshTokenOptions`<sup>Optional</sup> <a name="RefreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.refreshTokenOptions"></a>

```csharp
public object RefreshTokenOptions { get; set; }
```

- *Type:* object

refresh_token_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#refresh_token_options ZeroTrustAccessApplication#refresh_token_options}

---

##### `SamlAttributeTransformJsonata`<sup>Optional</sup> <a name="SamlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.samlAttributeTransformJsonata"></a>

```csharp
public string SamlAttributeTransformJsonata { get; set; }
```

- *Type:* string

A [JSONata](https://jsonata.org/) expression that transforms an application's user identities into attribute assertions in the SAML response. The expression can transform id, email, name, and groups values. It can also transform fields listed in the saml_attributes or oidc_fields of the identity provider used to authenticate. The output of this expression must be a JSON object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#saml_attribute_transform_jsonata ZeroTrustAccessApplication#saml_attribute_transform_jsonata}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Define the user information shared with access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#scopes ZeroTrustAccessApplication#scopes}

---

##### `SpEntityId`<sup>Optional</sup> <a name="SpEntityId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp.property.spEntityId"></a>

```csharp
public string SpEntityId { get; set; }
```

- *Type:* string

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#sp_entity_id ZeroTrustAccessApplication#sp_entity_id}

---

### ZeroTrustAccessApplicationSaasAppCustomAttribute <a name="ZeroTrustAccessApplicationSaasAppCustomAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppCustomAttribute {
    ZeroTrustAccessApplicationSaasAppCustomAttributeSource Source,
    string FriendlyName = null,
    string Name = null,
    string NameFormat = null,
    object Required = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.friendlyName">FriendlyName</a></code> | <code>string</code> | A friendly name for the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.name">Name</a></code> | <code>string</code> | The name of the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.nameFormat">NameFormat</a></code> | <code>string</code> | A globally unique name for an identity or service provider. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.required">Required</a></code> | <code>object</code> | True if the attribute must be always present. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.source"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppCustomAttributeSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#source ZeroTrustAccessApplication#source}

---

##### `FriendlyName`<sup>Optional</sup> <a name="FriendlyName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.friendlyName"></a>

```csharp
public string FriendlyName { get; set; }
```

- *Type:* string

A friendly name for the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#friendly_name ZeroTrustAccessApplication#friendly_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `NameFormat`<sup>Optional</sup> <a name="NameFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.nameFormat"></a>

```csharp
public string NameFormat { get; set; }
```

- *Type:* string

A globally unique name for an identity or service provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#name_format ZeroTrustAccessApplication#name_format}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttribute.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

True if the attribute must be always present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#required ZeroTrustAccessApplication#required}

---

### ZeroTrustAccessApplicationSaasAppCustomAttributeSource <a name="ZeroTrustAccessApplicationSaasAppCustomAttributeSource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppCustomAttributeSource {
    string Name,
    System.Collections.Generic.IDictionary<string, string> NameByIdp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.property.name">Name</a></code> | <code>string</code> | The name of the attribute as provided by the IDP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.property.nameByIdp">NameByIdp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping from IdP ID to claim name. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the attribute as provided by the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `NameByIdp`<sup>Optional</sup> <a name="NameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource.property.nameByIdp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NameByIdp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping from IdP ID to claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#name_by_idp ZeroTrustAccessApplication#name_by_idp}

---

### ZeroTrustAccessApplicationSaasAppCustomClaim <a name="ZeroTrustAccessApplicationSaasAppCustomClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppCustomClaim {
    ZeroTrustAccessApplicationSaasAppCustomClaimSource Source,
    string Name = null,
    object Required = null,
    string Scope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a></code> | source block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.name">Name</a></code> | <code>string</code> | The name of the attribute as provided to the SaaS app. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.required">Required</a></code> | <code>object</code> | True if the attribute must be always present. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.scope">Scope</a></code> | <code>string</code> | The scope of the claim. |

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.source"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppCustomClaimSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#source ZeroTrustAccessApplication#source}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the attribute as provided to the SaaS app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

True if the attribute must be always present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#required ZeroTrustAccessApplication#required}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaim.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

The scope of the claim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#scope ZeroTrustAccessApplication#scope}

---

### ZeroTrustAccessApplicationSaasAppCustomClaimSource <a name="ZeroTrustAccessApplicationSaasAppCustomClaimSource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppCustomClaimSource {
    string Name,
    System.Collections.Generic.IDictionary<string, string> NameByIdp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.property.name">Name</a></code> | <code>string</code> | The name of the attribute as provided by the IDP. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.property.nameByIdp">NameByIdp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A mapping from IdP ID to claim name. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the attribute as provided by the IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `NameByIdp`<sup>Optional</sup> <a name="NameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource.property.nameByIdp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NameByIdp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A mapping from IdP ID to claim name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#name_by_idp ZeroTrustAccessApplication#name_by_idp}

---

### ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions <a name="ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions {
    object ReturnAccessTokenFromAuthorizationEndpoint = null,
    object ReturnIdTokenFromAuthorizationEndpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.property.returnAccessTokenFromAuthorizationEndpoint">ReturnAccessTokenFromAuthorizationEndpoint</a></code> | <code>object</code> | If true, the authorization endpoint will return an access token. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.property.returnIdTokenFromAuthorizationEndpoint">ReturnIdTokenFromAuthorizationEndpoint</a></code> | <code>object</code> | If true, the authorization endpoint will return an id token. |

---

##### `ReturnAccessTokenFromAuthorizationEndpoint`<sup>Optional</sup> <a name="ReturnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.property.returnAccessTokenFromAuthorizationEndpoint"></a>

```csharp
public object ReturnAccessTokenFromAuthorizationEndpoint { get; set; }
```

- *Type:* object

If true, the authorization endpoint will return an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#return_access_token_from_authorization_endpoint ZeroTrustAccessApplication#return_access_token_from_authorization_endpoint}

---

##### `ReturnIdTokenFromAuthorizationEndpoint`<sup>Optional</sup> <a name="ReturnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions.property.returnIdTokenFromAuthorizationEndpoint"></a>

```csharp
public object ReturnIdTokenFromAuthorizationEndpoint { get; set; }
```

- *Type:* object

If true, the authorization endpoint will return an id token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#return_id_token_from_authorization_endpoint ZeroTrustAccessApplication#return_id_token_from_authorization_endpoint}

---

### ZeroTrustAccessApplicationSaasAppRefreshTokenOptions <a name="ZeroTrustAccessApplicationSaasAppRefreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppRefreshTokenOptions {
    string Lifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions.property.lifetime">Lifetime</a></code> | <code>string</code> | How long a refresh token will be valid for after creation. |

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptions.property.lifetime"></a>

```csharp
public string Lifetime { get; set; }
```

- *Type:* string

How long a refresh token will be valid for after creation.

Valid units are `m`, `h` and `d`. Must be longer than 1m.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#lifetime ZeroTrustAccessApplication#lifetime}

---

### ZeroTrustAccessApplicationScimConfig <a name="ZeroTrustAccessApplicationScimConfig" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationScimConfig {
    string IdpUid,
    string RemoteUri,
    ZeroTrustAccessApplicationScimConfigAuthentication Authentication = null,
    object DeactivateOnDelete = null,
    object Enabled = null,
    object Mappings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.idpUid">IdpUid</a></code> | <code>string</code> | The UID of the IdP to use as the source for SCIM resources to provision to this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.remoteUri">RemoteUri</a></code> | <code>string</code> | The base URI for the application's SCIM-compatible API. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.deactivateOnDelete">DeactivateOnDelete</a></code> | <code>object</code> | If false, propagates DELETE requests to the target application for SCIM resources. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.enabled">Enabled</a></code> | <code>object</code> | Whether SCIM provisioning is turned on for this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.mappings">Mappings</a></code> | <code>object</code> | mappings block. |

---

##### `IdpUid`<sup>Required</sup> <a name="IdpUid" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.idpUid"></a>

```csharp
public string IdpUid { get; set; }
```

- *Type:* string

The UID of the IdP to use as the source for SCIM resources to provision to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#idp_uid ZeroTrustAccessApplication#idp_uid}

---

##### `RemoteUri`<sup>Required</sup> <a name="RemoteUri" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.remoteUri"></a>

```csharp
public string RemoteUri { get; set; }
```

- *Type:* string

The base URI for the application's SCIM-compatible API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#remote_uri ZeroTrustAccessApplication#remote_uri}

---

##### `Authentication`<sup>Optional</sup> <a name="Authentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.authentication"></a>

```csharp
public ZeroTrustAccessApplicationScimConfigAuthentication Authentication { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#authentication ZeroTrustAccessApplication#authentication}

---

##### `DeactivateOnDelete`<sup>Optional</sup> <a name="DeactivateOnDelete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.deactivateOnDelete"></a>

```csharp
public object DeactivateOnDelete { get; set; }
```

- *Type:* object

If false, propagates DELETE requests to the target application for SCIM resources.

If true, sets 'active' to false on the SCIM resource. Note: Some targets do not support DELETE operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#deactivate_on_delete ZeroTrustAccessApplication#deactivate_on_delete}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether SCIM provisioning is turned on for this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}

---

##### `Mappings`<sup>Optional</sup> <a name="Mappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig.property.mappings"></a>

```csharp
public object Mappings { get; set; }
```

- *Type:* object

mappings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#mappings ZeroTrustAccessApplication#mappings}

---

### ZeroTrustAccessApplicationScimConfigAuthentication <a name="ZeroTrustAccessApplicationScimConfigAuthentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationScimConfigAuthentication {
    string Scheme,
    string AuthorizationUrl = null,
    string ClientId = null,
    string ClientSecret = null,
    string Password = null,
    string[] Scopes = null,
    string Token = null,
    string TokenUrl = null,
    string User = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.scheme">Scheme</a></code> | <code>string</code> | The authentication scheme to use when making SCIM requests to this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | URL used to generate the auth code used during token generation. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.clientId">ClientId</a></code> | <code>string</code> | Client ID used to authenticate when generating a token for authenticating with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Secret used to authenticate when generating a token for authenticating with the remove SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.password">Password</a></code> | <code>string</code> | Required when using `scim_config.0.authentication.0.user`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.scopes">Scopes</a></code> | <code>string[]</code> | The authorization scopes to request when generating the token used to authenticate with the remove SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.token">Token</a></code> | <code>string</code> | Token used to authenticate with the remote SCIM service. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | URL used to generate the token used to authenticate with the remote SCIM service. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.user">User</a></code> | <code>string</code> | User name used to authenticate with the remote SCIM service. |

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

The authentication scheme to use when making SCIM requests to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#scheme ZeroTrustAccessApplication#scheme}

---

##### `AuthorizationUrl`<sup>Optional</sup> <a name="AuthorizationUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; set; }
```

- *Type:* string

URL used to generate the auth code used during token generation.

Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#authorization_url ZeroTrustAccessApplication#authorization_url}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Client ID used to authenticate when generating a token for authenticating with the remote SCIM service.

Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#client_id ZeroTrustAccessApplication#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Secret used to authenticate when generating a token for authenticating with the remove SCIM service.

Required when using `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#client_secret ZeroTrustAccessApplication#client_secret}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Required when using `scim_config.0.authentication.0.user`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#password ZeroTrustAccessApplication#password}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The authorization scopes to request when generating the token used to authenticate with the remove SCIM service.

Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#scopes ZeroTrustAccessApplication#scopes}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Token used to authenticate with the remote SCIM service. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#token ZeroTrustAccessApplication#token}

---

##### `TokenUrl`<sup>Optional</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; set; }
```

- *Type:* string

URL used to generate the token used to authenticate with the remote SCIM service.

Required when using `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.client_id`. Conflicts with `scim_config.0.authentication.0.user`, `scim_config.0.authentication.0.password`, `scim_config.0.authentication.0.token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#token_url ZeroTrustAccessApplication#token_url}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

User name used to authenticate with the remote SCIM service.

Required when using `scim_config.0.authentication.0.password`. Conflicts with `scim_config.0.authentication.0.token`, `scim_config.0.authentication.0.client_id`, `scim_config.0.authentication.0.client_secret`, `scim_config.0.authentication.0.authorization_url`, `scim_config.0.authentication.0.token_url`, `scim_config.0.authentication.0.scopes`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#user ZeroTrustAccessApplication#user}

---

### ZeroTrustAccessApplicationScimConfigMappings <a name="ZeroTrustAccessApplicationScimConfigMappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationScimConfigMappings {
    string Schema,
    object Enabled = null,
    string Filter = null,
    ZeroTrustAccessApplicationScimConfigMappingsOperations Operations = null,
    string TransformJsonata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.schema">Schema</a></code> | <code>string</code> | Which SCIM resource type this mapping applies to. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.enabled">Enabled</a></code> | <code>object</code> | Whether or not this mapping is enabled. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.filter">Filter</a></code> | <code>string</code> | A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a></code> | operations block. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.transformJsonata">TransformJsonata</a></code> | <code>string</code> | A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application. |

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Which SCIM resource type this mapping applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#schema ZeroTrustAccessApplication#schema}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Whether or not this mapping is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#enabled ZeroTrustAccessApplication#enabled}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

A [SCIM filter expression](https://datatracker.ietf.org/doc/html/rfc7644#section-3.4.2.2) that matches resources that should be provisioned to this application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#filter ZeroTrustAccessApplication#filter}

---

##### `Operations`<sup>Optional</sup> <a name="Operations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.operations"></a>

```csharp
public ZeroTrustAccessApplicationScimConfigMappingsOperations Operations { get; set; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a>

operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#operations ZeroTrustAccessApplication#operations}

---

##### `TransformJsonata`<sup>Optional</sup> <a name="TransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappings.property.transformJsonata"></a>

```csharp
public string TransformJsonata { get; set; }
```

- *Type:* string

A [JSONata](https://jsonata.org/) expression that transforms the resource before provisioning it in the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#transform_jsonata ZeroTrustAccessApplication#transform_jsonata}

---

### ZeroTrustAccessApplicationScimConfigMappingsOperations <a name="ZeroTrustAccessApplicationScimConfigMappingsOperations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationScimConfigMappingsOperations {
    object Create = null,
    object Delete = null,
    object Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.create">Create</a></code> | <code>object</code> | Whether or not this mapping applies to create (POST) operations. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.delete">Delete</a></code> | <code>object</code> | Whether or not this mapping applies to DELETE operations. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.update">Update</a></code> | <code>object</code> | Whether or not this mapping applies to update (PATCH/PUT) operations. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.create"></a>

```csharp
public object Create { get; set; }
```

- *Type:* object

Whether or not this mapping applies to create (POST) operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#create ZeroTrustAccessApplication#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.delete"></a>

```csharp
public object Delete { get; set; }
```

- *Type:* object

Whether or not this mapping applies to DELETE operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#delete ZeroTrustAccessApplication#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations.property.update"></a>

```csharp
public object Update { get; set; }
```

- *Type:* object

Whether or not this mapping applies to update (PATCH/PUT) operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#update ZeroTrustAccessApplication#update}

---

### ZeroTrustAccessApplicationTargetCriteria <a name="ZeroTrustAccessApplicationTargetCriteria" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationTargetCriteria {
    double Port,
    string Protocol,
    object TargetAttributes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.port">Port</a></code> | <code>double</code> | The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.protocol">Protocol</a></code> | <code>string</code> | The communication protocol your application secures. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.targetAttributes">TargetAttributes</a></code> | <code>object</code> | target_attributes block. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port that the targets use for the chosen communication protocol. A port cannot be assigned to multiple protocols.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#port ZeroTrustAccessApplication#port}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The communication protocol your application secures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#protocol ZeroTrustAccessApplication#protocol}

---

##### `TargetAttributes`<sup>Required</sup> <a name="TargetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteria.property.targetAttributes"></a>

```csharp
public object TargetAttributes { get; set; }
```

- *Type:* object

target_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#target_attributes ZeroTrustAccessApplication#target_attributes}

---

### ZeroTrustAccessApplicationTargetCriteriaTargetAttributes <a name="ZeroTrustAccessApplicationTargetCriteriaTargetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationTargetCriteriaTargetAttributes {
    string Name,
    string[] Values
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.property.name">Name</a></code> | <code>string</code> | The key of the attribute. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.property.values">Values</a></code> | <code>string[]</code> | The values of the attribute. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The key of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#name ZeroTrustAccessApplication#name}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributes.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The values of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/4.45.0/docs/resources/zero_trust_access_application#values ZeroTrustAccessApplication#values}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustAccessApplicationCorsHeadersList <a name="ZeroTrustAccessApplicationCorsHeadersList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationCorsHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.get"></a>

```csharp
private ZeroTrustAccessApplicationCorsHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationCorsHeadersOutputReference <a name="ZeroTrustAccessApplicationCorsHeadersOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationCorsHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllHeaders">ResetAllowAllHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllMethods">ResetAllowAllMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllOrigins">ResetAllowAllOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowCredentials">ResetAllowCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedHeaders">ResetAllowedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedMethods">ResetAllowedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedOrigins">ResetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetMaxAge">ResetMaxAge</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowAllHeaders` <a name="ResetAllowAllHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllHeaders"></a>

```csharp
private void ResetAllowAllHeaders()
```

##### `ResetAllowAllMethods` <a name="ResetAllowAllMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllMethods"></a>

```csharp
private void ResetAllowAllMethods()
```

##### `ResetAllowAllOrigins` <a name="ResetAllowAllOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowAllOrigins"></a>

```csharp
private void ResetAllowAllOrigins()
```

##### `ResetAllowCredentials` <a name="ResetAllowCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowCredentials"></a>

```csharp
private void ResetAllowCredentials()
```

##### `ResetAllowedHeaders` <a name="ResetAllowedHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedHeaders"></a>

```csharp
private void ResetAllowedHeaders()
```

##### `ResetAllowedMethods` <a name="ResetAllowedMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedMethods"></a>

```csharp
private void ResetAllowedMethods()
```

##### `ResetAllowedOrigins` <a name="ResetAllowedOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetAllowedOrigins"></a>

```csharp
private void ResetAllowedOrigins()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.resetMaxAge"></a>

```csharp
private void ResetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput">AllowAllHeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput">AllowAllMethodsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput">AllowAllOriginsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput">AllowCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllHeaders">AllowAllHeaders</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllMethods">AllowAllMethods</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllOrigins">AllowAllOrigins</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowCredentials">AllowCredentials</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowAllHeadersInput`<sup>Optional</sup> <a name="AllowAllHeadersInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllHeadersInput"></a>

```csharp
public object AllowAllHeadersInput { get; }
```

- *Type:* object

---

##### `AllowAllMethodsInput`<sup>Optional</sup> <a name="AllowAllMethodsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllMethodsInput"></a>

```csharp
public object AllowAllMethodsInput { get; }
```

- *Type:* object

---

##### `AllowAllOriginsInput`<sup>Optional</sup> <a name="AllowAllOriginsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllOriginsInput"></a>

```csharp
public object AllowAllOriginsInput { get; }
```

- *Type:* object

---

##### `AllowCredentialsInput`<sup>Optional</sup> <a name="AllowCredentialsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowCredentialsInput"></a>

```csharp
public object AllowCredentialsInput { get; }
```

- *Type:* object

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedHeadersInput"></a>

```csharp
public string[] AllowedHeadersInput { get; }
```

- *Type:* string[]

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedMethodsInput"></a>

```csharp
public string[] AllowedMethodsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.maxAgeInput"></a>

```csharp
public double MaxAgeInput { get; }
```

- *Type:* double

---

##### `AllowAllHeaders`<sup>Required</sup> <a name="AllowAllHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllHeaders"></a>

```csharp
public object AllowAllHeaders { get; }
```

- *Type:* object

---

##### `AllowAllMethods`<sup>Required</sup> <a name="AllowAllMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllMethods"></a>

```csharp
public object AllowAllMethods { get; }
```

- *Type:* object

---

##### `AllowAllOrigins`<sup>Required</sup> <a name="AllowAllOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowAllOrigins"></a>

```csharp
public object AllowAllOrigins { get; }
```

- *Type:* object

---

##### `AllowCredentials`<sup>Required</sup> <a name="AllowCredentials" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowCredentials"></a>

```csharp
public object AllowCredentials { get; }
```

- *Type:* object

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedHeaders"></a>

```csharp
public string[] AllowedHeaders { get; }
```

- *Type:* string[]

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationCorsHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationFooterLinksList <a name="ZeroTrustAccessApplicationFooterLinksList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationFooterLinksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.get"></a>

```csharp
private ZeroTrustAccessApplicationFooterLinksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationFooterLinksOutputReference <a name="ZeroTrustAccessApplicationFooterLinksOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationFooterLinksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationFooterLinksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationLandingPageDesignOutputReference <a name="ZeroTrustAccessApplicationLandingPageDesignOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationLandingPageDesignOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetButtonColor">ResetButtonColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetButtonTextColor">ResetButtonTextColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetImageUrl">ResetImageUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonColor` <a name="ResetButtonColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetButtonColor"></a>

```csharp
private void ResetButtonColor()
```

##### `ResetButtonTextColor` <a name="ResetButtonTextColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetButtonTextColor"></a>

```csharp
private void ResetButtonTextColor()
```

##### `ResetImageUrl` <a name="ResetImageUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetImageUrl"></a>

```csharp
private void ResetImageUrl()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonColorInput">ButtonColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonTextColorInput">ButtonTextColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.imageUrlInput">ImageUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonColor">ButtonColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonTextColor">ButtonTextColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.imageUrl">ImageUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ButtonColorInput`<sup>Optional</sup> <a name="ButtonColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonColorInput"></a>

```csharp
public string ButtonColorInput { get; }
```

- *Type:* string

---

##### `ButtonTextColorInput`<sup>Optional</sup> <a name="ButtonTextColorInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonTextColorInput"></a>

```csharp
public string ButtonTextColorInput { get; }
```

- *Type:* string

---

##### `ImageUrlInput`<sup>Optional</sup> <a name="ImageUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.imageUrlInput"></a>

```csharp
public string ImageUrlInput { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `ButtonColor`<sup>Required</sup> <a name="ButtonColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonColor"></a>

```csharp
public string ButtonColor { get; }
```

- *Type:* string

---

##### `ButtonTextColor`<sup>Required</sup> <a name="ButtonTextColor" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.buttonTextColor"></a>

```csharp
public string ButtonTextColor { get; }
```

- *Type:* string

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.imageUrl"></a>

```csharp
public string ImageUrl { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesignOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustAccessApplicationLandingPageDesign InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationLandingPageDesign">ZeroTrustAccessApplicationLandingPageDesign</a>

---


### ZeroTrustAccessApplicationSaasAppCustomAttributeList <a name="ZeroTrustAccessApplicationSaasAppCustomAttributeList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppCustomAttributeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.get"></a>

```csharp
private ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference <a name="ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetFriendlyName">ResetFriendlyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetNameFormat">ResetNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSource` <a name="PutSource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.putSource"></a>

```csharp
private void PutSource(ZeroTrustAccessApplicationSaasAppCustomAttributeSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a>

---

##### `ResetFriendlyName` <a name="ResetFriendlyName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetFriendlyName"></a>

```csharp
private void ResetFriendlyName()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNameFormat` <a name="ResetNameFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetNameFormat"></a>

```csharp
private void ResetNameFormat()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference">ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyNameInput">FriendlyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormatInput">NameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyName">FriendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormat">NameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.source"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference">ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference</a>

---

##### `FriendlyNameInput`<sup>Optional</sup> <a name="FriendlyNameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyNameInput"></a>

```csharp
public string FriendlyNameInput { get; }
```

- *Type:* string

---

##### `NameFormatInput`<sup>Optional</sup> <a name="NameFormatInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormatInput"></a>

```csharp
public string NameFormatInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.sourceInput"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppCustomAttributeSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a>

---

##### `FriendlyName`<sup>Required</sup> <a name="FriendlyName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.friendlyName"></a>

```csharp
public string FriendlyName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameFormat`<sup>Required</sup> <a name="NameFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.nameFormat"></a>

```csharp
public string NameFormat { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference <a name="ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.resetNameByIdp">ResetNameByIdp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNameByIdp` <a name="ResetNameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.resetNameByIdp"></a>

```csharp
private void ResetNameByIdp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdpInput">NameByIdpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdp">NameByIdp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameByIdpInput`<sup>Optional</sup> <a name="NameByIdpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NameByIdpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameByIdp`<sup>Required</sup> <a name="NameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.nameByIdp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NameByIdp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSourceOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppCustomAttributeSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeSource">ZeroTrustAccessApplicationSaasAppCustomAttributeSource</a>

---


### ZeroTrustAccessApplicationSaasAppCustomClaimList <a name="ZeroTrustAccessApplicationSaasAppCustomClaimList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppCustomClaimList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.get"></a>

```csharp
private ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference <a name="ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSource` <a name="PutSource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.putSource"></a>

```csharp
private void PutSource(ZeroTrustAccessApplicationSaasAppCustomClaimSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference">ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.sourceInput">SourceInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.source"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference">ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.sourceInput"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppCustomClaimSource SourceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference <a name="ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.resetNameByIdp">ResetNameByIdp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNameByIdp` <a name="ResetNameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.resetNameByIdp"></a>

```csharp
private void ResetNameByIdp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdpInput">NameByIdpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdp">NameByIdp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameByIdpInput`<sup>Optional</sup> <a name="NameByIdpInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NameByIdpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameByIdp`<sup>Required</sup> <a name="NameByIdp" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.nameByIdp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NameByIdp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSourceOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppCustomClaimSource InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimSource">ZeroTrustAccessApplicationSaasAppCustomClaimSource</a>

---


### ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference <a name="ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnAccessTokenFromAuthorizationEndpoint">ResetReturnAccessTokenFromAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnIdTokenFromAuthorizationEndpoint">ResetReturnIdTokenFromAuthorizationEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReturnAccessTokenFromAuthorizationEndpoint` <a name="ResetReturnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnAccessTokenFromAuthorizationEndpoint"></a>

```csharp
private void ResetReturnAccessTokenFromAuthorizationEndpoint()
```

##### `ResetReturnIdTokenFromAuthorizationEndpoint` <a name="ResetReturnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.resetReturnIdTokenFromAuthorizationEndpoint"></a>

```csharp
private void ResetReturnIdTokenFromAuthorizationEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpointInput">ReturnAccessTokenFromAuthorizationEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpointInput">ReturnIdTokenFromAuthorizationEndpointInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpoint">ReturnAccessTokenFromAuthorizationEndpoint</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpoint">ReturnIdTokenFromAuthorizationEndpoint</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReturnAccessTokenFromAuthorizationEndpointInput`<sup>Optional</sup> <a name="ReturnAccessTokenFromAuthorizationEndpointInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpointInput"></a>

```csharp
public object ReturnAccessTokenFromAuthorizationEndpointInput { get; }
```

- *Type:* object

---

##### `ReturnIdTokenFromAuthorizationEndpointInput`<sup>Optional</sup> <a name="ReturnIdTokenFromAuthorizationEndpointInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpointInput"></a>

```csharp
public object ReturnIdTokenFromAuthorizationEndpointInput { get; }
```

- *Type:* object

---

##### `ReturnAccessTokenFromAuthorizationEndpoint`<sup>Required</sup> <a name="ReturnAccessTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnAccessTokenFromAuthorizationEndpoint"></a>

```csharp
public object ReturnAccessTokenFromAuthorizationEndpoint { get; }
```

- *Type:* object

---

##### `ReturnIdTokenFromAuthorizationEndpoint`<sup>Required</sup> <a name="ReturnIdTokenFromAuthorizationEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.returnIdTokenFromAuthorizationEndpoint"></a>

```csharp
public object ReturnIdTokenFromAuthorizationEndpoint { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a>

---


### ZeroTrustAccessApplicationSaasAppOutputReference <a name="ZeroTrustAccessApplicationSaasAppOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomAttribute">PutCustomAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomClaim">PutCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions">PutHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putRefreshTokenOptions">PutRefreshTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAccessTokenLifetime">ResetAccessTokenLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAllowPkceWithoutClientSecret">ResetAllowPkceWithoutClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAppLauncherUrl">ResetAppLauncherUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetConsumerServiceUrl">ResetConsumerServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetCustomAttribute">ResetCustomAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetCustomClaim">ResetCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetDefaultRelayState">ResetDefaultRelayState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetGrantTypes">ResetGrantTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetGroupFilterRegex">ResetGroupFilterRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetHybridAndImplicitOptions">ResetHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetNameIdFormat">ResetNameIdFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetNameIdTransformJsonata">ResetNameIdTransformJsonata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetRedirectUris">ResetRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetRefreshTokenOptions">ResetRefreshTokenOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetSamlAttributeTransformJsonata">ResetSamlAttributeTransformJsonata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetSpEntityId">ResetSpEntityId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomAttribute` <a name="PutCustomAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomAttribute"></a>

```csharp
private void PutCustomAttribute(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomAttribute.parameter.value"></a>

- *Type:* object

---

##### `PutCustomClaim` <a name="PutCustomClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomClaim"></a>

```csharp
private void PutCustomClaim(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putCustomClaim.parameter.value"></a>

- *Type:* object

---

##### `PutHybridAndImplicitOptions` <a name="PutHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions"></a>

```csharp
private void PutHybridAndImplicitOptions(ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putHybridAndImplicitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a>

---

##### `PutRefreshTokenOptions` <a name="PutRefreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putRefreshTokenOptions"></a>

```csharp
private void PutRefreshTokenOptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.putRefreshTokenOptions.parameter.value"></a>

- *Type:* object

---

##### `ResetAccessTokenLifetime` <a name="ResetAccessTokenLifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAccessTokenLifetime"></a>

```csharp
private void ResetAccessTokenLifetime()
```

##### `ResetAllowPkceWithoutClientSecret` <a name="ResetAllowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAllowPkceWithoutClientSecret"></a>

```csharp
private void ResetAllowPkceWithoutClientSecret()
```

##### `ResetAppLauncherUrl` <a name="ResetAppLauncherUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAppLauncherUrl"></a>

```csharp
private void ResetAppLauncherUrl()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetConsumerServiceUrl` <a name="ResetConsumerServiceUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetConsumerServiceUrl"></a>

```csharp
private void ResetConsumerServiceUrl()
```

##### `ResetCustomAttribute` <a name="ResetCustomAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetCustomAttribute"></a>

```csharp
private void ResetCustomAttribute()
```

##### `ResetCustomClaim` <a name="ResetCustomClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetCustomClaim"></a>

```csharp
private void ResetCustomClaim()
```

##### `ResetDefaultRelayState` <a name="ResetDefaultRelayState" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetDefaultRelayState"></a>

```csharp
private void ResetDefaultRelayState()
```

##### `ResetGrantTypes` <a name="ResetGrantTypes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetGrantTypes"></a>

```csharp
private void ResetGrantTypes()
```

##### `ResetGroupFilterRegex` <a name="ResetGroupFilterRegex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetGroupFilterRegex"></a>

```csharp
private void ResetGroupFilterRegex()
```

##### `ResetHybridAndImplicitOptions` <a name="ResetHybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetHybridAndImplicitOptions"></a>

```csharp
private void ResetHybridAndImplicitOptions()
```

##### `ResetNameIdFormat` <a name="ResetNameIdFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetNameIdFormat"></a>

```csharp
private void ResetNameIdFormat()
```

##### `ResetNameIdTransformJsonata` <a name="ResetNameIdTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetNameIdTransformJsonata"></a>

```csharp
private void ResetNameIdTransformJsonata()
```

##### `ResetRedirectUris` <a name="ResetRedirectUris" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetRedirectUris"></a>

```csharp
private void ResetRedirectUris()
```

##### `ResetRefreshTokenOptions` <a name="ResetRefreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetRefreshTokenOptions"></a>

```csharp
private void ResetRefreshTokenOptions()
```

##### `ResetSamlAttributeTransformJsonata` <a name="ResetSamlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetSamlAttributeTransformJsonata"></a>

```csharp
private void ResetSamlAttributeTransformJsonata()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSpEntityId` <a name="ResetSpEntityId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.resetSpEntityId"></a>

```csharp
private void ResetSpEntityId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customAttribute">CustomAttribute</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList">ZeroTrustAccessApplicationSaasAppCustomAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customClaim">CustomClaim</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList">ZeroTrustAccessApplicationSaasAppCustomClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptions">HybridAndImplicitOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.idpEntityId">IdpEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.publicKey">PublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.refreshTokenOptions">RefreshTokenOptions</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList">ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.ssoEndpoint">SsoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.accessTokenLifetimeInput">AccessTokenLifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecretInput">AllowPkceWithoutClientSecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.appLauncherUrlInput">AppLauncherUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput">ConsumerServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customAttributeInput">CustomAttributeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customClaimInput">CustomClaimInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.defaultRelayStateInput">DefaultRelayStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.grantTypesInput">GrantTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.groupFilterRegexInput">GroupFilterRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptionsInput">HybridAndImplicitOptionsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdFormatInput">NameIdFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdTransformJsonataInput">NameIdTransformJsonataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.refreshTokenOptionsInput">RefreshTokenOptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonataInput">SamlAttributeTransformJsonataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.spEntityIdInput">SpEntityIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.accessTokenLifetime">AccessTokenLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecret">AllowPkceWithoutClientSecret</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.appLauncherUrl">AppLauncherUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.consumerServiceUrl">ConsumerServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.defaultRelayState">DefaultRelayState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.grantTypes">GrantTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.groupFilterRegex">GroupFilterRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdFormat">NameIdFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdTransformJsonata">NameIdTransformJsonata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonata">SamlAttributeTransformJsonata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.spEntityId">SpEntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `CustomAttribute`<sup>Required</sup> <a name="CustomAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customAttribute"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppCustomAttributeList CustomAttribute { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomAttributeList">ZeroTrustAccessApplicationSaasAppCustomAttributeList</a>

---

##### `CustomClaim`<sup>Required</sup> <a name="CustomClaim" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customClaim"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppCustomClaimList CustomClaim { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppCustomClaimList">ZeroTrustAccessApplicationSaasAppCustomClaimList</a>

---

##### `HybridAndImplicitOptions`<sup>Required</sup> <a name="HybridAndImplicitOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptions"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference HybridAndImplicitOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptionsOutputReference</a>

---

##### `IdpEntityId`<sup>Required</sup> <a name="IdpEntityId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.idpEntityId"></a>

```csharp
public string IdpEntityId { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.publicKey"></a>

```csharp
public string PublicKey { get; }
```

- *Type:* string

---

##### `RefreshTokenOptions`<sup>Required</sup> <a name="RefreshTokenOptions" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.refreshTokenOptions"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList RefreshTokenOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList">ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList</a>

---

##### `SsoEndpoint`<sup>Required</sup> <a name="SsoEndpoint" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.ssoEndpoint"></a>

```csharp
public string SsoEndpoint { get; }
```

- *Type:* string

---

##### `AccessTokenLifetimeInput`<sup>Optional</sup> <a name="AccessTokenLifetimeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.accessTokenLifetimeInput"></a>

```csharp
public string AccessTokenLifetimeInput { get; }
```

- *Type:* string

---

##### `AllowPkceWithoutClientSecretInput`<sup>Optional</sup> <a name="AllowPkceWithoutClientSecretInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecretInput"></a>

```csharp
public object AllowPkceWithoutClientSecretInput { get; }
```

- *Type:* object

---

##### `AppLauncherUrlInput`<sup>Optional</sup> <a name="AppLauncherUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.appLauncherUrlInput"></a>

```csharp
public string AppLauncherUrlInput { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `ConsumerServiceUrlInput`<sup>Optional</sup> <a name="ConsumerServiceUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.consumerServiceUrlInput"></a>

```csharp
public string ConsumerServiceUrlInput { get; }
```

- *Type:* string

---

##### `CustomAttributeInput`<sup>Optional</sup> <a name="CustomAttributeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customAttributeInput"></a>

```csharp
public object CustomAttributeInput { get; }
```

- *Type:* object

---

##### `CustomClaimInput`<sup>Optional</sup> <a name="CustomClaimInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.customClaimInput"></a>

```csharp
public object CustomClaimInput { get; }
```

- *Type:* object

---

##### `DefaultRelayStateInput`<sup>Optional</sup> <a name="DefaultRelayStateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.defaultRelayStateInput"></a>

```csharp
public string DefaultRelayStateInput { get; }
```

- *Type:* string

---

##### `GrantTypesInput`<sup>Optional</sup> <a name="GrantTypesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.grantTypesInput"></a>

```csharp
public string[] GrantTypesInput { get; }
```

- *Type:* string[]

---

##### `GroupFilterRegexInput`<sup>Optional</sup> <a name="GroupFilterRegexInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.groupFilterRegexInput"></a>

```csharp
public string GroupFilterRegexInput { get; }
```

- *Type:* string

---

##### `HybridAndImplicitOptionsInput`<sup>Optional</sup> <a name="HybridAndImplicitOptionsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.hybridAndImplicitOptionsInput"></a>

```csharp
public ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions HybridAndImplicitOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions">ZeroTrustAccessApplicationSaasAppHybridAndImplicitOptions</a>

---

##### `NameIdFormatInput`<sup>Optional</sup> <a name="NameIdFormatInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdFormatInput"></a>

```csharp
public string NameIdFormatInput { get; }
```

- *Type:* string

---

##### `NameIdTransformJsonataInput`<sup>Optional</sup> <a name="NameIdTransformJsonataInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdTransformJsonataInput"></a>

```csharp
public string NameIdTransformJsonataInput { get; }
```

- *Type:* string

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.redirectUrisInput"></a>

```csharp
public string[] RedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `RefreshTokenOptionsInput`<sup>Optional</sup> <a name="RefreshTokenOptionsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.refreshTokenOptionsInput"></a>

```csharp
public object RefreshTokenOptionsInput { get; }
```

- *Type:* object

---

##### `SamlAttributeTransformJsonataInput`<sup>Optional</sup> <a name="SamlAttributeTransformJsonataInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonataInput"></a>

```csharp
public string SamlAttributeTransformJsonataInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SpEntityIdInput`<sup>Optional</sup> <a name="SpEntityIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.spEntityIdInput"></a>

```csharp
public string SpEntityIdInput { get; }
```

- *Type:* string

---

##### `AccessTokenLifetime`<sup>Required</sup> <a name="AccessTokenLifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.accessTokenLifetime"></a>

```csharp
public string AccessTokenLifetime { get; }
```

- *Type:* string

---

##### `AllowPkceWithoutClientSecret`<sup>Required</sup> <a name="AllowPkceWithoutClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.allowPkceWithoutClientSecret"></a>

```csharp
public object AllowPkceWithoutClientSecret { get; }
```

- *Type:* object

---

##### `AppLauncherUrl`<sup>Required</sup> <a name="AppLauncherUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.appLauncherUrl"></a>

```csharp
public string AppLauncherUrl { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `ConsumerServiceUrl`<sup>Required</sup> <a name="ConsumerServiceUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.consumerServiceUrl"></a>

```csharp
public string ConsumerServiceUrl { get; }
```

- *Type:* string

---

##### `DefaultRelayState`<sup>Required</sup> <a name="DefaultRelayState" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.defaultRelayState"></a>

```csharp
public string DefaultRelayState { get; }
```

- *Type:* string

---

##### `GrantTypes`<sup>Required</sup> <a name="GrantTypes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.grantTypes"></a>

```csharp
public string[] GrantTypes { get; }
```

- *Type:* string[]

---

##### `GroupFilterRegex`<sup>Required</sup> <a name="GroupFilterRegex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.groupFilterRegex"></a>

```csharp
public string GroupFilterRegex { get; }
```

- *Type:* string

---

##### `NameIdFormat`<sup>Required</sup> <a name="NameIdFormat" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdFormat"></a>

```csharp
public string NameIdFormat { get; }
```

- *Type:* string

---

##### `NameIdTransformJsonata`<sup>Required</sup> <a name="NameIdTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.nameIdTransformJsonata"></a>

```csharp
public string NameIdTransformJsonata { get; }
```

- *Type:* string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; }
```

- *Type:* string[]

---

##### `SamlAttributeTransformJsonata`<sup>Required</sup> <a name="SamlAttributeTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.samlAttributeTransformJsonata"></a>

```csharp
public string SamlAttributeTransformJsonata { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SpEntityId`<sup>Required</sup> <a name="SpEntityId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.spEntityId"></a>

```csharp
public string SpEntityId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustAccessApplicationSaasApp InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasApp">ZeroTrustAccessApplicationSaasApp</a>

---


### ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList <a name="ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.get"></a>

```csharp
private ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference <a name="ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.resetLifetime"></a>

```csharp
private void ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetime">Lifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetimeInput"></a>

```csharp
public string LifetimeInput { get; }
```

- *Type:* string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.lifetime"></a>

```csharp
public string Lifetime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationSaasAppRefreshTokenOptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference <a name="ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetAuthorizationUrl">ResetAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetTokenUrl">ResetTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetUser">ResetUser</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationUrl` <a name="ResetAuthorizationUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetAuthorizationUrl"></a>

```csharp
private void ResetAuthorizationUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetTokenUrl` <a name="ResetTokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetTokenUrl"></a>

```csharp
private void ResetTokenUrl()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.resetUser"></a>

```csharp
private void ResetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrlInput">AuthorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrlInput">TokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationUrlInput`<sup>Optional</sup> <a name="AuthorizationUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrlInput"></a>

```csharp
public string AuthorizationUrlInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrlInput"></a>

```csharp
public string TokenUrlInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustAccessApplicationScimConfigAuthentication InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a>

---


### ZeroTrustAccessApplicationScimConfigMappingsList <a name="ZeroTrustAccessApplicationScimConfigMappingsList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationScimConfigMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.get"></a>

```csharp
private ZeroTrustAccessApplicationScimConfigMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference <a name="ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.createInput">CreateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.updateInput">UpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.create">Create</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.delete">Delete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.update">Update</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.createInput"></a>

```csharp
public object CreateInput { get; }
```

- *Type:* object

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.deleteInput"></a>

```csharp
public object DeleteInput { get; }
```

- *Type:* object

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.updateInput"></a>

```csharp
public object UpdateInput { get; }
```

- *Type:* object

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.create"></a>

```csharp
public object Create { get; }
```

- *Type:* object

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.delete"></a>

```csharp
public object Delete { get; }
```

- *Type:* object

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.update"></a>

```csharp
public object Update { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustAccessApplicationScimConfigMappingsOperations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a>

---


### ZeroTrustAccessApplicationScimConfigMappingsOutputReference <a name="ZeroTrustAccessApplicationScimConfigMappingsOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationScimConfigMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.putOperations">PutOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetOperations">ResetOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetTransformJsonata">ResetTransformJsonata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperations` <a name="PutOperations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.putOperations"></a>

```csharp
private void PutOperations(ZeroTrustAccessApplicationScimConfigMappingsOperations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.putOperations.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetOperations` <a name="ResetOperations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetOperations"></a>

```csharp
private void ResetOperations()
```

##### `ResetTransformJsonata` <a name="ResetTransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.resetTransformJsonata"></a>

```csharp
private void ResetTransformJsonata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.operations">Operations</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference">ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.operationsInput">OperationsInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.transformJsonataInput">TransformJsonataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.transformJsonata">TransformJsonata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Operations`<sup>Required</sup> <a name="Operations" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.operations"></a>

```csharp
public ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference Operations { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference">ZeroTrustAccessApplicationScimConfigMappingsOperationsOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `OperationsInput`<sup>Optional</sup> <a name="OperationsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.operationsInput"></a>

```csharp
public ZeroTrustAccessApplicationScimConfigMappingsOperations OperationsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOperations">ZeroTrustAccessApplicationScimConfigMappingsOperations</a>

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TransformJsonataInput`<sup>Optional</sup> <a name="TransformJsonataInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.transformJsonataInput"></a>

```csharp
public string TransformJsonataInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `TransformJsonata`<sup>Required</sup> <a name="TransformJsonata" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.transformJsonata"></a>

```csharp
public string TransformJsonata { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationScimConfigOutputReference <a name="ZeroTrustAccessApplicationScimConfigOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationScimConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putAuthentication">PutAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putMappings">PutMappings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetAuthentication">ResetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetDeactivateOnDelete">ResetDeactivateOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetMappings">ResetMappings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthentication` <a name="PutAuthentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putAuthentication"></a>

```csharp
private void PutAuthentication(ZeroTrustAccessApplicationScimConfigAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a>

---

##### `PutMappings` <a name="PutMappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putMappings"></a>

```csharp
private void PutMappings(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.putMappings.parameter.value"></a>

- *Type:* object

---

##### `ResetAuthentication` <a name="ResetAuthentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetAuthentication"></a>

```csharp
private void ResetAuthentication()
```

##### `ResetDeactivateOnDelete` <a name="ResetDeactivateOnDelete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetDeactivateOnDelete"></a>

```csharp
private void ResetDeactivateOnDelete()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetMappings` <a name="ResetMappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.resetMappings"></a>

```csharp
private void ResetMappings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.authentication">Authentication</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference">ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.mappings">Mappings</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList">ZeroTrustAccessApplicationScimConfigMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.authenticationInput">AuthenticationInput</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.deactivateOnDeleteInput">DeactivateOnDeleteInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.idpUidInput">IdpUidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.mappingsInput">MappingsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.remoteUriInput">RemoteUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.deactivateOnDelete">DeactivateOnDelete</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.idpUid">IdpUid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.remoteUri">RemoteUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.authentication"></a>

```csharp
public ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference Authentication { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference">ZeroTrustAccessApplicationScimConfigAuthenticationOutputReference</a>

---

##### `Mappings`<sup>Required</sup> <a name="Mappings" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.mappings"></a>

```csharp
public ZeroTrustAccessApplicationScimConfigMappingsList Mappings { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigMappingsList">ZeroTrustAccessApplicationScimConfigMappingsList</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.authenticationInput"></a>

```csharp
public ZeroTrustAccessApplicationScimConfigAuthentication AuthenticationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigAuthentication">ZeroTrustAccessApplicationScimConfigAuthentication</a>

---

##### `DeactivateOnDeleteInput`<sup>Optional</sup> <a name="DeactivateOnDeleteInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.deactivateOnDeleteInput"></a>

```csharp
public object DeactivateOnDeleteInput { get; }
```

- *Type:* object

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdpUidInput`<sup>Optional</sup> <a name="IdpUidInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.idpUidInput"></a>

```csharp
public string IdpUidInput { get; }
```

- *Type:* string

---

##### `MappingsInput`<sup>Optional</sup> <a name="MappingsInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.mappingsInput"></a>

```csharp
public object MappingsInput { get; }
```

- *Type:* object

---

##### `RemoteUriInput`<sup>Optional</sup> <a name="RemoteUriInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.remoteUriInput"></a>

```csharp
public string RemoteUriInput { get; }
```

- *Type:* string

---

##### `DeactivateOnDelete`<sup>Required</sup> <a name="DeactivateOnDelete" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.deactivateOnDelete"></a>

```csharp
public object DeactivateOnDelete { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `IdpUid`<sup>Required</sup> <a name="IdpUid" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.idpUid"></a>

```csharp
public string IdpUid { get; }
```

- *Type:* string

---

##### `RemoteUri`<sup>Required</sup> <a name="RemoteUri" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.remoteUri"></a>

```csharp
public string RemoteUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfigOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustAccessApplicationScimConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationScimConfig">ZeroTrustAccessApplicationScimConfig</a>

---


### ZeroTrustAccessApplicationTargetCriteriaList <a name="ZeroTrustAccessApplicationTargetCriteriaList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationTargetCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.get"></a>

```csharp
private ZeroTrustAccessApplicationTargetCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationTargetCriteriaOutputReference <a name="ZeroTrustAccessApplicationTargetCriteriaOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationTargetCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.putTargetAttributes">PutTargetAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetAttributes` <a name="PutTargetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.putTargetAttributes"></a>

```csharp
private void PutTargetAttributes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.putTargetAttributes.parameter.value"></a>

- *Type:* object

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.targetAttributes">TargetAttributes</a></code> | <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList">ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.targetAttributesInput">TargetAttributesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetAttributes`<sup>Required</sup> <a name="TargetAttributes" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.targetAttributes"></a>

```csharp
public ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList TargetAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList">ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList</a>

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `TargetAttributesInput`<sup>Optional</sup> <a name="TargetAttributesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.targetAttributesInput"></a>

```csharp
public object TargetAttributesInput { get; }
```

- *Type:* object

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList <a name="ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.get"></a>

```csharp
private ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference <a name="ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Cloudflare;

new ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-cloudflare.zeroTrustAccessApplication.ZeroTrustAccessApplicationTargetCriteriaTargetAttributesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



